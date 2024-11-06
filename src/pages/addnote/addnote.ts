import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController  } from 'ionic-angular';
import { Note } from '../../models/note.model';
import { NotePage } from '../note/note';
import{NoteService} from '../../services/note.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-addnote',
  templateUrl: 'addnote.html',
})
export class AddnotePage {

	listNotes: Note[]; 
  constructor(public noteService:NoteService,
  			private navCtrl: NavController,
  			private toast: ToastController,
  			private storage: Storage
  			) {}

  	addNote(form: NgForm){
	this.noteService.addNote(form.value.noteTitle, form.value.noteContent); 
	form.reset();  //to reset the form
	this.listNotes = this.noteService.getNote();
	this.storage.set('Note', JSON.stringify(this.listNotes));
	this.navCtrl.push(NotePage);
	const toast = this.toast.create({
   	message: "New note is added", 
    duration: 2000,
    position: 'bottom'
    });
    toast.present();
	}
}
