import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../model/response.model';
import { ClientOrder } from '../model/client_order.model';

@Injectable({
  providedIn: 'root'
})
export class ClientOrderService {

  constructor(private http: HttpClient) {}

  GetClientOrders(page: number, size: number, id: number): Observable<Response<ClientOrder[]>> {
    return this.http.get<Response<ClientOrder[]>>(environment.urlApi+"ClientOrder/GetClientOrders?page="+page+"&size="+size+'&id='+id);
  }
}
