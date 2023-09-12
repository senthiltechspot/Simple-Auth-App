require('dotenv').config()

module.exports = {
  mongoURI: process.env.MONGODB_URI,
  jwtSecret: process.env.SECRET_KEY,
};
