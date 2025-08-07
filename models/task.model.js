module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    // Model attributes
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Task;
};
