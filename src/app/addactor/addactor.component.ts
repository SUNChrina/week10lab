import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addactor',
  templateUrl: './addactor.component.html',
  styleUrls: ['./addactor.component.css']
})
export class AddactorComponent implements OnInit {

  fullName: string = "";
  bYear: number = 0; 
  actorId: string = "";


  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveActor() {
    let actor = { name: this.fullName, bYear: this.bYear };
    this.db.createActor(actor).subscribe(result => {
      this.router.navigate(["/listactors"]);
    });
  }

}
