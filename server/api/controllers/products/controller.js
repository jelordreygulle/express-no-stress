import ProductsService from '../../services/products.service';

export class Controller {
    findAll(req, res, next) {
        ProductsService.findAll(req, res, (err, resp) => {
            if (err) {
                res.status(500).json({ 'msg': resp });
            } else {
                console.log('Response Length : ',resp.length);
                console.log('Data Type : ', typeof(resp));
                res.status(200).json(resp);
            }
        });
    }

    findById(req, res, next) {
        ProductsService.findById(req, res, (err, resp) => {
                if (err) {
                    res.status(500).json({ 'msg': resp });
                } else {
                    res.status(200).json(resp);
                }
            });
    }

    create(req, res, next) {
        ProductsService.create(req, res, (err, resp) => {
                if (err) {
                    res.status(500).json({ 'msg': resp });
                } else {
                    res.status(200).json(resp);
                }
            });
    }
}

export default new Controller();