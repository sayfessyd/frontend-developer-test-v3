import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photoSize'
})
export class PhotoSizePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let paths = value.split("/");
    paths[paths.length - 1] = args[1];
    paths[paths.length - 2] = args[0];
    return paths.join("/");
  }

}
