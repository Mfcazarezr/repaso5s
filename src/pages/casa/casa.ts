import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casa',
  templateUrl: 'casa.html',
})
export class CasaPage {
  ca={};
  favoritos=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.ca=this.navParams.get('ca');
  this.favoritos=this.navParams.get('favorito');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CasaPage');
  }
  favo()
  {
    this.favoritos.push(this.ca);
    this.navCtrl.pop();
  }
}
