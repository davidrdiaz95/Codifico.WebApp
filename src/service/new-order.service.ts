import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../model/response.model';
import { NewOrder } from '../model/new_order.model';
import { Product } from '../model/product.model';
import { Shipper } from '../model/shipper.model';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class NewOrderService {

  constructor(private http: HttpClient) {}

  AddNewOrder(newOrder : NewOrder): Observable<Response<string>> {
    return this.http.post<Response<string>>(environment.urlApi+"Order/AddNewOrder",newOrder);
  }

  GetProducts(): Observable<Response<Product[]>> {
    return this.http.get<Response<Product[]>>(environment.urlApi+"Product/GetProducts");
  }

  GetShippers(): Observable<Response<Shipper[]>> {
    return this.http.get<Response<Shipper[]>>(environment.urlApi+"Shipper/GetShippers");
  }

  GetEmployee(): Observable<Response<Employee[]>> {
    return this.http.get<Response<Employee[]>>(environment.urlApi+"Employee");
  }
}
