import axios from 'axios';
const { API_KEY } = process.env;

const getArticlesByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`);
        const articles = response.data.articles;
        res.json(articles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

export {
    getArticlesByCategory
}
