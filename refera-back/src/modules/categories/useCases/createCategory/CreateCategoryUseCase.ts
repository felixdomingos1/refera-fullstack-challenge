import { Category } from '../../model/ICategoryInterface';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
}

class CreateCategoryUseCase {
  constructor(private usersRepository: ICategoriesRepository) {}

  execute({ name }: IRequest): Category {
    return this.usersRepository.create({ name });
  }
}

export { CreateCategoryUseCase };
