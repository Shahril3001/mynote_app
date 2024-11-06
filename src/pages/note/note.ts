import { Component} from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { AddnotePage } from '../addnote/addnote';
import { Note } from '../../models/note.model';
import{NoteService} from '../../services/note.service';
import{EditnotePage} from '../editnote/editnote';
import{ViewnotePage} from '../viewnote/viewnote';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {
	public searchTerm: string = "";
	shownote:Note[];
	localData:string;
  	constructor(public navCtrl: NavController, 
  		public noteService:NoteService, 
  		private alertCtrl: AlertController, 
		private toast: ToastController,
  		private storage: Storage) {
  	}

 	setFilteredItems() {
    this.shownote = this.noteService.filterItems(this.searchTerm);
 	}
 	
 	addNewNote(){
	this.navCtrl.push(AddnotePage);
	}

	  ionViewWillEnter(){
     	this.storage.get('Note').then((data) => {
     	if(data){
     	this.shownote = JSON.parse(data);
      	Object.keys(this.shownote).forEach(key => {
        this.noteService.updateNote(key,this.shownote[key].title, this.shownote[key].content);
      });
        }else{
        this.localData="No data found.";
      }
    });
   }

   viewNote(note: Note, index: string){
		this.navCtrl.push(ViewnotePage, {note:note , index:index});
	}

	editNote(note: Note, index: string){
		this.navCtrl.push(EditnotePage, {note:note , index:index});
	}


	deleteNote(index: number){
			const alert = this.alertCtrl.create({
			title: 'Delete Note',
			message: 'Are you sure to continue?',
			buttons:[
			{
				text: 'YES',
				handler: ()=>{
					const toast = this.toast.create({
			        message: "This " + this.shownote[index].title + " are deleted.", 
			        duration: 2000,
			        position: 'bottom'
			        });

			        toast.present();
			        this.noteService.removeNote(index);
			        this.shownote = this.noteService.getNote();
			     	this.storage.set('Assignment', JSON.stringify(this.shownote));
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
