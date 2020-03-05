import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';


@Injectable()
export class AlertProvider {

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  public toast(message: string, position: string): void {
    this.toastController.create({
      message,
      position,
      duration: 3000
    }).present();
  };

  public alert(title: string, message: string): void {
    this.alertController.create({
      title,
      message,
      buttons: ['OK'],
      enableBackdropDismiss: false
    }).present()
  };

  public confirm(title: string, message: string, callback: any): void {
    this.alertController.create({
      title,
      message,
      buttons: [
        {
          text: 'NÃO',
          role: 'Cancel',
          handler: () => { }
        },
        {
          text: 'SIM',
          handler: () => {
            callback();
          }
        }
      ]
    }).present();
  }

}
