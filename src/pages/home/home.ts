import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CasaPage } from '../casa/casa';
import { FavoritoPage } from '../favorito/favorito';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cas=CasaPage;
  a_fav=[];
  fav=FavoritoPage;
  casas=[
    {
      id:0,
      img:"../assets/imgs/1.jpg",
      ubi: "Tesoro y Colon colonia nueva españa GDL",
      pre:"$940,000",
      cuartos:"3",
      banos: "1.5",
      estado: "Venta",


    },
    {
      id:1,
      img:"../assets/imgs/2.jpg",
      ubi: "colomo povidencia GDL",
      pre: "$6,150,000",
      cuartos: "3",
      banos:"4.5",
      estado: "Venta",


    },
    {
      id:2,
      img:"../assets/imgs/3.jpg",
      ubi:"villas de la primavera",
      pre:"$6,150,000",
      cuartos:"3",
      banos:"2.5",
      estado:"venta",


    },
    {
      id:3,
      img:"../assets/imgs/4.jpg",
      ubi:"valle imperial",
      pre:"$4,990,000",
      cuartos:"3",
      banos:"4",
      estado:"venta",


    },
    {
      id:4,
      img:"../assets/imgs/5.jpg",
      ubi:"Terreno en esquina coto Carrara Residencial Zapopan",
      pre:"1,093,400",
      cuartos: "0",
      banos:"0",
      estado:"venta",


    },
    {
      id:5,
      img:"../assets/imgs/6.jpg",
      ubi:"valle imperial frente a jardin del valle",
      pre:"$4,600,000",
      cuartos:"3",
      banos:"3",
      estado:"venta",


    },
    {
      id:6,
      img:"../assets/imgs/7.jpg",
      ubi:"solares residencial recidencia",
      pre:"$244,300,00",
      cuartos:"3",
      banos:"3.5",
      estado:"ventas",


    },
    {
      id:7,
      img:"../assets/imgs/8.jpg",
      ubi:"departamento en la estancia",
      pre:"449,999",
      cuartos:"1",
      banos:"1.5",
      estado:"venta",


    },
    {
      id:8,
      img:"../assets/imgs/9.jpg",
      ubi:"departamento en la estancia",
      pre:"$49,999",
      cuartos:"1",
      banos:"0",
      estado:"venta",


    },
    {
      id:9,
      img:"../assets/imgs/10.jpg",
      ubi:"la estancia",
      pre:"$6,000 x mes",
      cuartos:"1",
      banos:"1",
      estado:"renta",


    },
  ]

  constructor(public navCtrl: NavController) {

  }
  info(c)
  {
    this.navCtrl.push(this.cas,{ca:c, favorito: this.a_fav});
    console.log(c);
  }
  pfavoritos()
  {
    this.navCtrl.push(this.fav ,{favorito:this.a_fav});
  }

}
