import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../common/model/movie.model";
import {Repertoire} from "../../common/model/repertoire.model";
import {DataSenderService} from "../../common/service/data-sender.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-repertoire-item',
  templateUrl: './repertoire-item.component.html',
  styleUrls: ['./repertoire-item.component.css']
})
export class RepertoireItemComponent implements OnInit {
  @Input() repertoire: Repertoire;
  public movie: Movie;
  public startTime: string;
  public correlationId: number;
  constructor(private dataSenderService: DataSenderService) {}

  ngOnInit(): void {
    this.movie = this.repertoire.movie;
  }

  createPurchase() {
    let observable = this.dataSenderService.createPurchase();
    observable.subscribe(data => {
      this.correlationId = data.correlationId;
    })
  }
}
