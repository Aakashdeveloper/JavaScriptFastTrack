import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './products/product.component';
import { HomeOneComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
    {path: 'product', component: ProductComponent},
    {path: 'home', component: HomeOneComponent},
    {path: 'forms', component: FormsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
    imports : [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
