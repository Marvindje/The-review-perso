import Category from './models/Category';

import { Sequelize } from 'sequelize';
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

export const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

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
