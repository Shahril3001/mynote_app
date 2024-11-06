import { Component} from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { AddassignmentPage } from '../addassignment/addassignment';
import { ViewassignmentPage  } from '../viewassignment/viewassignment';
import { Assignment } from '../../models/assignment.model';
import{AssignmentService} from '../../services/assign.service';
import{EditassignmentPage} from '../editassignment/editassignment';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-assignment',
  templateUrl: 'assignment.html',
})
export class AssignmentPage{
  public searchTerm: string = "";
	showassign:Assignment[];
  localData:string;

	checkedbtn : boolean = true;

  constructor(public navCtrl: NavController, 
    public assignService:AssignmentService, 
    private alertCtrl: AlertController, 
    public storage: Storage,
    private toast: ToastController) {
  }

  setFilteredItems() {
    this.showassign = this.assignService.filterItems(this.searchTerm);
  }

  addNewAssignment(){
	this.navCtrl.push(AddassignmentPage); //mode - import and inject navparams in (add-recipe.ts)
	}

	ionViewWillEnter(){
        this.storage.get('Assignment').then((data) => {  
         if(data){
        this.showassign = JSON.parse(data);
        Object.keys(this.showassign).forEach(key => {
        this.assignService.updateAssignment(key,this.showassign[key].title, 
        this.showassign[key].module, 
        this.showassign[key].date, 
        this.showassign[key].progress,
        this.showassign[key].description);
      });
      }else{
        this.localData="No data found.";
      }
    });
	}
   viewAssignment(assign: Assignment, index: string){
    this.navCtrl.push(ViewassignmentPage, {assign:assign, index:index});
  }

  editAssignment(assign: Assignment, index: string){
    this.navCtrl.push(EditassignmentPage, {assign:assign, index:index});
  }

	deleteAssignment(index: number){
    const alert = this.alertCtrl.create({
      title: 'Delete Note',
      message: 'Are you sure to continue?',
      buttons:[
      {
        text: 'YES',
        handler: ()=>{
        const toast = this.toast.create({
        message: "This " + this.showassign[index].title + " are deleted.", 
        duration: 2000,
        position: 'bottom'
        });

       toast.present();
       this.assignService.removeAssignment(index);
       this.showassign = this.assignService.getAssignment();
       this.storage.set('Assignment', JSON.stringify(this.showassign));
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

  ngOnInit() {
    setInterval(() => {
      if (this.loadProgress < 100)
        this.loadProgress = 1;
      else
        clearInterval(this.loadProgress);
    }, 50);
  }


}
