import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndService: BackEndService) { }

  ngOnInit(): void { 
    this.onFetch();

   }

  onSave() {
    console.log("on Save called!");

    this.backEndService.saveData();
  }

  onFetch(){
    console.log("onFetch clicked");
    this.backEndService.fetchData();
  }

}
