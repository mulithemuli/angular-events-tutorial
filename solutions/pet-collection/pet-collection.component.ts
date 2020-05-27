import {Component, OnInit} from '@angular/core';
import {Pet} from '../types/pet';

@Component({
  selector: 'app-pet-collection',
  templateUrl: './pet-collection.component.html',
  styleUrls: ['./pet-collection.component.css']
})
export class PetCollectionComponent implements OnInit {

  pets: Pet[] = [];

  currentPet: Pet;

  ngOnInit(): void {
    this.pets.push({ name: 'Laika', animal: 'dog', color: 'brown' });
  }

  addPet(pet: Pet) {
    this.pets.push(pet);
    // TODO task #1 how to get the pet from the form to this function?
    // solution bonus task sorting the array
    this.pets.sort((pet1, pet2) => pet1.name.toLowerCase().localeCompare(pet2.name.toLowerCase()));
  }

  editPet(pet: Pet) {
    this.currentPet = pet;
    // TODO task #2 how to pass this currentPet to the pet-form component?
  }
}
