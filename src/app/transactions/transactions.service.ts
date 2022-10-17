import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionsInfo } from 'src/app/types/TransactionsInfo';
import { UserLogin } from '../types/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {



  constructor(private http:HttpClient) { }
  getTransactionsCol(){
    return [
      'transId',
      'transactions',
      'amount',
      'transactionsBy',
      'transDate',
      'status',
      'actions'
    ];
  }

  public getTransactionsList(){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem("username") + ':' + localStorage.getItem("password")) });
    return this.http.get('http://localhost:4041/mcb/api/transactions/view', {headers});
  }

  public findOneTransactions(id: number){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem("username") + ':' + localStorage.getItem("password")) });
    return this.http.get('http://localhost:4041/mcb/api/transactions/view/'+id, {headers});
  }

  public deleteTransactions(id : number){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem("username") + ':' + localStorage.getItem("password")) });
    return this.http.delete('http://localhost:4041/mcb/api/transactions/delete/'+id, {headers});
  }

  public createTransactions(transactions : TransactionsInfo){
    console.info('form data : ',transactions);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem("username") + ':' + localStorage.getItem("password")) });
    return this.http.post('http://localhost:4041/mcb/api/transactions/create',transactions , {headers: headers});
  }

  public updateTransactions(transactions : TransactionsInfo){
    console.info('form data : ',transactions);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem("username") + ':' + localStorage.getItem("password")) });
    return this.http.put('http://localhost:4041/mcb/api/transactions/update',transactions,  {headers: headers});
  }


}
