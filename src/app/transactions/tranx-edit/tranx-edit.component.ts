import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { TransactionsInfo } from 'src/app/types/TransactionsInfo';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-tranx-edit',
  templateUrl: './tranx-edit.component.html',
  styleUrls: ['./tranx-edit.component.css'],
})
export class TranxEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private transactionsService: TransactionsService
  ) {}
  id: any;
  transactionsInfo: TransactionsInfo = new TransactionsInfo();

  ngOnInit(): void {
    this.id = this.route.snapshot.params['transId']
    console.log('id : ',this.id)
    let resp = this.transactionsService
      .findOneTransactions(this.id);
      resp.subscribe((response: any) => {
        this.transactionsInfo = response;
        console.info('Edit actions : ', this.transactionsInfo);
      });
  }

  public updateTransactions(){
    console.info('update it: ')
    let resp = this.transactionsService.updateTransactions(this.transactionsInfo);
    resp.subscribe((response)=>{
      console.info('update it: ',response)
      transactionsInfo: new TransactionsInfo();
    })
  }

}
