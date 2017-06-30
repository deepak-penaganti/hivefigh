import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialModule,
         MdButtonModule,
         MdCardModule,
         MdInputModule,
         MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule, MdButtonModule,
    MdCardModule, MdInputModule,
    MdToolbarModule
  ],
  declarations: []
})
export class MaterialSpecificsModule { }
