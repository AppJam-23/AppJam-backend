const Sequelize = require("sequelize");

class People_Info extends Sequelize.Model {
  static initiate(sequelize) {
    People_Info.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Name: {
          type: Sequelize.STRING(100),
        },
        Age: {
          type: Sequelize.INTEGER,
        },
        Gender: {
            type: Sequelize.BOOLEAN,
        },
        Temperature: {
          type: Sequelize.INTEGER,
        },
        Step: {
          type: Sequelize.INTEGER,
        },
        Heart: {
          type: Sequelize.INTEGER,
        },
        Sleep: {
          type: Sequelize.INTEGER,
        },
        Suspected: {
            type: Sequelize.BOOLEAN,
        },
        Patient: {
            type: Sequelize.BOOLEAN,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "People_Info",
        tableName: "People_Info",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {}
}

module.exports = People_Info;
