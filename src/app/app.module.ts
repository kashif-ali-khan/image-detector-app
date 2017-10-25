import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPageModule } from '../pages/about/about.module';
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { PestDetectPageModule } from '../pages/pest-detect/pest-detect.module';
import { WeedDetectPageModule } from '../pages/weed-detect/weed-detect.module';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AboutPageModule,
    ContactUsPageModule,
    PestDetectPageModule,
    WeedDetectPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
