module.exports = (sequelize, DataTypes) => {
    const Relax = sequelize.define("Relax", {
      quote: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });
    return Relax;
  };
  
  