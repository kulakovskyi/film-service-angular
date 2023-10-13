import {NgModule} from "@angular/core";
import { FooterComponent } from './components/footer/footer.component';
import {CommonModule} from "@angular/common";

@NgModule({

  declarations: [
    FooterComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[FooterComponent]
})

export class FooterModule{}
