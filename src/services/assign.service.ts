import { Assignment } from '../models/assignment.model';
import { Injectable } from '@angular/core';
 import { Storage } from '@ionic/storage';
@Injectable()
export class AssignmentService {

	public assignment: Assignment[] = []; 
	constructor( public storage: Storage) {
  	}
	addAssignment(
		title: string,
		modules: string,
		date: string,
		progress: number, 
		description: string
		){
		this.assignment.push(new Assignment(title,modules,date,progress,description));
	}

	getAssignment(){
		return this.assignment.slice(); 
	}

	updateAssignment(
		index: string,
		title: string,
		modules: string,
		date: string,
		progress: number, 
		description: string
		){
		this.assignment[index] = new Assignment(title,modules,date,progress,description);
	}

	removeAssignment(index: number){
		this.assignment.splice(index, 1);
	}

	filterItems(searchTerm) {
    return this.assignment.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}