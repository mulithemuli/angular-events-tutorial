import {Component, Input, OnInit} from '@angular/core';
import {RandomColorGenerator} from '../colors-collection.component';
import {MessengerService} from '../../service/messenger.service';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent implements OnInit {

  @Input()
  myNumber: number; // required to allow unique ids for the labels and inputs

  master: boolean;

  color: string;

  constructor() {
  }

  ngOnInit() {
    // just set a random color for initialization to provide variety in the boxes.
    this.color = RandomColorGenerator.generateRandomColorCode();
  }

  changeColor() {
    if (!this.master) {
      // nothing to do about the other boxes when we are no master
      // the internal color handling is based on the angular two-way-binding.
      return;
    }
    // TODO task: inform the other boxes about the change and let them adapt to it.
  }
}
