import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabProdutosPage } from './tab-produtos';

@NgModule({
  declarations: [
    TabProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(TabProdutosPage),
  ],
})
export class TabProdutosPageModule {}
