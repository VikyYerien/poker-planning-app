import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userStory } from 'src/models/userStory';

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.css']
})
export class UserStoryComponent implements OnInit {

  userStory: userStory = new userStory;

  id = '';

  scoreHistory = {
    _id: '1',
    scores: [[
      {
      id_user: '1',
      score: '2'
      },
      {
        id_user: '2',
        score: '2'
      }, 
      ]],
    final: '2'
  }

  userStoriesList = [
    {_id: '1',
    session_id: '11',
    scores_id: '',
    Titulo: 'la lalala',
    Descripcion: 'lalalalallala  lalalallalalalalala llalalalalalallalallalalalalallala lalalal lalalalaallalalalala',
    Scored: false
  },
  {_id: '2',
    session_id: '11',
    scores_id: '',
    Titulo: 'ble blelelelellelele',
    Descripcion: 'blelelelellelele blelelelellelele blelelelellelele blelelelellelele blelelelellelele blelelelellelele',
    Scored: false
  },
  {_id: '3',
    session_id: '11',
    scores_id: '',
    Titulo: 'ji jijijijijiji',
    Descripcion: 'ji jijijijijiji jijijijijiji jijijijijijijijijijijijijijijijijiji jijijijijiji jijijijijiji jijijijijijijijijijijiji jijijijijijijijijijijiji jijijijijiji',
    Scored: false
  }]


  usersStoriesIds = ['1', '2', '3']

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    let aux;
    aux = this.userStoriesList.filter(e => e._id == this.id);
    console.log(aux)
    this.userStory = aux[0];
  }

  goBack() {
    this.router.navigate(['/user-stories-list']);
  }

  goBackStory() {
    let index = this.usersStoriesIds.indexOf(this.userStory._id);
    if(index > 0) {
      //this.router.navigate(['/user-story/', this.usersStoriesIds[index-1]]);
      this.userStory = this.userStoriesList[index-1]
    } else {
      //this.router.navigate(['/user-story/', this.usersStoriesIds[this.usersStoriesIds.length -1]]);
      this.userStory = this.userStoriesList[this.usersStoriesIds.length -1]
    }
  }

  goNextStory() {
    let index = this.usersStoriesIds.indexOf(this.userStory._id);
    if(index < this.usersStoriesIds.length -1) {
      //this.router.navigate(['/user-story/', this.usersStoriesIds[index+1]]);
      this.userStory = this.userStoriesList[index+1];
    } else {
      //this.router.navigate(['/user-story/', this.usersStoriesIds[0]]);
      this.userStory = this.userStoriesList[0]

    }
  }

  start() {
    this.router.navigate(['/table']);
  }
}
