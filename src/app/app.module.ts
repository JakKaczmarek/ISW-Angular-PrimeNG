import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [AppComponent, FormComponent, ResultsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    ListboxModule,
    TableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
