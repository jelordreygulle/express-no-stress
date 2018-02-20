import CountriesService from '../../services/countries.service';

export class Controller {
    findAll(req, res, next) {
        CountriesService.findAll(req, res, (err, resp) => {
            if (err) {
                res.status(500).json({ 'msg': resp });
            } else {
                console.log('Response Length : ', resp.length);
                console.log('Data Type : ', typeof (resp));
                res.status(200).json(resp);
            }
        });
    }
    create(req, res, next) {
        CountriesService.create(req, res, (err, resp) => {
            if (err) {
                res.status(500).json({ 'msg': resp });
            } else {
                res.status(200).json(resp);
            }
        });
    }
}

export default new Controller();