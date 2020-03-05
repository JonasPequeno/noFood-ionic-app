import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App
  ) {
  }

  ionViewDidLoad() {
    /* this.app.getRootNav().setRoot(CategoriaPage); */
  }
  selecionarCategoria(event): void {
    let navAnterior = event.linker._history[event.linker._history.length - 2];
    console.log(event.tabTitle);


    if (event.tabTitle == 'Categorias' && navAnterior != '/categoria') {
      this.app.getRootNav().setRoot('CategoriaPage');
    }
  }

}
