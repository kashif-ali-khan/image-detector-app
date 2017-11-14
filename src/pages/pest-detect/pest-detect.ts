import { Service } from './../../service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController,ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Observable} from 'rxjs/Rx';
import { WeedDetectPage } from '../weed-detect/weed-detect';
import * as _ from 'lodash';

/**
 * Generated class for the PestDetectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pest-detect',
  templateUrl: 'pest-detect.html'

})

export class PestDetectPage {
  infoObject: any;
  data: any;
  imagePath:string;
  base64Image:string;
  pestResponse:any;
  showResponse:boolean;
  options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    targetHeight: 400,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }
  dummyResponse = {
  "earlyblightalternariasolani":"0.203176",
  "lateblightphytophthorainfestans":"0.28571",
  "phytophthora blight":"0.139711",
  "septoria leaf spot tomato":"0.53",
  "southern blight":"0.234547"
  }
  foundPest:any;
  maxPestName:string="";
  healthyTomato:boolean;

  constructor(private modalctrl:ModalController,private alertCtrl:AlertController,private camera: Camera,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,private service:Service) {
    this.data = navParams.get('param');
    console.log(this.data);
    this.infoObject = this.service.getInfoObject();
    //this.calculateProb();


  }

  calculateProb(response){
    var vals = _.values(response);
    var pestName = _.keys(response);
    let maxValue = _.max(vals);
    this.maxPestName = pestName[vals.indexOf(maxValue)];
    this.healthyTomato = false
    var sortedList = _.sortBy(vals,function(val){return -val;})
     if(parseFloat(maxValue)>=0.5){
     this.foundPest = _.find(this.infoObject.info,key=>{
      return _.keys(key)[0] == this.maxPestName
      });

    }else if(parseFloat(sortedList[0])>0.35 && (parseFloat(sortedList[0])<0.50)){
            this.maxPestName = pestName[vals.indexOf(sortedList[0])];
            this.foundPest = _.find(this.infoObject.info,key=>{
              return _.keys(key)[0] == this.maxPestName
              });


          }else{
            this.foundPest = this.infoObject;
            this.maxPestName = "not-found";

          }

          if(_.has(this.foundPest, 'tomato leaves') ||_.has(this.foundPest, 'eggplant leaves')){
            this.healthyTomato = true;
          }
          console.log(this.foundPest);
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PestDetectPage');
  }

  openCamera(flag:boolean){
    if(flag == true){
      this.options['sourceType'] = this.camera.PictureSourceType.PHOTOLIBRARY
    }else{
      delete this.options['sourceType'];
    }
    const loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      //console.log(this.base64Image);

// Function call to fetch API response from server
let response:Observable<Comment[]>;

       response = this.service.getResponse(imageData);

       response.subscribe(
                                response => {
                                    // Emit list event
                                    console.log(response);
                                    this.calculateProb(response);
                                   


                                    this.showResponse = true
                                    this.pestResponse = response;
                                    loading.dismiss();
                                    
                                }, 
                                err => {
                                    // Log errors if any
                                    this.calculateProb(this.dummyResponse);
                                    this.showResponse = true
                                   this.pestResponse = this.dummyResponse;
                                    loading.dismiss();
                                    console.log('err');
                                });
    
      //delete this.options['sourceType']                     
      
     }, (err) => {
      // Handle error
      loading.dismiss();
     });
  }


  doOperation(operation:string){
    
    // let options = {
    //   title: 'Login',
    //   inputs: [
    //     {
    //       name: 'username',
    //       placeholder: 'Username',
    //       type:'textarea'
    //     },
    //     {
    //       name: 'password',
    //       placeholder: 'Password',
    //       type: 'password'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Submit',
    //       handler: data => {
         
    //       }
    //     }
    //   ]
    // }
  var  options = {title:operation,type:this.data};
     
      const alert = this.modalctrl.create(WeedDetectPage,options);
      alert.present();
   

  }

}
