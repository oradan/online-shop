import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router'
import { InMemoryDataService } from './services/in-memory-data.service';
import {ReactiveFormsModule} from '@angular/forms'
import { ListViewComponent } from './components/list-view/list-view.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ProductDetailsComponent,
    OrdersListComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation:false}
    ),
    RouterModule.forRoot([
      {path:'home',component: HomeComponent },
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'products',component: ListViewComponent},
      {path:'orders',component: OrdersListComponent},
      {path:'login',component:LoginComponent},
      {path:'**',component:PageNotFoundComponent}

    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
