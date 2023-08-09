const models = require("../models");

exports.browse = async (req, res) => {
    try {
        const items = await models.item.findAll();
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.read = async (req, res) => {
    try {
        const item = await models.item.find(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.edit = async (req, res) => {
    try {
        const item = req.body;
        item.id = parseInt(req.params.id, 10);

        // TODO validations (length, format...)

        const result = await models.item.update(item);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.add = async (req, res) => {
    try {
        const item = req.body;

        // TODO validations (length, format...)

        const result = await models.item.insert(item);
        res.location(`/items/${result.insertId}`).status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.destroy = async (req, res) => {
    try {
        const result = await models.item.delete(req.params.id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    browse,
    read,
    edit,
    add,
    destroy,
};
