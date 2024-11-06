import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { AddcontactPage } from '../addcontact/addcontact';
import { ViewcontactPage } from '../viewcontact/viewcontact';
import { Contact } from '../../models/contact.model';
import{ContactService} from '../../services/contact.service';
import{EditcontactPage} from '../editcontact/editcontact';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
	public searchTerm: string = "";
	showcontact:Contact[];
	localData:string;
  	constructor(public navCtrl: NavController,
  		public contactService:ContactService,
  		private alertCtrl: AlertController, 
		private toast: ToastController,
  		public storage: Storage) {}

  	setFilteredItems() {
    this.showcontact = this.contactService.filterItems(this.searchTerm);
 	}
  	
  	addNewContact(){
	this.navCtrl.push(AddcontactPage); //mode - import and inject navparams in (add-recipe.ts)
	}

	ionViewWillEnter(){
		this.storage.get('Contact').then((data) => {  
		if(data){
      	this.showcontact = JSON.parse(data);
      	Object.keys(this.showcontact).forEach(key => {
      	this.contactService.updateContact(key,this.showcontact[key].name, this.showcontact[key].phone, this.showcontact[key].email, this.showcontact[key].address);
      });
     	}else{
        this.localData="No data found.";
      }
    });
	}

	viewContact(contact: Contact, index: number){
    this.navCtrl.push(ViewcontactPage, {contact:contact, index:index});
    }

	editContact(contact: Contact, index: number){
    this.navCtrl.push(EditcontactPage, {contact:contact, index:index});
    }

	deleteContact(index: number){
		const alert = this.alertCtrl.create({
			title: 'Delete Note',
			message: 'Are you sure to continue?',
			buttons:[
			{
				text: 'YES',
				handler: ()=>{
				const toast = this.toast.create({
		        message: "This " + this.showcontact[index].name + " are deleted.", 
		        duration: 2000,
		        position: 'bottom'
		        });

		        toast.present();
		        this.contactService.removeContact(index);
		        this.showcontact = this.contactService.getContact();
		        this.storage.set('Assignment', JSON.stringify(this.showcontact));
				this.navCtrl.popToRoot(); 
				}
			},
			{
				text: 'NO',
				role: 'cancel',
				handler: ()=>{
					console.log('Cancelled');
				}
			},

			]
		});
		alert.present();
 	}
}
