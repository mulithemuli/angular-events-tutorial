import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PetCollectionComponent} from './pet-collection/pet-collection.component';
import {PetFormComponent} from './pet-collection/pet-form/pet-form.component';
import {FormsModule} from '@angular/forms';
import {ColorsCollectionComponent, FormatOrderPipe} from './colors-collection/colors-collection.component';
import {ColorBoxComponent} from './colors-collection/color-box/color-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PetFormComponent,
    PetCollectionComponent,
    PetFormComponent,
    ColorsCollectionComponent,
    ColorBoxComponent,
    FormatOrderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FormatOrderPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
