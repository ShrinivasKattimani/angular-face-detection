import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SensifaiSdkNgxModule } from 'sensifai-sdk-ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SensifaiSdkNgxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
