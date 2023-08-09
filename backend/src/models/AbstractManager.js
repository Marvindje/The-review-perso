class AbstractManager {
    constructor(model) {
        this.model = model;
    }

    findAll() {
        return this.model.findAll();
    }

    findByPk(id) {
        return this.model.findByPk(id);
    }

    create(data) {
        return this.model.create(data);
    }

    update(data, where) {
        return this.model.update(data, { where });
    }

    delete(where) {
        return this.model.destroy({ where });
    }
}

module.exports = AbstractManager;
