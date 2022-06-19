import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../common/model/movie.model";
import {Repertoire} from "../../common/model/repertoire.model";

@Component({
  selector: 'app-repertoire-item',
  templateUrl: './repertoire-item.component.html',
  styleUrls: ['./repertoire-item.component.css']
})
export class RepertoireItemComponent implements OnInit {
  @Input() repertoire: Repertoire;
  public movie: Movie;
  constructor() {}

  ngOnInit(): void {
    this.movie = this.repertoire.movie;
  }
}
