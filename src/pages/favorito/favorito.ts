import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorito',
  templateUrl: 'favorito.html',
})
export class FavoritoPage {
  favoritos=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.favoritos=this.navParams.get('favorito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritoPage');
  }

}
