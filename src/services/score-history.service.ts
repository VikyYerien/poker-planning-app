import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { scoreHistory } from 'src/models/ScoreHistory';

@Injectable({
  providedIn: 'root'
})
export class ScoreHistoryService {

  constructor(private http: HttpClient) { }

  getScoreHistories(organizacion_id:string):Observable<scoreHistory[]>{
    return this.http.get<scoreHistory[]>(`${environment.apiUrl}//`+organizacion_id)
  }

  getScoreHistory(id:string):Observable<scoreHistory>{
    return this.http.get<scoreHistory>(`${environment.apiUrl}//`+id)
  }

  newScoreHistory(userStory:scoreHistory):Observable<any>{
    return this.http.post(`${environment.apiUrl}//`, scoreHistory)
  }

  updateScoreHistory(id:string, scoreHistory:scoreHistory):Observable<any>{
    return this.http.put(`${environment.apiUrl}//`+id, scoreHistory)
  }

  deleteScoreHistory(id:string):Observable<any>{
    return this.http.delete(`${environment.apiUrl}//`+id)
  }
}
