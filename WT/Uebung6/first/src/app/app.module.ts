import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from '../app/app.component';
import { HeaderComponent} from './header/header.component';
/*import { NgbModule } from '@ng-bootstrap';*/

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
