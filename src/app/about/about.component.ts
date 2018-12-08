import { Component, OnInit } from '@angular/core';
import { OrderStateService } from '../services/order-state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
