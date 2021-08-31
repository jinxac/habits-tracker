module.exports = (sequelize, DataTypes) => {
    const Sleep = sequelize.define('Sleep', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      startAt: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      endAt: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }, {
      timestamps: false,
    });
    return Sleep;
  };