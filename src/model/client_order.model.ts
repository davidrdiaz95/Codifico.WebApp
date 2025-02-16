export interface IClientOrder {
  orderId: number;
  requiredDate: Date;
  shippedDate: Date;
  shipName: string;
  count: number;
}

export class ClientOrder implements IClientOrder {
  orderId = 0;
  requiredDate = new Date();
  shippedDate = new Date();
  shipName = '';
  count = 0;
}