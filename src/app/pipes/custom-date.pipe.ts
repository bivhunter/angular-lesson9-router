import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, locale?: any, format?: any): any {
    console.log(+new Date(2019, 6, 4, 12, 0, 0));
    console.log(new Date (+(value.seconds + "000")), locale, format);
    let date = new Date (+(value.seconds + "000"));
    let result;

    switch (format) {
      case "full":
        result = date.toLocaleString(locale, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit'});
        break;
      case "short":
        result = date.toLocaleString(locale, {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'});
        break;
      default:
        result = date.toLocaleString(locale);
        break;

    }

    return result;
  }

}
