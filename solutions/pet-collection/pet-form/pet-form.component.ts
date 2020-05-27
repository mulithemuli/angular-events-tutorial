import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pet} from '../../types/pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  @Input() // solution task #2 receiving the selected pet as input
  currentPet: Pet; // TODO task #2 how to get the pet from the list to this variable?

  @Output()
  petToAdd = new EventEmitter<Pet>(); // solution task #1
                                      // emitting the new pet which then is received by the collection component

  @Output()
  formReset = new EventEmitter<Pet>(); // solution task #2
                                       // emitting the reset event to unset the input. handled directly in the html component

  ngOnInit(): void {
    this.currentPet = { name: '', animal: null, color: ''};
  }

  savePet() {
    // cloning the pet to save since it should be a new object
    // keep in mind that this way of cloning is not a deep clone!
    const petToSave = {... this.currentPet};

    // TODO task #1 how to get this.currentPet back to the list?
    this.petToAdd.emit(petToSave); // solution task #1 triggers the emit event with the current pet

    // afterwards clean the form
    this.resetPet();
  }

  resetPet() {
    this.currentPet = { name: '', animal: null, color: ''};

    // TODO task #2 how to notify the calling component that the form has been reset?
    this.formReset.emit(this.currentPet);
  }
}
