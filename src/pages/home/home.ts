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
  pestdetect = PestDetectPage;
  params: Object;

  constructor(public navCtrl: NavController) {
    
this.params = {
  weeds:"weeds",
  pests:"pests"
}
  }

  redirect(option:Number){
    if(option == 1){
      this.navCtrl.push(this.pestdetect, {
        param: 'weeds'
    });

    }
      else if(option ==2){
        this.navCtrl.push(this.pestdetect, {
          param: 'pests'
      });
  
      }
      else if(option ==3){
        this.navCtrl.push(this.aboutPage);
  
        
              }
              else if(option ==4){
                this.navCtrl.push(this.contactus);
                      }
    
  }
  goToContact(){}

}
