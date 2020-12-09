// exporte table with all field
module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        // name of table
        "Administrateur", {
            // field name
            id: {
                //set data type with out max length
                type: Sequelize.DataTypes.INTEGER,
                // set primaryKey = true
                primaryKey: true,
                // set autoIncrement = true
                autoIncrement: true
            },
            login: {

                type: Sequelize.DataTypes.STRING(60),
                allowNull: true
            },
            password: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false

            },


        }, {
            timestamps: true,
            underscored: true
        }

    );
};