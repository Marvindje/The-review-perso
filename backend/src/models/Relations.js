const Category = require('./Category');
const Post = require('./Post');
const Like = require('./Like');
const User = require('./User');

// Définir la relation entre Category et Post
Category.hasMany(Post, { foreignKey: 'category_id' });
Post.belongsTo(Category, { foreignKey: 'category_id' });

// Définir la relation entre User et Post (si nécessaire)
User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

// Définir la relation entre User et Like 
User.hasMany(Like, { foreignKey: 'user_id' });
Like.belongsTo(User, { foreignKey: 'user_id' });

// Définir la relation entre Post et Like 
Post.hasMany(Like, { foreignKey: 'post_id' });
Like.belongsTo(Post, { foreignKey: 'post_id' });
