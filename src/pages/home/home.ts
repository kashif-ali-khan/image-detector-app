import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { ContactUsPage } from '../contact-us/contact-us';
import { WeedDetectPage } from '../weed-detect/weed-detect';
import { PestDetectPage } from '../pest-detect/pest-detect';
import { Service } from '../../service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  aboutPage = AboutPage;
  contactus = ContactUsPage;
  weeddetect = WeedDetectPage;
  pestdetect = PestDetectPage;
  params: Object;

  ngOnInit(){

  }
  constructor(private service:Service,public navCtrl: NavController) {
    
    this.params = {
      weeds:"weeds",
      pests:"pests"
    }

    this.service.loadJson().subscribe(response=>{
      console.log(response);
      this.service.setInfoObject(response);
    },error=>{
      console.log(error);
    })
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
