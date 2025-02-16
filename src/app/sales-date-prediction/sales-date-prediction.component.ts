import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersViewComponent } from '../orders-view/orders-view.component';
import { NewOrderComponent } from '../new-order/new-order.component';
import { SalesDatePredictionService } from '../../service/sales-date-prediction.service';
import { SalesDatePrediction } from '../../model/sales_date_prediction.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales-date-prediction',
  imports: [OrdersViewComponent,NewOrderComponent,CommonModule,FormsModule],
  templateUrl: './sales-date-prediction.component.html',
  styleUrl: './sales-date-prediction.component.scss'
})
export class SalesDatePredictionComponent  implements OnInit  {
  listPredictions!: SalesDatePrediction[];
  page: number =1;
  search: string ="";
  size: number =10;
  textPage: string = "";

  @ViewChild(OrdersViewComponent) popupOrder!: OrdersViewComponent;
  @ViewChild(NewOrderComponent) popupNewOrder!: NewOrderComponent;

  constructor (private salesDatePredictionService : SalesDatePredictionService)
  {  }

  ngOnInit(): void {
    this.getOrders();
  }
  

  openPopupOrders(salesDatePrediction: SalesDatePrediction): void {
    this.popupOrder.open(salesDatePrediction.customerId,salesDatePrediction.customerName);
  }

  openPopupNewOrder(salesDatePrediction: SalesDatePrediction): void {
    this.popupNewOrder.open(salesDatePrediction.customerId,salesDatePrediction.customerName);
  }

  onChange(deviceValue: any){
    this.page = 1;
    this.getOrders();
  }

  searchFilter(deviceValue: any){
    this.page = 1;
    this.getOrders();
  }

  previous(){
    if(this.page > 1)
    {
      this.page--;
      this.getOrders()
    }
  }

  next(){
    this.page++;
    this.getOrders()
  }

  getOrders(): void{
    this.salesDatePredictionService.GetSalesDatePrediction(this.page,this.size,this.search).subscribe(
      prediction=> {
        if(prediction.statusCode == 200)
        {
          this.listPredictions = prediction.data;
          this.textPage = (this.page * this.size +1 - this.size)+"-"+(this.page * this.size)+"-"+ prediction.data[0].count;
        }
      }
    );
  }

}
