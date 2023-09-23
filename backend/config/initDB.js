const { sequelize } = require("./db"); // Ajustez le chemin si nécessaire
const { PostModel } = require("../src/models/post.model"); // Ajustez le chemin vers votre modèle Post

const articles = [
  {
    title: "Web Dev 1",
    description: "Learn about HTML, CSS, and JavaScript",
    category: "web dev",
  },
  {
    title: "Web Dev 2",
    description: "Introduction to Frontend Frameworks",
    category: "web dev",
  },
  {
    title: "AI 1",
    description: "Basics of Artificial Intelligence",
    category: "ai",
  },
  { title: "AI 2", description: "Machine Learning Algorithms", category: "ai" },
  {
    title: "Hardware 1",
    description: "Understanding Computer Components",
    category: "hardware",
  },
  {
    title: "Hardware 2",
    description: "How to Build a PC",
    category: "hardware",
  },
  {
    title: "Software 1",
    description: "Software Development Life Cycle",
    category: "software",
  },
  {
    title: "Software 2",
    description: "Version Control Systems",
    category: "software",
  },
  {
    title: "Cybersec 1",
    description: "Introduction to Cybersecurity",
    category: "cybersec",
  },
  {
    title: "Cybersec 2",
    description: "Protecting Against Malware",
    category: "cybersec",
  },
  {
    title: "Careers 1",
    description: "How to Prepare for a Tech Interview",
    category: "careers",
  },
  {
    title: "Careers 2",
    description: "Choosing the Right Tech Job",
    category: "careers",
  },
  {
    title: "Web Dev 3",
    description: "Backend Development",
    category: "web dev",
  },
  { title: "AI 3", description: "Natural Language Processing", category: "ai" },
  {
    title: "Hardware 3",
    description: "Internet of Things (IoT)",
    category: "hardware",
  },
  {
    title: "Software 3",
    description: "Open Source Contributions",
    category: "software",
  },
];

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync(); // Vous pouvez ajouter { force: true } si vous voulez réinitialiser la table
  })
  .then(() => {
    // Insérer les articles dans la base de données
    return Promise.all(articles.map((article) => PostModel.create(article)));
  })
  .then(() => {
    console.log("Database initialized successfully.");
  })
  .catch((err) => {
    console.error("An error occurred while creating the table:", err);
  });
