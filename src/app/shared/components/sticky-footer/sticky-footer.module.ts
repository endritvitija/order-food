import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyFooterComponent } from './sticky-footer.component';



@NgModule({
  declarations: [StickyFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [StickyFooterComponent]
})
export class StickyFooterModule { }
