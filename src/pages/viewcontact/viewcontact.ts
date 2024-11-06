import { Component, OnInit   } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact.model';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-viewcontact',
  templateUrl: 'viewcontact.html',
})
export class ViewcontactPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
	contact:Contact;
	index: string;
  	ngOnInit(){
  	this.contact = this.navParams.get('contact');
	this.index = this.navParams.get('index');
  }

    onLoadContact(){
    this.navCtrl.push(ContactPage);
  }
}
