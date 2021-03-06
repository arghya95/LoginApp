import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
// Initialize Firebase
import * as firebase from 'firebase';
// import { FirebaseApp } from '@firebase/app-types';
import { NavController } from 'ionic-angular/navigation/nav-controller';
var config = {
  apiKey: "AIzaSyA_vQzljIM1NebUlDa1TNu2_WJiZk54kAI",
  authDomain: "loginapp-e210a.firebaseapp.com",
  databaseURL: "https://loginapp-e210a.firebaseio.com",
  projectId: "loginapp-e210a",
  storageBucket: "loginapp-e210a.appspot.com",
  messagingSenderId: "394798466089"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
