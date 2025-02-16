export interface ISalesDatePrediction {
  customerName: string;
  lastOrderDate: Date;
  nextPredictedOrder: Date;
  count: number;
  customerId: number;
}

export class SalesDatePrediction implements ISalesDatePrediction {
  customerName = "";
  lastOrderDate = new Date();
  nextPredictedOrder = new Date();
  count = 0;
  customerId = 0;
}