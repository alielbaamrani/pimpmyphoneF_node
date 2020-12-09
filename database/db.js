const Sequelize = require("sequelize");

const db = {};

// info pour la conn a la base
const dbinfo = new Sequelize("pimpmyphone", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    pool: {
        max: 5,
        min: 0,
    }
});


dbinfo.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.")
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

db.administrateur = require("../models/Administrateur")(dbinfo, Sequelize);
db.client = require("../models/Client")(dbinfo, Sequelize);
db.contact = require("../models/Contact")(dbinfo, Sequelize);
db.locaux = require("../models/Locaux")(dbinfo, Sequelize);
db.model = require("../models/Model")(dbinfo, Sequelize);
db.newsletter = require("../models/Newsletter")(dbinfo, Sequelize);
db.reparation = require("../models/Reparation")(dbinfo, Sequelize);
db.telephone = require("../models/Telephone")(dbinfo, Sequelize);

db.telephone.hasMany(db.model, {
    foreignKey: "telephoneId"
});




db.dbinfo = dbinfo;
db.Sequelize = Sequelize;

//dbinfo.sync({
//  force: true
// });

module.exports = db;