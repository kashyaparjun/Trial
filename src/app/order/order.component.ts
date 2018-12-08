import { Component, OnInit } from '@angular/core';
import { OrderStateService } from '../services/order-state.service';
import * as fin from 'fincalc';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public orderState: OrderStateService) { }

  ngOnInit() {
  }

  getCount() {
    if(this.orderState.fold>0.0 && this.orderState.iron>0.0){
      return 2;
    }
    else if(this.orderState.fold>0.0 || this.orderState.iron>0.0){
      return 1;
    }
    else{
      return 0;
    }
  }

  add_fold(){
    this.orderState.fold = fin(this.orderState.fold+0.1);
    this.updateTotal();
  }

  add_iron(){
    this.orderState.iron = fin(this.orderState.iron+0.1);
    this.updateTotal();
  }

  sub_fold() {
    if(this.orderState.fold>0.0){
      this.orderState.fold = fin(this.orderState.fold-0.1);
      this.updateTotal();
    }
  }

  sub_iron() {
    if(this.orderState.iron>0.0){
      this.orderState.iron = fin(this.orderState.iron-0.1);
      this.updateTotal();
    }
  }

  updateTotal() {
    var fold_total = fin(this.orderState.fold*this.orderState.fold_p);
    var iron_total = fin(this.orderState.iron*this.orderState.iron_p);
    this.orderState.total = fin(fold_total+iron_total);
  }

  changed(){
    if(this.orderState.iron<0){
      alert("No ;-)");
      this.orderState.iron = fin(0.0+0.0);
    }
    if(this.orderState.fold<0){
      alert("No ;-)");
      this.orderState.fold = fin(0.0+0.0);
    }
    this.updateTotal();
  }

}
