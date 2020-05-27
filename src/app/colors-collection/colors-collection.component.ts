import {Component, Pipe, PipeTransform} from '@angular/core';

/**
 * The code in this component has no impact on the solution and does not need to be modified!
 */
@Component({
  selector: 'app-colors-collection',
  templateUrl: './colors-collection.component.html',
  styleUrls: ['./colors-collection.component.css']
})
export class ColorsCollectionComponent {


  boxCount = 4;

  get boxes() {
    return [...Array(this.boxCount).keys()];
  }
}

export class RandomColorGenerator {

  private static readonly COLOR_LETTERS = 'ABCDEF0123456789';

  static generateRandomColorCode() {
    let result = '';
    const charactersLength = RandomColorGenerator.COLOR_LETTERS.length;
    for (let i = 0; i < 6; i++ ) {
      result += RandomColorGenerator.COLOR_LETTERS.charAt(Math.floor(Math.random() * charactersLength));
    }
    return '#' + result;
  }
}

/**
 * Just here to provide shiny box headlines
 */
@Pipe({ name: 'formatOrder' })
export class FormatOrderPipe implements PipeTransform {

  transform(order: any): string {
    const numericValue = (order) ? parseInt(order, 10) : NaN;
    if (!isNaN(numericValue)) {
      // 10-20 numbers all end with 'th' so no need to check anything else
      const twoDigit = numericValue % 100;
      if (twoDigit > 9 && twoDigit < 20) {
        return order + 'th';
      }

      switch (numericValue % 10) {
        case 1:
          return order + 'st';
        case 2:
          return order + 'nd';
        case 3:
          return order + 'rd';
        default:
          return order + 'th';
      }
    }
    return order;
  }
}
