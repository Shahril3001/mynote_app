import { Component } from '@angular/core';
import { NavController, ToastController  } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Contact } from '../../models/contact.model';
import{ContactPage} from '../contact/contact';
import{ContactService} from '../../services/contact.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-addcontact',
  templateUrl: 'addcontact.html',
})
export class AddcontactPage {
	listContact: Contact[]; 
 	constructor(public navCtrl: NavController,
 	public contactService:ContactService,
 	private toast: ToastController,
  	private storage: Storage) {
 	}

  addContact(form: NgForm){
	this.contactService.addContact(form.value.contactName, form.value.contactPhone, form.value.contactEmail, form.value.contactAddress); 
	form.reset();  //to reset the form
	this.listContact = this.contactService.getContact();
	this.storage.set('Contact', JSON.stringify(this.listContact));
	this.navCtrl.push(ContactPage);
	const toast = this.toast.create({
   	message: "New contact is added", 
    duration: 2000,
    position: 'bottom'
    });
    toast.present();
	}
}
