import { Component, OnInit  } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Note } from '../../models/note.model';
import{NoteService} from '../../services/note.service';
import { Storage } from '@ionic/storage';
import{NotePage} from '../note/note';

@Component({
  selector: 'page-editnote',
  templateUrl: 'editnote.html',
})
export class EditnotePage implements OnInit{
	note:Note;
 	index: string;
 	listNotes: Note[]; 
  	constructor(public navCtrl: NavController, 
  	public noteService:NoteService, 
  	public navParams: NavParams,
    private toast: ToastController,
    private storage: Storage) {}
	
  ngOnInit(){
  this.note = this.navParams.get('note');
	this.index = this.navParams.get('index');
  }

  editNote(form: NgForm){
	this.noteService.updateNote(this.index, form.value.newnoteTitle, form.value.newnoteContent); 
  this.listNotes = this.noteService.getNote()
  this.storage.set('Note', JSON.stringify(this.listNotes));
	form.reset();
  const toast = this.toast.create({
  message: "Note is successful updated.", 
  duration: 2000,
  position: 'bottom'
  });
  toast.present();
	this.navCtrl.push(NotePage);
	}
}
