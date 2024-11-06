import { Component, OnInit   } from '@angular/core';
import {NavParams,NavController } from 'ionic-angular';
import { Note } from '../../models/note.model';
import { NotePage } from '../note/note';

@Component({
  selector: 'page-viewnote',
  templateUrl: 'viewnote.html',
})
export class ViewnotePage implements OnInit{
	note:Note;
 	index: string;
  constructor(public navCtrl: NavController, 
  	public navParams: NavParams) {
  }

  ngOnInit(){
  	this.note = this.navParams.get('note');
	this.index = this.navParams.get('index');
  }

  onLoadNote(){  //to load recipe.html
	this.navCtrl.push(NotePage);
}

}
