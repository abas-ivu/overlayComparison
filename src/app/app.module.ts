import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';
import { FlowbiteOverlayComponent } from './flowbite-overlay/flowbite-overlay.component';
import { PopperJsComponent } from './popper-js/popper-js.component';

@NgModule({
  declarations: [
    AppComponent,
    CdkOverlayComponent,
    FlowbiteOverlayComponent,
    PopperJsComponent,
    
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
