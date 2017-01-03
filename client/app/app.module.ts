import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app.routing.module'
import { RouterModule } from '@angular/router';
import { CoreModule} from './core/core.module'
import { SharedModule} from './shared/shared.module'
import {ReviewModule} from './review/review.module'

@NgModule({ 
  imports:      [ BrowserModule,RouterModule,FormsModule,HttpModule,CoreModule,AppRoutingModule,SharedModule,ReviewModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(){
 
  }

}