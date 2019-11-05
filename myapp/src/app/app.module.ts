import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { MyDiscountPipe } from './products/myUpper.pipe';

@NgModule({

    // Imports
    // All modules

    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    // Declaration
    // All component,pipe, directive
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        MyDiscountPipe
    ],

    // Bootstrap
    // Only First Component
    bootstrap: [
        AppComponent
    ],

    // Provider
    // All Service will Declare here
    providers: [
        ProductService
    ]

})


export class AppModule {

}


