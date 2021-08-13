import { MusicDataService } from './../music-data.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  favourites!: Array<any>;

  constructor(private musicDataService: MusicDataService) {}

  ngOnInit(): void {
    this.musicDataService.getFavourites().subscribe((data) => {
      this.favourites = data.tracks;
    });
  }

  removeFromFavourites(id: string): void {
    this.musicDataService.removeFromFavourites(id).subscribe((data) => {
      this.favourites = data.tracks;
    });
  }
}
