import { Component, OnInit } from '@angular/core';
import { OrderStateService } from '../services/order-state.service';
import * as fin from 'fincalc';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  maker = false;

  email = "";
  name = "";
  phone = "";
  address = "";

  makeshift = true;
  
  constructor(public orderState: OrderStateService, private http: Http, private router: Router) {
    if(this.orderState.fold>0.0 && this.orderState.iron>0.0){
      this.maker = false;
    }
    else if(this.orderState.fold>0.0 || this.orderState.iron>0.0){
      this.maker = false;
    }
    else{
      this.maker = true;
    }
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

  getFoldTotal(){
    return fin(this.orderState.fold*this.orderState.fold_p);
  }

  getIronTotal(){
    return fin(this.orderState.iron*this.orderState.iron_p);
  }

  getGrandTotal(){
    return this.orderState.total;
  }

  makeCheck(){
    if(this.address=="" || this.phone=="" || this.name=="" || this.email=="" || this.address==" " || this.phone==" " || this.name==" " || this.address==" "){
      alert("Please fill all fields");
    }
    else{
      this.makeshift = false;
      var t = {
        "iron": {
          "quant": this.orderState.iron
        },
        "fold": {
          "quant": this.orderState.fold
        },
        "address": this.address,
        "phone": this.phone,
        "name": this.name,
        "total_price": this.phone,
        "email": this.email
      };
      this.http.post("https://serversonsays.herokuapp.com/send/", t)
      .subscribe(res => {
        console.log(res);
        console.log(JSON.parse(res["_body"])["success"]);
        if(JSON.parse(res["_body"])["success"]==1){
          alert("Order Placed Successfully");
          this.address = "";
          this.phone = "";
          this.name = "";
          this.email = "";
          this.makeshift = true;
          this.router.navigateByUrl("Success");
        }
        else{
          alert("Order Failure");
          this.makeshift = true;
        }
      });
      
    }
  }

}
