
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';


declare var navigator: any;
declare var Connection: any;

@Injectable()
export class NetworkProvider {

  constructor(public platform: Platform) { }

  get isOnline(): boolean {
    if (this.platform.is('cordova')) {
      if (navigator.connection && navigator.connection.type)
        return (
          navigator.connection.type != Connection.UNKKONW
          && navigator.connection.type != Connection.NONE
        )
      else return true;
    } else {
      return navigator.onLine;
    }
  }

}
