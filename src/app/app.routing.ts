import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ThemeComponent } from './components/theme/theme.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { BasketComponent } from './components/basket/basket.component';
import { LoginComponent } from './components/login/login.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'theme',            component: ThemeComponent },
    { path: 'myprofile',        component: MyprofileComponent },
    { path: 'orderhistory',     component: OrderhistoryComponent },
    { path: 'pizza',            component: PizzaComponent },
    { path: 'basket',           component: BasketComponent },
    { path: 'login',            component: LoginComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
