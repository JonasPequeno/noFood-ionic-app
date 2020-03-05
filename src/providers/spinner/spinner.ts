import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class SpinnerProvider {

  private spinner: Loading = null;

  constructor(public load: LoadingController) { }

  show(message): void {
    if (this.spinner == null) {
      this.spinner = this.load.create({
        content: message || 'Carregando...'
      })
      this.spinner.present();
    }
    else {
      this.spinner.data.content = message;
    }
  }

  hide(): void {
    if (this.spinner != null) {
      this.spinner.dismiss();
      this.spinner = null;
    }
  }



}
