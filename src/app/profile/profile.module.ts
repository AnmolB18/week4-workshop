import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@NgModule({
  declarations: [
    ProfileComponent,  // Declare here
    // Other components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Import here
    // Other modules
    FormsModule,
  ],
  exports: [
    ProfileComponent  // Export if needed in other modules
  ]
})
export class ProfileModule { }
