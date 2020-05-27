import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pet} from '../../types/pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  currentPet: Pet; // TODO task #2 how to get the pet from the list to this variable?

  ngOnInit(): void {
    this.currentPet = { name: '', animal: null, color: ''};
  }

  savePet() {
    // cloning the pet to save since it should be a new object
    // keep in mind that this way of cloning is not a deep clone!
    const petToSave = {... this.currentPet};

    // TODO task #1 how to get this.currentPet back to the list?

    // afterwards clean the form
    this.resetPet();
  }

  resetPet() {
    this.currentPet = { name: '', animal: null, color: ''};

    // TODO task #2 how to notify the calling component that the form has been reset?
  }
}
