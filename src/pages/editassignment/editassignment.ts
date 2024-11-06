import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Assignment } from '../../models/assignment.model';
import{AssignmentService} from '../../services/assign.service';
import{AssignmentPage} from '../assignment/assignment';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-editassignment',
  templateUrl: 'editassignment.html',
})
export class EditassignmentPage implements OnInit{
	listAssignment: Assignment[]; 
	assign:Assignment;
	index: string;

	constructor(public assignService:AssignmentService,
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private toast: ToastController,
  	private storage: Storage) {}

  	ngOnInit(){
  	this.assign = this.navParams.get('assign');
	this.index = this.navParams.get('index');
  }
    editAssignment(form: NgForm){
	this.assignService.updateAssignment(this.index, 
		form.value.newasTitle, 
		form.value.newasModule, 
		form.value.newasDate,
		form.value.newasProgress, 
		form.value.newasDesc); 
	this.listAssignment = this.assignService.getAssignment()
	this.storage.set('Assignment', JSON.stringify(this.listAssignment));
	form.reset();
	const toast = this.toast.create({
   	message: "Assignment is successful updated.", 
    duration: 2000,
    position: 'bottom'
    });
    toast.present();
	this.navCtrl.push(AssignmentPage);
	}
}
