import { SettingsProvider } from './../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

	selectedTheme: String;
 
  constructor(public navCtrl: NavController, private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }
 
    toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

}
