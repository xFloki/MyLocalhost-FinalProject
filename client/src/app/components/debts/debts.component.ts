import { Component, OnInit } from '@angular/core';
import { DebtService } from './../../shared/services/debt.service';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {

  debts;
  activeDebts = [];
  oldDebts = [];
  toBePayedDebts = [];

  toPay = 0;
  toBePayed = 0;
  balance = 0;

  constructor(private debtService: DebtService) { }

  ngOnInit() {
    this.debtService.getUserDebts().subscribe(
      (debts) => {
        this.debts = debts;
        debts.forEach(e => {
          if(e.status){
            this.activeDebts.push(e)
            this.toPay += e.quantity
          } else {
            this.oldDebts.push(e);
          }
        });
      }
    );

    this.debtService.getUserCreditorDebts().subscribe(
      (debts) => {
        debts.forEach(e => {
          if(e.status) this.toBePayed += e.quantity;
        });
        this.toBePayedDebts = debts
      }
    );
  }

  calculateBalance(){
    this.balance = this.toBePayed - this.toPay;
  }

}
