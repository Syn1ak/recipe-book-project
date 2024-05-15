import { NgModule } from '@angular/core';
import AlertComponent from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './laoding-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AlertComponent, DropdownDirective, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    DropdownDirective,
    LoadingSpinnerComponent,
    CommonModule,
  ],
})
export class SharedModule {}
