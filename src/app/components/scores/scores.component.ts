import { Component, OnInit } from '@angular/core';
import { user } from 'src/models/user';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scoreHistory = {
    _id: '1',
    scores: [[
      {
      id_user: '1',
      score: '4'
      },
      {
        id_user: '2',
        score: '1'
      }, 
      ], [
        {
        id_user: '1',
        score: '3'
        },
        {
          id_user: '2',
          score: '2'
        }, 
        ], [
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

  userStory = {_id: '1',
  session_id: '11',
  Titulo: 'la lalala',
  Descripcion: 'lalalalallala  lalalallalalalalala llalalalalalallalallalalalalallala lalalal lalalalaallalalalala',
  Scored: true
}

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

  constructor() { }

  ngOnInit(): void {
  }

  userName(id:string) {
    return this.users.filter(user => user._id == id);
  }
}
