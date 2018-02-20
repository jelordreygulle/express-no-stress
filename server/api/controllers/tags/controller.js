import TagsService from '../../services/tags.service';

export class Controller {
    findAll(req, res, next) {
        TagsService.findAll(req, res, (err, resp) => {
            if (err) {
                res.status(500).json({ 'msg': resp });
            } else {
                console.log('Response Length : ', resp.length);
                console.log('Data Type : ', typeof (resp));
                res.status(200).json(resp);
            }
        });
    }

    findById(req, res, next) {
        TagsService.findById(req, res, (err, resp) => {
            if (err) {
                res.status(500).json({ 'msg': resp });
            } else {
                res.status(200).json(resp);
            }
        });
    }

    create(req, res, next) {
        TagsService.create(req, res, (err, resp) => {
            if (err) {
                res.status(500).json({ 'msg': resp });
            } else {
                res.status(200).json(resp);
            }
        });
    }
}

export default new Controller();