import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first.component";
import { SecondComponent } from "./components/second.component";
import { RoutingModule } from "./routing.module";

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent],
  imports: [BrowserModule, RoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
