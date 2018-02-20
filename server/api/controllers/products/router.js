import controller from './controller';
import route from 'express';
const router = new route.Router();

 router.route('/')
  .get((...args) => controller.findAll(...args))
  .post((...args) => controller.create(...args));

router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args));

 export default router
