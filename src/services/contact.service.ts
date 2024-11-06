import { Contact } from '../models/contact.model';

import { Injectable } from '@angular/core';
 
@Injectable()
export class ContactService {

	private contact: Contact[] = []; 
	addContact(
		 name: string,  
		 phone: number,  
		 email: string,  
		 address: string
		){
		this.contact.push(new Contact(name,phone,email,address));
	}

	getContact(){
		return this.contact.slice(); 
	}

	updateContact(
		index: string,
		name: string,  
		phone: number,  
		email: string,  
		address: string
		){
		this.contact[index] = new Contact(name,phone,email,address);
	}

	removeContact(index: number){
		this.contact.splice(index, 1);
	}

	filterItems(searchTerm) {
    return this.contact.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}