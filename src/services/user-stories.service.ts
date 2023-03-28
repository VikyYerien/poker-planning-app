import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userStory } from 'src/models/userStory';

@Injectable({
  providedIn: 'root'
})
export class UserStoriesService {

  constructor(private http: HttpClient) { }

  getUserStories(organizacion_id:string):Observable<userStory[]>{
    return this.http.get<userStory[]>(`${environment.apiUrl}//`+organizacion_id)
  }

  getUserStory(id:string):Observable<userStory>{
    return this.http.get<userStory>(`${environment.apiUrl}//`+id)
  }

  newUserStory(userStory:userStory):Observable<any>{
    return this.http.post(`${environment.apiUrl}//`, userStory)
  }

  updateUserStory(id:string, userStory:userStory):Observable<any>{
    return this.http.put(`${environment.apiUrl}//`+id, userStory)
  }

  deleteUserStory(id:string):Observable<any>{
    return this.http.delete(`${environment.apiUrl}//`+id)
  }
}
