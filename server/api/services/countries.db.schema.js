import x from '../../common/database';

const countriesSchema = {
    id: {
        type: x.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    sortname: {
        type: x.Sequelize.TEXT
    },
    name: {
        type: x.Sequelize.TEXT
    } 
};

const opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        // don't delete database entries but set the newly added attribute deletedAt
        // to the current date (when deletion was done). paranoid will only work if
        // timestamps are enabled
        paranoid: true,
        // don't use camelcase for automatically added attributes but underscore style
        // so updatedAt will be updated_at
        underscored: false
    }
}

module.exports = x.sequelize.define('countries', countriesSchema, opts.define);
