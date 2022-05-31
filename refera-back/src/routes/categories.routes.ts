import { Router } from 'express';

import { createCategoryController } from '../modules/categories/useCases/createCategory';
import { listAllCategoriesController } from '../modules/categories/useCases/listAllCategories';
import { showCategoryController } from '../modules/categories/useCases/showCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.get('/:category_id', (request, response) => showCategoryController.handle(request, response));

categoriesRoutes.get('/', (request, response) => listAllCategoriesController.handle(request, response));

export { categoriesRoutes };
