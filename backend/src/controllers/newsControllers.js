import axios from 'axios';
import Post from '../models/Post';
import Category from '../models/Category';

const fetchNews = async (req, res) => {
    try {
        const categories = await Category.findAll();

        for (const category of categories) {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${category.name}&apiKey=${process.env.NEWSAPI_KEY}`);
            const articles = response.data.articles;

            for (const article of articles) {
                await Post.create({
                    title: article.title,
                    content: article.description,
                    category_id: category.id,
                    // Ajouter ici tous les autres champs à stocker
                });
            }
        }

        res.json({ message: 'News fetched and stored successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while fetching news' });
    }
};

export {
    fetchNews,
};
