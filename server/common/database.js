import Sequelize from 'sequelize';
const Op = Sequelize.Op;
/* const conf = new Sequelize('symphony_preprod', 'info4loop', 'ChickenPitaka?!56', {
    host: 'symphony-rds-pre-production.cvyzbxahx4jk.ap-southeast-2.rds.amazonaws.com',
    dialect: 'mysql',
    operatorsAliases: Op,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
}); */
const conf = new Sequelize('symphony_staging', 'root', '123233', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: Op,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
const a = {
    Sequelize: Sequelize,
    sequelize : conf
}

export default a;