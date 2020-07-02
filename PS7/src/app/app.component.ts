import {Component} from '@angular/core';
import {ArtistServiceService as artistService} from './artist-service.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS7';
  currentArtist: any[] = [{
    bio: '',
    plays: 0,
    listeners: 0,
    fromCache: false
  }]
  ;

  artist: string;
  artistControl: FormControl = new FormControl('', Validators.required);
  click = false;

  constructor(private artistService: artistService) {
  }


  getArtistSummary() {
    this.artistService.getArtistSummary(this.artistControl.value).subscribe(
      response => {
        this.currentArtist = [{
          bio: response['artist']['bio']['summary'],
          plays: response['artist']['stats']['playcount'],
          listeners: response['artist']['stats']['listeners'],
          fromCache: response['fromCache']
        },
          {
            bio: response['artist']['bio']['summary'],
            plays: response['artist']['stats']['playcount'],
            listeners: response['artist']['stats']['listeners'],
            fromCache: response['fromCache']
          }
        ];
      }
    );
  }

}
