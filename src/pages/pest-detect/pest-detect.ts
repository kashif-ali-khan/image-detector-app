import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
})

export class PestDetectPage {
   options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera,public navCtrl: NavController, public navParams: NavParams) {
   
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PestDetectPage');
    this.openCamera();
  }

  openCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      //console.log(base64Image);
     }, (err) => {
      // Handle error
     });
  }

}
