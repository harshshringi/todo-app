import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FilterComponent } from './filter/filter.component';
import { ListItemComponent } from './list-item/list-item.component';
import { HomeComponent } from './home/home.component';
import { EnumValuesPipe } from './enum-values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    FilterComponent,
    ListItemComponent,
    HomeComponent,
    EnumValuesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
