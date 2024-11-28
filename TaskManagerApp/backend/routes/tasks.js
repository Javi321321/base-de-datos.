const express = require('express');
const { Task } = require('../models/Task');

const router = express.Router();

// Crear tarea
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = await Task.create({ title, description });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
});

// Obtener tareas
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
});

// Actualizar tarea
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try {
        const task = await Task.update({ title, description, status }, { where: { id } });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
});

// Eliminar tarea
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Task.destroy({ where: { id } });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
});

module.exports = router;
