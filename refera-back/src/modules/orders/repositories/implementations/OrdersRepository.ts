import { Order, OrderInterface } from '../../model';

import { IOrdersRepository, ICreateOrderDTO } from '../IOrdersRepository';

class OrdersRepository implements IOrdersRepository {
  private users: OrderInterface[];

  private static INSTANCE: OrdersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): OrdersRepository {
    if (!OrdersRepository.INSTANCE) {
      OrdersRepository.INSTANCE = new OrdersRepository();
    }

    return OrdersRepository.INSTANCE;
  }

  async create({
    name,
    agency,
    category,
    company,
    deadline,
    phone,
    description,
  }: ICreateOrderDTO): Promise<OrderInterface> {
    const order = new Order();

    Object.assign(order, {
      name,
      agency,
      category,
      company,
      deadline,
      phone,
      description,
      created_at: new Date(),
    });

    this.users.push(order);

    return order;
  }

  async findById(id: string): Promise<OrderInterface | undefined> {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  async list(): Promise<OrderInterface[]> {
    return this.users;
  }
}

export { OrdersRepository };
