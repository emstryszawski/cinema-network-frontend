import {Component, OnInit} from '@angular/core';
import {DataSenderService} from "../common/service/data-sender.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  public correlationId: number;

  constructor(private dataSenderService: DataSenderService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.correlationId = history.state.data;
  }

  onSubmit(form: NgForm) {
    let firstname = form.value.firstname;
    let lastname = form.value.lastname;
    let email = form.value.email;
    let phoneNumber = form.value.phoneNumber;
    this.dataSenderService.addCustomer(firstname, lastname, email, phoneNumber, this.correlationId);
    this.router.navigate(['/buy'], {state: {data: this.correlationId}});
  }
}
