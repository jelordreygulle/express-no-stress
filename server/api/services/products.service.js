import l from '../../common/logger';
import db from './products.db.schema';
import ext_tagsSchema from './tags.db.schema';
//import ext_producttagsSchema from './producttags.db.schema';


class ProductsService {

    findAll(req, res, next) {
        l.info(`${this.constructor.name}.findAll()`);

        let getAllTagsByProduct = async()=> {
            return new Promise(resolve => {
                resolve(ext_tagsSchema.findAll({}));
            }); 
        }

        let getAllProducts = async()=> {
            return new Promise(resolve => {
                resolve(db.findAll({ offset: req.query.offset, limit: req.query.limit }));
            });
        }    

        let init = async() => {
            let x = await getAllProducts();
            let y = await getAllTagsByProduct();
            console.log(' y ',y);
            next(null, x);
        };

        init().catch(err => {
            next(err,{'msg':err});
        });
    }

    findById(req, res, next) {
        l.info(`${this.constructor.name}.findById(${req.params})`);

        let getTagsByProduct = async() => {
            return new Promise(resolve => {
                resolve(ext_tagsDb.find({
                    where: {
                        p_id: req.params.id
                    }
                  })
                );
            });
        }

        let getCategoriesByProduct = async() => {
            return new Promise(resolve => {
                resolve(db.find({
                    where: {
                        p_id: req.params.id
                    }
                  })
                );
            });
        }

        let getProduct = async() => {
            return new Promise(resolve => {
                resolve(db.find({
                    where: {
                        p_id: req.params.id
                    }
                  })
                );
            });
        }

        let init = async() => {
            let x = await getProduct();
            x.dataValues['tags'] = await getTagsByProduct(req.params.id);
            x.dataValues['categories'] = await getCategoriesByProduct(req.params.id);
            next(null,x);
        };

        init().catch(err => {
            next(err,{'msg':err});
        });
    }

    create(req, res, next) {
        l.info(`${this.constructor.name}.create(${req.body})`);
        let createProduct = async() => {
            return new Promise(resolve => {
                resolve(db.create(req.body));
            });
        }    

        let init = async() => {
            let x = await createProduct();
            next(null,x);
        };

        init().catch(err => {
            next(err,{'msg':err});
        });
    }
}

export default new ProductsService();