import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Registration } from './registration/registration.component';
import { PhoneMaskDirective } from './registration/phone-mask.directive';
@NgModule({
  declarations: [
    AppComponent,
    Registration,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Registration, pathMatch: 'full' },
    ])
  ],
  exports:[
    PhoneMaskDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
