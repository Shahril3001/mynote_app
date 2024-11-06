import { Component, OnInit  } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Contact } from '../../models/contact.model';
import{ContactService} from '../../services/contact.service';
import { Storage } from '@ionic/storage';
import{ContactPage} from '../contact/contact';

@Component({
  selector: 'page-editcontact',
  templateUrl: 'editcontact.html',
})
export class EditcontactPage implements OnInit{
	contact:Contact;
	index: string;
	listContact: Contact[]; 
 	constructor(public contactService:ContactService, 
 		public navCtrl: NavController, 
 		public navParams: NavParams,
 		private toast: ToastController,
  		private storage: Storage) {
 	}

  	ngOnInit(){
  	this.contact = this.navParams.get('contact');
	this.index = this.navParams.get('index');
  }
    editContact(form: NgForm){
	this.contactService.updateContact(this.index, 
	form.value.newcontactName, 
	form.value.newcontactPhone, 
	form.value.newcontactEmail,
	form.value.newcontactAddress);
	this.listContact = this.contactService.getContact(); 
	this.storage.set('Contact', JSON.stringify(this.listContact));
	form.reset(); 
	const toast = this.toast.create({
   	message: "Contact is successful updated.", 
    duration: 2000,
    position: 'bottom'
    });
    toast.present();
	this.navCtrl.push(ContactPage);
	}

}
