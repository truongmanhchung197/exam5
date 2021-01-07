import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import {FormsModule} from '@angular/forms';
import { DetailBookComponent } from './book/detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    ListBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    DetailBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
