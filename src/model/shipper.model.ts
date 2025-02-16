export interface IShipper {
    shipperId : number;
    companyName: string;
}

export class Shipper implements IShipper {
    shipperId = 0;
    companyName = '';
}