export interface IProduct {
    productId : number;
    productName: string;
}

export class Product implements IProduct {
    productId = 0;
    productName = '';
}