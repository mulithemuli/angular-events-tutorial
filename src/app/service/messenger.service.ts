import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

/**
 * This service is used to provide Subjects which can publish events and are used to subscribe to them.
 */
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  /*
   * Solution lesson 2
   * We create a subject, a getter for the observer and a method to publish changes.
   * The subject itself is never published since any class could temper with it.
   */

  private colorChangedSubject = new Subject<string>();

  /*
   * Anyone who likes to inform others about a color change calls this function with the new color code.
   */
  publishColorChanged(color: string) {
    this.colorChangedSubject.next(color);
  }

  /*
   * Everyone who likes to get informed about color changes should subscribe to this observable.
   */
  get onColorChanged(): Observable<string> {
    return this.colorChangedSubject.asObservable();
  }
}
