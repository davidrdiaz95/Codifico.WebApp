import { Component } from '@angular/core';
import { ClientOrderService } from '../../service/client-order.service';
import { ClientOrder } from '../../model/client_order.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare var bootstrap: any; 

@Component({
  selector: 'app-orders-view',
  imports: [FormsModule,CommonModule],
  templateUrl: './orders-view.component.html',
  styleUrl: './orders-view.component.scss'
})
export class OrdersViewComponent {
  listOrder!: ClientOrder[];
  page: number =1;
  id: number =0;
  size: number =10;
  textPage: string = "";
  title: string = "";

  constructor(private clientOrderService: ClientOrderService){}

  open(id: number, name: string): void {
    this.id = id;
    this.title = name;
    this.getOrders();
    const modalElement = document.getElementById('modalOrders');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  onChange(deviceValue: any){
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
    this.clientOrderService.GetClientOrders(this.page,this.size,this.id).subscribe(
      order=> {
        if(order.statusCode == 200)
        {
          this.listOrder = order.data;
          this.textPage = (this.page * this.size +1 - this.size)+"-"+(this.page * this.size)+"-"+ order.data[0].count;
        }
      }
    );
  }
}
