import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { TagsettingComponent } from './tagsetting/tagsetting.component';
import { DW1000SETTINGSComponent } from './dw1000-settings/dw1000-settings.component';
import { ControlComponent } from './control/control.component';
import { StatusComponent } from './status/status.component';
import { HistoryComponent } from './history/history.component';
import { FirmwareUpdaterComponent } from './firmware-updater/firmware-updater.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    TagsettingComponent,
    DW1000SETTINGSComponent,
    ControlComponent,
    StatusComponent,
    HistoryComponent,
    FirmwareUpdaterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

