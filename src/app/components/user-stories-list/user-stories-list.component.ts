import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-stories-list',
  templateUrl: './user-stories-list.component.html',
  styleUrls: ['./user-stories-list.component.css']
})
export class UserStoriesListComponent implements OnInit {

  constructor(private router:Router) { }

  userStoriesList = [
    {_id: '1',
    session_id: '11',
    scores_id: '',
    Titulo: 'la lalala',
    Descripcion: 'lalalalallala  lalalallalalalalala llalalalalalallalallalalalalallala lalalal lalalalaallalalalala',
    Scored: false,
    finalScore:''
  },
  {_id: '2',
    session_id: '11',
    scores_id: '',
    Titulo: 'ble blelelelellelele',
    Descripcion: 'blelelelellelele blelelelellelele blelelelellelele blelelelellelele blelelelellelele blelelelellelele',
    Scored: false,
    finalScore:''
  },
  {_id: '3',
    session_id: '11',
    scores_id: '',
    Titulo: 'ji jijijijijiji',
    Descripcion: 'ji jijijijijiji jijijijijiji jijijijijijijijijijijijijijijijijiji jijijijijiji jijijijijiji jijijijijijijijijijijiji jijijijijijijijijijijiji jijijijijiji ji jijijijijiji jijijijijiji jijijijijijijijijijijijijijijijijiji jijijijijiji jijijijijiji jijijijijijijijijijijiji jijijijijijijijijijijiji jijijijijiji ji jijijijijiji jijijijijiji jijijijijijijijijijijijijijijijijiji jijijijijiji jijijijijiji jijijijijijijijijijijiji jijijijijijijijijijijiji jijijijijiji ji jijijijijiji jijijijijiji jijijijijijijijijijijijijijijijijiji jijijijijiji jijijijijiji jijijijijijijijijijijiji jijijijijijijijijijijiji jijijijijiji ji jijijijijiji jijijijijiji jijijijijijijijijijijijijijijijijiji jijijijijiji jijijijijiji jijijijijijijijijijijiji jijijijijijijijijijijiji jijijijijijiji jijijijijiji jijijijijiji jijijijijijijijijijijijijijijijijiji jijijijijiji jijijijijiji jijijijijijijijijijijiji jijijijijijijijijijijiji jijijijijiji',
    Scored: false,
    finalScore:''
  }]

  ngOnInit(): void {
  }

  goToUserStoryForm() {
    this.router.navigate(['/user-story-form'])
  }

  start() {
    this.router.navigate(['/table'])
  }
}
