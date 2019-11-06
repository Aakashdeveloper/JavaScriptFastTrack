import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './products/product.component';
import { HomeOneComponent } from './home/home.component';


const routes: Routes = [
    {path: 'product', component: ProductComponent},
    {path: 'home', component: HomeOneComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
    imports : [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
