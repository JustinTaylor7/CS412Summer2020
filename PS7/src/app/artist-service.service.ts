import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArtistServiceService {

  constructor(private http: HttpClient) { }

  getArtistSummary(artist: string) {
    const body = {artist: artist};
    return this.http.post('http://localhost:3200/ps4', body);
  }
}
