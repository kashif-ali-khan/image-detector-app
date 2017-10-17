import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { ContactUsPage } from '../contact-us/contact-us';
import { WeedDetectPage } from '../weed-detect/weed-detect';
import { PestDetectPage } from '../pest-detect/pest-detect';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = AboutPage;
  contactus = ContactUsPage;
  weeddetect = WeedDetectPage;
  pestdetect = PestDetectPage

  constructor(public navCtrl: NavController) {

  }
  goToContact(){}

}
