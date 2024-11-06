import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotePage } from '../note/note';
import { AssignmentPage } from '../assignment/assignment';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  	onLoadNote(){  //to load recipe.html
		this.navCtrl.push(NotePage);
	}
	onLoadContact(){  //to load recipe.html
		this.navCtrl.push(ContactPage);
	}
	onLoadAssignment(){  //to load recipe.html
		this.navCtrl.push(AssignmentPage);
	}

	slideData = [{ image: "../../assets/imgs/1.jpg" },{ image: "../../assets/imgs/2.jpg" },{ image: "../../assets/imgs/3.jpg" },{ image: "../../assets/imgs/4.jpg" }]
}
