export interface IEmployee {
    empId : number;
    name: string;
}

export class Employee implements IEmployee {
    empId = 0;
    name = '';
}