const { authRoutes } = require("./auth.routes")

const router = (app) => {
    app.use('/auth', authRoutes);
}

module.exports = router;