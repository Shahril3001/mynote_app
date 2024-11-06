import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { TimetablePage } from '../timetable/timetable';
import { AboutPage } from '../about/about';



@Component({
	selector: 'page-tabs',
	template: `
	<ion-tabs selectedIndex="0" class="notetabs">
		<ion-tab [root]= "homePage" tabTitle="Home" tabIcon="home"></ion-tab>
		<ion-tab [root]= "aboutPage" tabTitle="About" tabIcon="person"></ion-tab>
		<ion-tab [root]= "timetablePage" tabTitle="Timetable" tabIcon="calendar"></ion-tab>		
	</ion-tabs>
	`
})

export class TabsPage{
	homePage = HomePage;
	timetablePage = TimetablePage;
	aboutPage = AboutPage;
}