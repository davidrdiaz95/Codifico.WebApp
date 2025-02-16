import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../model/response.model';
import { SalesDatePrediction } from '../model/sales_date_prediction.model';

@Injectable({
  providedIn: 'root'
})
export class SalesDatePredictionService {

  constructor(private http: HttpClient) {}

  GetSalesDatePrediction(page: number, size: number, search: string): Observable<Response<SalesDatePrediction[]>> {
    return this.http.get<Response<SalesDatePrediction[]>>(environment.urlApi+"Prediction/GetSalesDatePrediction?page="+page+"&size="+size+'&search='+search);
  }
}
