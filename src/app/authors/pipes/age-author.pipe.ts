import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageAuthor'
})
export class AgeAuthorPipe implements PipeTransform {

  transform(authorAge :number): string {
    return `${authorAge} years old`;
  }

}
