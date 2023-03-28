import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(organizacion_id:string):Observable<user[]>{
    return this.http.get<user[]>(`${environment.apiUrl}//`+organizacion_id)
  }

  getUser(id:string):Observable<user>{
    return this.http.get<user>(`${environment.apiUrl}//`+id)
  }

  newUser(userStory:user):Observable<any>{
    return this.http.post(`${environment.apiUrl}//`, user)
  }

  updateUser(id:string, user:user):Observable<any>{
    return this.http.put(`${environment.apiUrl}//`+id, user)
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(`${environment.apiUrl}//`+id)
  }

}
