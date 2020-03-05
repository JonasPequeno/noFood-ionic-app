import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';

@IonicPage()
@Component({
  selector: 'page-tab-categoria',
  templateUrl: 'tab-categoria.html',
})
export class TabCategoriaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App
  ) { }

  ionViewDidLoad() {

  }



}
