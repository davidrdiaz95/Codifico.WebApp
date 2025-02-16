export interface INewOrder {
    custId : number;
    empId: number;
    shipperId: number;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    orderDate: string;
    requiredDate: string;
    shippedDate: string;
    freight: number;
    shipCountry: string;
    poductId: number;
    unitPrice: number;
    qty: number;
    discount: number;
}

export class NewOrder implements INewOrder {
    custId = 0;
    empId = 0;
    shipperId = 0;
    shipName = '';
    shipAddress = '';
    shipCity = '';
    orderDate = '';
    requiredDate = '';
    shippedDate = '';
    freight = 0;
    shipCountry = '';
    poductId = 0;
    unitPrice = 0;
    qty = 0;
    discount = 0;

}