import examplesRouter from './api/controllers/examples/router';
import productsRouter from './api/controllers/products/router';
import tagsRouter from './api/controllers/tags/router';
import countriesRouter from './api/controllers/countries/router';

import expressValidator from 'express-validator';

export default function routes(app) {
  app.use(expressValidator());
  
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/products', productsRouter);
  app.use('/api/v1/tags', tagsRouter);
  app.use('/api/v1/countries', countriesRouter);
}
