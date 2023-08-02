const sequelize = require('./db');
const Category = require('./models/Category');

const categories = [
  'Développement Web',
  'Intelligence Artificielle',
  'Hardware',
  'Logiciels',
  'Cybersécurité',
  'Carrières Technos'
];

async function initDb() {
  try {
    await sequelize.sync({ force: true });

    for (const name of categories) {
      await Category.create({ name });
    }

    console.log('Database initialized!');
  } catch (err) {
    console.error('Failed to initialize database:', err);
  }
}

initDb();
