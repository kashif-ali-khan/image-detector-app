import { Service } from './../../service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Observable} from 'rxjs/Rx';

/**
 * Generated class for the PestDetectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pest-detect',
  templateUrl: 'pest-detect.html',
  providers: [Service]
})

export class PestDetectPage {
   imagePath:string;
  base64Image:string;

   options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    targetHeight: 400,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  }

  constructor(private camera: Camera,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,private service:Service) {
   
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
      console.log(this.base64Image);

// Function call to fetch API response from server
let response:Observable<Comment[]>;

       response = this.service.getResponse(this.base64Image)

       response.subscribe(
                                response => {
                                    // Emit list event
                                    console.log(response)
                                    
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    
      delete this.options['sourceType']                     
      loading.dismiss();
     }, (err) => {
      // Handle error
      loading.dismiss();
     });
  }

}
