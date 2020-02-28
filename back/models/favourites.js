const S = require('sequelize');
const db = require('../config/db') 
const Favorite = db.define('favorites', {
    idMovie: {
        type: S.STRING,
        allowNull: false,
    }
})
module.exports = Favorite;