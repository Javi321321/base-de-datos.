const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks');
const usersRoutes = require('./routes/users');
const { sequelize } = require('./models/Task');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/tasks', tasksRoutes);
app.use('/users', usersRoutes);

// Conectar a la base de datos y arrancar el servidor
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.error('Database connection error:', err));
