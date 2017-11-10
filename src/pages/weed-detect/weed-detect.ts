import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the WeedDetectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weed-detect',
  templateUrl: 'weed-detect.html',
})
export class WeedDetectPage implements OnInit {
  myData: any;
  message: any;
  subject: any;
  submitForm: FormGroup;
  display: any = {title:""};
  operation: string;
  options: any;
  type: any;

  ngOnInit() {
    this.submitForm = this.fb.group({  
      'subject': ['', Validators.required],
      'message': ['', Validators.required]
  });
}
  constructor(private fb: FormBuilder,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.operation = navParams.get('title');
    this.type = navParams.get('type');
    if(this.operation == 'buy'){
      this.display.title = "Buy This"
    }else{
      this.display.title = "Submit to Agronomist"
    }

    // this.myForm = formBuilder.group({
    //   'subject': ['', Validators.required],
    //   'message': ['', Validators.required]
    // })
 
    // this.subject = this.myForm.controls['subject'];
    // this.message = this.myForm.controls['message']

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeedDetectPage');
  }
  onSubmit(formData) {
    console.log('Form submitted is ', formData);
    this.myData = formData;
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

}
