require("./category.model")
require("./user.model")

const { sequelize } = require('../../config/db');

sequelize.sync().then(() => {}).catch((error) => {
    console.error("Unable to create tables : ", error)
});