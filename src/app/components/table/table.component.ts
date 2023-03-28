import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { user } from 'src/models/user';
import { CardComponent } from '../card/card.component';
import { score } from 'src/models/score';
import { scoreHistory } from 'src/models/ScoreHistory';
import { UserStoryComponent } from '../user-story/user-story.component';
import { userStory } from 'src/models/userStory';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private location:Location) { }

  animated = false;
  cardsTourned = false;
  selected: userStory = new userStory;

  fibSecuence = ['1', '2', '3', '5', '8', '13', '21'];

  myPoints = '';
  
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

  userStoriesListScored: Array<any> = [];

  users: user[] = [
    {_id: '1',
    Nombre: 'Ana',
    Apellido: 'Perez',
    PassWord: '123',
    Rol: 'user'},
    { _id: '2',
      Nombre: 'Rosalia',
      Apellido: 'Sanchez',
      PassWord: '152',
      Rol: 'user'}
  ]

  scoresHistory: scoreHistory = new scoreHistory;

  scoresHistories: scoreHistory [] = [];

//Se actualiza en tiempo real al botar, cada quien tendra my score o algo asi
  scores = [
    {
      _id : '22',
      id_user : '1',
      score : '2'
    },
    {
      _id : '23',
      id_user : '2',
      score : '3'
    }
  ];

  myScore =  {
    _id : '25',
    id_user : 'myId',
    score : ''
  }


  ngOnInit(): void {
    this.selected = this.userStoriesList[0];
  }



  goBack() {
    this.location.back();
  }

  turn() {
    this.animated = true;
    this.cardsTourned = true;
  }

  // aca va a haber un post y al final debo poner el scoreshistory = new scoresHistory para votar a otro userStory, tambien seleccional al que sigue.
  //BUG, myScore.score es un puntero a myPoints, cada vez que cambia cambia los scores viejos. Se va a solucionar cuando use la base, creo!
  save() {
    let scoresToSave = this.scores.slice();
    this.myScore.score = this.myPoints;
    scoresToSave.push(this.myScore);
    this.scoresHistory.user_story_id = this.selected._id;
    this.scoresHistory.scores.push(scoresToSave);
    this.scoresHistories.push(this.scoresHistory);

    this.selected.finalScore = this.ArrayAvg(scoresToSave);

    this.cardsTourned = false;
    this.myPoints = '';

    for(let i = 0; i <= this.userStoriesList.length; i++) {
      if(this.selected == this.userStoriesList[i]) {
        this.userStoriesList[i].Scored = true;
        this.userStoriesListScored.push(this.userStoriesList[i]);
      }
    }

//selects the next one
    let filtered = this.filtered();
    if (filtered.length > 0) {
      this.selected = filtered[0];
    }

  }

  //AVG final scores
  ArrayAvg(myArray:Array<any>) {
    myArray = myArray.map(e => Number(e.score))
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return String(Math.floor(summ / ArrayLen));
}

  reVote() {
    let scoresToSave = this.scores.slice();
    this.myScore.score = this.myPoints;
    scoresToSave.push(this.myScore);
    this.scoresHistory.user_story_id = this.selected._id;
    this.scoresHistory.scores.push(scoresToSave);
    this.scoresHistories.push(this.scoresHistory);
    this.cardsTourned = false;
    this.myPoints = '';
    console.log(this.scoresHistory);
  }






  select (e:any) {
    this.selected = e;
  }

  selectCard(e:string) {
    this.myPoints = e;
  }

  userName(id:string) {
    return this.users.filter(user => user._id == id);
  }

  filtered() {
    return this.userStoriesList.filter(e => e.Scored == false);
  }

}
