import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const usersRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(usersRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
