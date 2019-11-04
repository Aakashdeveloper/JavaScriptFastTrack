import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';

@NgModule({

    // Imports
    // All modules

    imports: [
        BrowserModule
    ],
    // Declaration
    // All component,pipe, directive
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent
    ],

    // Bootstrap
    // Only First Component
    bootstrap: [
        AppComponent
    ],

    // Provider
    // All Service will Declare here
    providers: [

    ]

})


export class AppModule {

}


