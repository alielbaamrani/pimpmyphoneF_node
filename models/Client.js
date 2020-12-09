module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Client", {

            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nom: {

                type: Sequelize.DataTypes.STRING(60),
                allowNull: true
            },
            prenom: {
                type: Sequelize.DataTypes.STRING(60),
                allowNull: true
            },
            email: {
                type: Sequelize.DataTypes.STRING(150),
                allowNull: false,
                unique: true
            },
            tel: {
                type: Sequelize.DataTypes.STRING(10),
                allowNull: true
            },
            adresse: {
                type: Sequelize.DataTypes.STRING(150),
                allowNull: true,
            },
            lieux: {
                type: Sequelize.DataTypes.STRING(150),
                allowNull: true,
            },

        }, {

            timestamps: true,
            underscored: true
        }
    );
}