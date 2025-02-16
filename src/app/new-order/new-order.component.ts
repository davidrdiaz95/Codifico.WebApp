import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewOrderService } from '../../service/new-order.service';
import { NewOrder } from '../../model/new_order.model';
import { Product } from '../../model/product.model';
import { Shipper } from '../../model/shipper.model';
import { Employee } from '../../model/employee.model';
declare var bootstrap: any;

@Component({
  selector: 'app-new-order',
  imports: [NgbModule, CommonModule, FormsModule],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewOrderComponent {
  newOrder = new NewOrder();
  products: Product[] = [];
  shippers: Shipper[] = [];
  employees: Employee[] = [];

  orderDate : any;
  shippedDate : any;
  requiredDate : any;
  title: string = "";

  constructor(private newOrderService: NewOrderService) { }

  open(custId: number, name: string): void {
    this.title = name;
    this.newOrder.custId = custId
    this.getEmployee();
    this.getProducts();
    this.getShippers();
    const modalElement = document.getElementById('modalNewOrder');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  onDateChangeRequiredDate(date: NgbDate): void {
    if (date) {
      const jsDate = new Date(date.year, date.month - 1, date.day);
      jsDate.setHours(0, 0, 0, 0); 
      this.newOrder.requiredDate = jsDate.toISOString();
    }
  }

  onDateChangeShippedDate(date: NgbDate): void {
    if (date) {
      const jsDate = new Date(date.year, date.month - 1, date.day);
      jsDate.setHours(0, 0, 0, 0); 
      this.newOrder.shippedDate = jsDate.toISOString();
    }
  }

  onDateChangeOrderDate(date: NgbDate): void {
    if (date) {
      const jsDate = new Date(date.year, date.month - 1, date.day);
      jsDate.setHours(0, 0, 0, 0); 
      this.newOrder.orderDate = jsDate.toISOString();
    }
  }


  save() {
    this.newOrderService.AddNewOrder(this.newOrder).subscribe(
      employee => {
        if (employee.statusCode == 200) {
          alert(employee.data);
          const modalElement = document.getElementById('modalNewOrder');
          const modal = new bootstrap.Modal(modalElement);
          modal.hide();
        }
        else
        {
          alert(employee.error[0]);
          const modalElement = document.getElementById('modalNewOrder');
          const modal = new bootstrap.Modal(modalElement);
          modal.hide();
        }
      }
    );
  }

  getEmployee() {
    this.newOrderService.GetEmployee().subscribe(
      employee => {
        if (employee.statusCode == 200) {
          this.employees = employee.data;
        }
      }
    );
  }

  getProducts() {
    this.newOrderService.GetProducts().subscribe(
      product => {
        if (product.statusCode == 200) {
          this.products = product.data;
        }
      }
    );
  }

  getShippers() {
    this.newOrderService.GetShippers().subscribe(
      shipper => {
        if (shipper.statusCode == 200) {
          this.shippers = shipper.data;
        }
      }
    );
  }
}
