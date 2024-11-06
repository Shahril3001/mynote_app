import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController  } from 'ionic-angular';
import { Assignment } from '../../models/assignment.model';
import{AssignmentService} from '../../services/assign.service';
import{AssignmentPage} from '../assignment/assignment';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-addassignment',
  templateUrl: 'addassignment.html',
})
export class AddassignmentPage {
	listAssignment: Assignment[]; 
 	constructor(public navCtrl: NavController,
  	public assignService:AssignmentService, 
  	private toast: ToastController,
  	private storage: Storage) {
  }

 addAssignment(form: NgForm){
	this.assignService.addAssignment(form.value.asTitle, form.value.asModule , form.value.asDate, form.value.asProgress, form.value.asDesc); 
	form.reset();
	this.listAssignment = this.assignService.getAssignment();
	this.storage.set('Assignment', JSON.stringify(this.listAssignment));
	this.navCtrl.push(AssignmentPage);
	const toast = this.toast.create({
   	message: "New assignment is added", 
    duration: 2000,
    position: 'bottom'
    });
    toast.present();
	}

}
