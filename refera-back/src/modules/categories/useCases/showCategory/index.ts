import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ShowCategoryController } from './ShowCategoryController';
import { ShowCategoryUseCase } from './ShowCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const showCategoryUseCase = new ShowCategoryUseCase(categoriesRepository);
const showCategoryController = new ShowCategoryController(showCategoryUseCase);

export { showCategoryController };
