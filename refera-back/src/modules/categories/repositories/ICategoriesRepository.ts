import { Category } from '../model/ICategoryInterface';

interface ICreateCategryDTO {
  name: string;
}

interface ICategoriesRepository {
  create({ name }: ICreateCategryDTO): Promise<Category>;
  findById(id: string): Promise<Category> | undefined;
  list(): Promise<Category[]>;
}

export { ICategoriesRepository, ICreateCategryDTO };
