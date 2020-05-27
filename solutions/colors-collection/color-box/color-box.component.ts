import {Component, Input, OnInit} from '@angular/core';
import {RandomColorGenerator} from '../colors-collection.component';
import {MessengerService} from '../../service/messenger.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent implements OnInit {

  private colorChangeSubscription: Subscription;

  @Input()
  myNumber: number; // required to allow unique ids for the labels and inputs

  master: boolean;

  notInterested: boolean;

  color: string;

  // solution: inject the messenger service which now contains the subject
  constructor(private messengerService: MessengerService) {
    // now we subscribe to the messenger service and update our own color when a change has been published.
    // task #2: we store the subscription to be able to unsubscribe from it later
    this.colorChangeSubscription = this.messengerService.onColorChanged.subscribe(color => this.color = color);
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
    // when we are a master, we just publish the color. all other component instances should listen to the change as defined in the
    // constructor
    this.messengerService.publishColorChanged(this.color);
  }

  changeInterest() {
    if (this.notInterested) {
      // TODO task #2: what to do when we do not want to receive any color changes?
      // when we are not interested anymore we just unsubscribe to not receive any updates
      this.colorChangeSubscription.unsubscribe();
    } else {
      // TODO task #2: what to do when we are interested again?
      // to receive updates again we just subscribe and store the subscription to use it when the interest changes again
      this.colorChangeSubscription = this.messengerService.onColorChanged.subscribe(color => this.color = color);
    }
  }
}
