import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Assignment } from '../../models/assignment.model';
import { AssignmentPage } from '../assignment/assignment';

@Component({
  selector: 'page-viewassignment',
  templateUrl: 'viewassignment.html',
})
export class ViewassignmentPage implements OnInit{
	assign:Assignment;
	index: string;
  checkedbtn : boolean = true;
  constructor(public navParams: NavParams,
    public navCtrl: NavController) {
	
  }

  onLoadAssignment(){  //to load recipe.html
    this.navCtrl.push(AssignmentPage);
  }

    ngOnInit(){
  	this.assign = this.navParams.get('assign');
  	this.index = this.navParams.get('index');
    setInterval(() => {
      if (this.loadProgress < 100)
        this.loadProgress = 1;
      else
        clearInterval(this.loadProgress);
    }, 50);
  }

   changeEvent(event) {
   console.log("event.target.value",event);
   if(event.checked){
      this.checkedbtn = false;
      console.log("checkedbtn value",this.checkedbtn);
   }else{
      this.checkedbtn = true;
   }        
  }
    public loadProgress : number = 0;
}
