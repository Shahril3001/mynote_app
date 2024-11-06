import { Note } from '../models/note.model';
import { Injectable } from '@angular/core';
 
@Injectable()
export class NoteService {

	private note: Note[] = []; 
	addNote(title: string,content: string){
		this.note.push(new Note(title,content));
	}

	getNote(){
		return this.note.slice(); 
	}

	updateNote(
		index: string,
		title: string,  
		content: string
	){
		this.note[index] = new Note(title,content);
	}

	removeNote(index: number){
		this.note.splice(index, 1);
	}
	
	filterItems(searchTerm) {
    return this.note.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}