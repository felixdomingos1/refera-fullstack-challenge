import { OrderInterface } from '../model/';

interface ICreateOrderDTO {
  name: string;
  phone: string;
  agency: string;
  description?: string;
  company: string;
  category: string;
  deadline: Date;
}

interface IOrdersRepository {
  create({ name, agency, category, company, deadline, phone, description }: ICreateOrderDTO): Promise<OrderInterface>;
  findById(id: string): Promise<OrderInterface | undefined>;
  list(): Promise<OrderInterface[]>;
}

export { IOrdersRepository, ICreateOrderDTO };
