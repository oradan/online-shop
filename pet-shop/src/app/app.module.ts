import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router'
import { InMemoryDataService } from './services/in-memory-data.service';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ListViewComponent } from './components/list-view/list-view.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ProductDetailsComponent,
    OrdersListComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    AddProductComponent
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
      {path:'add-product',component: AddProductComponent},
      {path:'orders',component: OrdersListComponent},
      {path:'login',component:LoginComponent},
      {path:'**',component:PageNotFoundComponent}

    ]),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
