import middleware from './middleware';
import controller from './controller';
import route from 'express';
const router = new route.Router();


router.route('/')
    .get((...args) => controller.findAll(...args))
    .post(middleware.isLogin, (...args) => controller.create(...args));

export default router
