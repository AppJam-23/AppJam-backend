const Sequelize = require("sequelize");
const People_Info = require("./people_info");
const Event = require("./event");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.People_Info = People_Info;
db.Event = Event;

People_Info.initiate(sequelize);
Event.initiate(sequelize);

People_Info.associate(db);
Event.associate(db);

module.exports = db;
