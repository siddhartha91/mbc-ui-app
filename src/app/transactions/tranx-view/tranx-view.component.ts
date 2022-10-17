import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/dailog/delete-dialog/delete-dialog.component';
import { TransactionsService } from './../transactions.service';
import { HttpClient } from '@angular/common/http';
import { TransactionsModel } from './../../types/TransactionsModel';
import { TransactionsInfo } from './../../types/TransactionsInfo';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-tranx-view',
  templateUrl: './tranx-view.component.html',
  styleUrls: ['./tranx-view.component.css'],
})
export class TranxViewComponent implements OnInit {
  tranx_data: TransactionsModel[] = [];
  tranx_col: string[] = [];


  constructor(
    public dialog: MatDialog,
    private transactionsService: TransactionsService
  ) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.tranx_col = this.transactionsService.getTransactionsCol();
    //calling backend service : - http GET/POST/PUT/DELETE
    let resp = this.transactionsService.getTransactionsList();
    resp.subscribe((data: any) => {
      this.tranx_data = data;
      console.info('spring response : ', this.tranx_data);
    });
  }

  delete(transId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    //alert('Deleting id : '+id);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'true') {
        alert('yes transaction is deleted!');
        this.tranx_data = this.tranx_data.filter(
          (data) => data.transId != transId
        );
      }
    });
  }
}
