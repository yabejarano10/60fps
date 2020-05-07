import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games = [{
    logo: "url(https://cdn.clipart.email/8dd51e8bd0813f1905edbf23bc3832f3_new-icon_256-256.png)",
    name: "League of Legends",
    genre: "MOBA",
    img: "https://i.blogs.es/7f0b02/lol/1366_2000.jpg",
    sumary: "Lol es un juego. :vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"
  },
  {
    logo: "url(https://pbs.twimg.com/profile_images/614228598287925248/e41IsmLH.jpg)",
    name: "Gears 5",
    genre: "Acción",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJmdaG_SISCi_2uH4CeRbyJ-Z5B_n8g7J9aOkZnvF_WQjFNXEw&usqp=CAU",
    sumary: "no es buen juego :vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"
  },
  {
    logo:"url(https://cl.buscafs.com/www.levelup.com/public/uploads/images/279759_256x256.jpg)",
    name: "Valiant hearts",
    genre: "Plataformas",
    img: "https://ubistatic19-a.akamaihd.net/ubicomstatic/es-mx/global/buy-now/vh_boxshot_thumb_mobile_158505.jpg",
    sumary: "Bello juego XDDDDDDDDDDDDD"
  },
  {
    logo:"url(https://ih1.redbubble.net/image.414755166.4343/flat,128x128,075,t-pad,128x128,f8f8f8.u1.jpg)",
    name: "Hellbalade",
    genre: "Aventura",
    img: "https://i.ytimg.com/vi/x8Ba8Ope05U/maxresdefault.jpg",
    sumary: "Obra amestra papu"
  },
  {
    logo:"url(https://pm1.narvii.com/6799/a2abde77697ee239f06608f336f2f14e965eefb3v2_128.jpg)",
    name: "Mario & Luigi partners in time",
    genre: "Aventura",
    img: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_ds_22/SI_NDS_MarioAndLuigiPartnersInTime_enGB_image1600w.jpg",
    sumary: "Obra amestra papu x2"
  },
  {
    logo:"url(https://www.iconeasy.com/icon/png/Game/Mega%20Games%20Pack%2034/Mass%20Effect%202%202.png)",
    name: "Mass effect 2",
    genre: "Acción",
    img: "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/mass3-keyart.jpg.adapt.crop191x100.628p.jpg",
    sumary: "Obra amestra papu x3 pero ta mejor el 3 :v"
  }]

  constructor() { }

  ngOnInit() {
  }

}
