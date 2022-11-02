import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DircetiveModule } from './shared/dircetive/dircetive/dircetive.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //宣告他是哪個component的module
    // AppComponent屬於AppModule
  ],
  imports: [BrowserModule, DircetiveModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  //bootstrap進入點
})
export class AppModule {}
