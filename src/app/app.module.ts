import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MuiDesignModule } from './mui-design/mui-design.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppbarComponent } from './appbar/appbar.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions/transactions.component';
import { TranxViewComponent } from './transactions/tranx-view/tranx-view.component';
import { DeleteDialogComponent } from './dailog/delete-dialog/delete-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranxEditComponent } from './transactions/tranx-edit/tranx-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AppbarComponent,
    HomeComponent,
    TransactionsComponent,
    TranxViewComponent,
    DeleteDialogComponent,
    TranxEditComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MuiDesignModule,
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
