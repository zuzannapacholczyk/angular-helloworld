import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Hero } from "../hero";

@Component({
  selector: "second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent implements OnInit {
  heroForm: FormGroup;

  hero: Hero = { name: "Abc", alterEgo: "Bca", power: "Dsa" };

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [Validators.required])
    });
  }
}
