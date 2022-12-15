import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { TestmodModule } from './mymodule/testmod/testmod.module';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProdroutModule } from './product/prodrout.module';
import { Blog1compComponent } from './blog1comp/blog1comp.component';
import { Blog2compComponent } from './blog2comp/blog2comp.component';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import { TriarkComponent } from './triark/triark.component';
import { CrudopComponent } from './crudop/crudop.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Blog1compComponent,
    Blog2compComponent,
    DialogContentExampleDialogComponent,
    TriarkComponent,
    CrudopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TestmodModule,
    RouterModule,
    HttpClientModule,
    ProdroutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
