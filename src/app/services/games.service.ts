import { APIResponse, Game } from './../models/game';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://rawg-video-games-database.p.rapidapi.com';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering)

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search)
    }
    return this.http.get<APIResponse<Game>>(`${baseUrl}/games`, { params: params })

  }
}

