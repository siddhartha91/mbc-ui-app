import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions/transactions.component';
import { TranxEditComponent } from './transactions/tranx-edit/tranx-edit.component';
import { TranxViewComponent } from './transactions/tranx-view/tranx-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: LoginComponent},
  // { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'transactions', component: TransactionsComponent},
  { path: 'transactions/view', component: TranxViewComponent},
  { path: 'transactions/update/: transId', component: TranxEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
