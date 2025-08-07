module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // Model attributes
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  return User;
};
