import { NgModule } from "@angular/core";
import { Reporsitory } from './repository';

// The next type of module is the Angular feature module, which is used to group related functionality together, such as the data repository classes in the data model. Using feature modules makes Angular applications easier to manage and maintain, although the real benefits are available when working with Angular building blocks such as components
// This is the decorator:
@NgModule({
    providers: [Reporsitory]
})

export class ModelModule { }