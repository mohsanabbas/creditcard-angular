import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateFormControl, CreditCardControl } from "../date-form-control";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    cardNumber: new CreditCardControl("", [
      Validators.required,
      Validators.pattern(/^4[0-9]{12}(?:[0-9]{3})?$/),
    ]),
    expiration: new DateFormControl("", [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
    installment: new FormControl("", []),
  });

  constructor() {
    console.log(this.cardForm.get("name"));
  }

  ngOnInit() {}

  onSubmit() {
    console.log("Form was submitted");
  }

  onResetClick() {
    this.cardForm.reset();
  }
}
