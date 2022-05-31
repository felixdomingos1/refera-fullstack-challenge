import { v4 as uuidV4 } from 'uuid';

class Order {
  id?: string;
  name: string;
  phone: string;
  agency: string;
  description?: string;
  company: string;
  category: string;
  deadline: Date;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Order };
