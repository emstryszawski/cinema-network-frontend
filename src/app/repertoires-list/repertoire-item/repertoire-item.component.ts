import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../common/model/movie.model";
import {Repertoire} from "../../common/model/repertoire.model";
import {LoginDialogComponent} from "../../login-dialog/login-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ScrollStrategyOptions} from "@angular/cdk/overlay";

@Component({
  selector: 'app-repertoire-item',
  templateUrl: './repertoire-item.component.html',
  styleUrls: ['./repertoire-item.component.css']
})
export class RepertoireItemComponent implements OnInit {
  @Input() repertoire: Repertoire;
  public movie: Movie;
  public startTime: string;

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.movie = this.repertoire.movie;
    this.startTime = this.getTimeFromDate();
  }

  public getTimeFromDate(): string {
    return this.repertoire.startDateTime.getHours() + ":" +
      this.repertoire.startDateTime.getMinutes();
  }

  openDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: "760px",
      height: "480px",
      disableClose: true
    });
  }
}
