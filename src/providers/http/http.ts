import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerProvider } from '../spinner/spinner';
import { AlertController } from 'ionic-angular';
import { NetworkProvider } from '../network/network';
import { HttpResultModel } from '../../models/httpResultModel';
import { resolveDep } from '@angular/core/src/view/provider';
import { AlertProvider } from '../alert/alert';

@Injectable()
export class HttpProvider {

  constructor(
    private http: HttpClient,
    private spinner: SpinnerProvider,
    private alert: AlertProvider,
    private network: NetworkProvider

  ) { }

  public get(url: string): Promise<HttpResultModel> {

    this.spinner.show('Carregando os dados...');

    return new Promise(resolve => {
      if (this.network.isOnline) {
        this.http.get(url)
          .subscribe(_res => {
            this.spinner.hide();
            resolve({ success: true, data: _res, err: undefined });
          },
            err => {
              this.spinner.hide();
              this.alert.toast('Não foi possível consultar os dados, Verifique sua conexão e tente novamente', 'bottom');
              resolve({ success: false, data: undefined, err });
            })
      } else {
        this.alert.toast('Você está Offline, e infelizmente não pode carregar os dados!', 'bottom');
      }
    })
  }

}
