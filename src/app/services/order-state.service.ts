import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderStateService {

  iron_p: number = 69;
  fold_p: number = 59;

  iron: number = 0.0;
  fold: number = 0.0;

  total: number = 0.0;

  constructor() { }
}
