import l from '../../common/logger';
import countySchema from './countries.db.schema';
//import ext_tagsSchema from './tags.db.schema';
//import ext_producttagsSchema from './producttags.db.schema';


class CountriesService {

    findAll(req, res, next) {
        l.info(`${this.constructor.name}.findAll()`);

        let getAllCountries = async () => {
            return new Promise(resolve => {
                resolve(countySchema.findAll({}));
            });
        }

        let init = async () => {
            let x = await getAllCountries();
            next(null, x);
        };

        init().catch(err => {
            next(err, { 'msg': err });
        });
    }

    create(req, res, next) {
        l.info(`${this.constructor.name}.create(${req.body})`);
        let createCountries = async () => {
            return new Promise(resolve => {
                resolve(countySchema.create(req.body));
            });
        }

        let init = async () => {
            let x = await createCountries();
            next(null, x);
        };

        init().catch(err => {
            next(err, { 'msg': err });
        });
    }
}

export default new CountriesService();