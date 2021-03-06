import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private resultado: string | boolean;

  constructor(private googlePlus: GooglePlus
  ) { }

  public googleLogin() {

    this.googlePlus.login({
      'webClientId': '411354985049-ebd46ja4ji4djlhnavk7sfsd7f58ktci.apps.googleusercontent.com',
      'offline': 'true',
      'scopes': 'profile email'
    })
      .then((result: any) => {
        this.resultado = `exito:${JSON.stringify(result)}`;

      })
      .catch((err: any) => {
        this.resultado = `fracaso: ${err}`;
      })

  }

}
