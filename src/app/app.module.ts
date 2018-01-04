import { ExPage } from './../pages/ex/ex';
import { VPage } from './../pages/v/v';
import { DefineVerbPage } from './../pages/define-verb/define-verb';
import { TutorialPage } from './../pages/tutorial/tutorial';
import { DVerbPage } from './../pages/d-verb/d-verb';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ExPage } from '../pages/ex/ex';
//import { DefineVerbPage } from '../pages/define-verb/define-verb';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DVerbPage,
    TutorialPage,
    DefineVerbPage,
    VPage,
    ExPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DVerbPage,
    TutorialPage,
    DefineVerbPage,
    VPage,
    ExPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
