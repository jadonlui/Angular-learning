import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DircetiveModule } from './shared/dircetive/dircetive/dircetive.module';
import { HttpClientModule } from '@angular/common/http';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component,
    //宣告他是哪個component的module
    // AppComponent屬於AppModule
  ],
  imports: [BrowserModule, DircetiveModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    A1Component
  ],
  //bootstrap進入點
})
export class AppModule {}
