import { Component, OnInit } from '@angular/core';
import { OrderStateService } from '../services/order-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public orderState: OrderStateService) { 
   
  }

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

}
