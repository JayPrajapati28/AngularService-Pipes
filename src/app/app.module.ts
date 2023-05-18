import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ScreenModule } from './screen/screen.module';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
