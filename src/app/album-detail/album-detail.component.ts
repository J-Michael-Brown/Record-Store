import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [ AlbumService ]
})

export class AlbumDetailComponent implements OnInit {

  albumId: number = null;
  albumToDisplay: Album;

  constructor(
    private albumService: AlbumService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    })

    // this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

}
