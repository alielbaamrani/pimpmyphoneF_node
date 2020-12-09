// exporte table with all field
module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        // name of table
        "Model", {
            // field name
            id: {
                //set data type with out max length
                type: Sequelize.DataTypes.INTEGER,
                // set primaryKey = true
                primaryKey: true,
                // set autoIncrement = true
                autoIncrement: true
            },
            nom: {
                //set data type with max length
                type: Sequelize.DataTypes.STRING(60),
                // setting allowNull to false will add NOT NULL to the column, which means an error will be if you add info in this column
                allowNull: true
            },
            couleur: {
                //set data type with max length
                type: Sequelize.DataTypes.STRING(60),
                // setting allowNull to false will add NOT NULL to the column, which means an error will be if you add info in this column
                allowNull: true
            },
            capacite: {
                //set data type with max length
                type: Sequelize.DataTypes.STRING(60),
                // setting allowNull to false will add NOT NULL to the column, which means an error will be if you add info in this column
                allowNull: true
            },
            panne: {
                //set data type with max length
                type: Sequelize.DataTypes.STRING(60),
                // setting allowNull to false will add NOT NULL to the column, which means an error will be if you add info in this column
                allowNull: true
            },


        }, {
            timestamps: true,
            underscored: true
        }
    );
};