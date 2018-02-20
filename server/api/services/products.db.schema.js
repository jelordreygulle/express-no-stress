import x from '../../common/database';

const productSchema = {
    p_id: {
        type: x.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    item_name: {
        type: x.Sequelize.STRING
    },
    item_overview: {
        type: x.Sequelize.TEXT
    },
    item_description: {
        type: x.Sequelize.TEXT
    },
    purchase_price: {
        type: x.Sequelize.DECIMAL
    },
    purchase_price: {
        type: x.Sequelize.DECIMAL
    },
    markup: {
        type: x.Sequelize.DOUBLE
    },
    sell_price: {
        type: x.Sequelize.DECIMAL
    },
    vat: {
        type: x.Sequelize.DECIMAL
    },
    productType_id: {
        type: x.Sequelize.INTEGER
    },
    product_code: {
        type: x.Sequelize.STRING
    },
    barcode: {
        type: x.Sequelize.STRING
    },
    brand: {
        type: x.Sequelize.STRING
    },
    start_date: {
        type: x.Sequelize.DATE
    },
    end_date: {
        type: x.Sequelize.DATE
    },
    is_published: {
        type: x.Sequelize.BOOLEAN
    },
    is_archived: {
        type: x.Sequelize.BOOLEAN
    },
    has_variants: {
        type: x.Sequelize.BOOLEAN
    },
    img_default: {
        type: x.Sequelize.STRING
    },
    date_created: {
        type: x.Sequelize.DATE,
        allowNull: true,
        defaultValue: x.sequelize.literal('NOW()')
    },
    _id: {
        type: x.Sequelize.UUID
    },
    last_updated: {
        type: x.Sequelize.DATE,
        allowNull: true,
        defaultValue: x.sequelize.literal('NOW()')
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

module.exports = x.sequelize.define('product', productSchema, opts.define);

