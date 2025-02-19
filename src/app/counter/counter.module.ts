import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports:[
  ],
  exports: [
    CounterComponent
  ]
})

export class CounterModule{

}
