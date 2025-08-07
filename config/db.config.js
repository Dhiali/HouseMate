module.exports = {
  HOST: "localhost",
  USER: "housemate_user",
  PASSWORD: "Dhiali25!", 
  DB: "housemate_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
