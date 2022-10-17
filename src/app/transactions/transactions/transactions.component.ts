import { Component, OnInit } from '@angular/core';
import { TransactionsInfo } from 'src/app/types/TransactionsInfo';
import { TransactionsService } from './../transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transId: number = 0;
  transactions : string=''
  amount : number=0.0;
  transactionsBy : string=''
  transDate : Date = new Date();
  status: boolean = true;

  transactionsInfo : TransactionsInfo = new TransactionsInfo();
  transactionsMsg:any = '';

  constructor(private transactionsService : TransactionsService) { }

  ngOnInit(): void {
    console.info(this.transactionsInfo)
  }


  createTransactions(){
   let respponse = this.transactionsService.createTransactions(this.transactionsInfo);
   respponse.subscribe((msg)=>this.transactionsMsg = msg);
   console.log('transactionsMsg : ',this.transactionsMsg);
   this.transactionsInfo  = new TransactionsInfo();
  }


}
