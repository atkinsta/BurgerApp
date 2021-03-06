module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 100]
            }
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });
    return Burger;
}