import { Component } from '@angular/core';

import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  picture;
  name;
  email;
  userInfo = null;

  async loginGoogle() {
    const googleUser = await Plugins.GoogleAuth.signIn();
    console.log('my user: ', googleUser);
    this.picture = googleUser.imageUrl;
    this.name = `${googleUser.givenName} ${googleUser.familyName}`;
    this.email = googleUser.email;

    this.userInfo = googleUser;
  }

}
