import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimetablePage } from '../pages/timetable/timetable';
import { AboutPage } from '../pages/about/about';
import { NotePage } from '../pages/note/note';
import { AssignmentPage } from '../pages/assignment/assignment';
import { ContactPage } from '../pages/contact/contact';

import {ViewassignmentPage} from '../pages/viewassignment/viewassignment';
import {ViewcontactPage} from '../pages/viewcontact/viewcontact';
import {ViewnotePage} from '../pages/viewnote/viewnote';


import { AddassignmentPage } from '../pages/addassignment/addassignment';
import { AddcontactPage } from '../pages/addcontact/addcontact';
import { AddnotePage } from '../pages/addnote/addnote';

import{EditassignmentPage} from '../pages/editassignment/editassignment';
import{EditcontactPage} from '../pages/editcontact/editcontact';
import{EditnotePage} from '../pages/editnote/editnote';

import{AssignmentService} from '../services/assign.service';
import{ContactService} from '../services/contact.service';
import{NoteService} from '../services/note.service';
import{ThemeService} from '../services/theme.service';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { ProgressBarComponent } from '../pages/progress-bar/progress-bar';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TimetablePage,
    AboutPage,
    AssignmentPage,
    AddassignmentPage,
    AddcontactPage,
    AddnotePage,
    NotePage,
    ContactPage,
    SettingsPage,
    TabsPage,
    ProgressBarComponent,
    EditassignmentPage,
    EditcontactPage,
    EditnotePage,
    ViewassignmentPage,
    ViewcontactPage,
    ViewnotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimetablePage,
    AboutPage,
    AssignmentPage,
    AddassignmentPage,
    AddcontactPage,
    AddnotePage,
    NotePage,
    ContactPage,
    SettingsPage,
    TabsPage,
    ProgressBarComponent,
    EditassignmentPage,
    EditcontactPage,
    EditnotePage,
    ViewassignmentPage,
    ViewcontactPage,
    ViewnotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AssignmentService,
    ContactService,
    NoteService,
    ThemeService,
    SettingsProvider
  ]
})
export class AppModule {}
