const User = require("./user")
const Favorite = require("./favourites")
User.hasMany(Favorite, {as : "userId"})
module.exports = { User, Favorite}