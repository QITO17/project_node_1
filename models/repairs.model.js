const { db } = require('../database/conetion');
const { DataTypes } = require('sequelize');

const Repair = db.define('repair', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },
  idUser: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
});

module.exports = Repair;
