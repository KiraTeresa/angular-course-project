import {NgModule} from "@angular/core";
import {AlertComponent} from "../components/alert/alert.component";
import {LoadingSpinnerComponent} from "../components/loading-spinner/loading-spinner.component";
import {PlaceholderDirective} from "../directives/placeholder.directive";
import {DropdownDirective} from "../directives/dropdown.directive";
import {CommonModule} from "@angular/common";
import {LoggingService} from "../services/logging.service";

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  providers: [LoggingService]
})
export class SharedModule {}
