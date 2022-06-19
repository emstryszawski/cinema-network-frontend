import {Component, OnInit} from '@angular/core';
import {Repertoire} from "../common/model/repertoire.model";
import {DataLoaderService} from "../common/service/data-loader.service";
import {DataSenderService} from "../common/service/data-sender.service";

@Component({
  selector: 'app-repertoires-list',
  templateUrl: './repertoires-list.component.html',
  styleUrls: ['./repertoires-list.component.css']
})
export class RepertoiresListComponent implements OnInit {
  public repertoires: Repertoire[] = [];

  constructor(private dataLoaderService: DataLoaderService) {
  }

  ngOnInit(): void {
    this.dataLoaderService.findAllRepertoires()
      .subscribe(data => {
        this.repertoires = data;
      });
  }
}
