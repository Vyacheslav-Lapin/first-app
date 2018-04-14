import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import NotesComponent from './notes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, NotesComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
})
export class AppModule {
}
