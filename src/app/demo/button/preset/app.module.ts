import {NgModule} from "@angular/core";
import {JigsawButtonModule} from "jigsaw/component/button/button";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {ButtonPresetDemoComponent} from "./app.component";

@NgModule({
    declarations: [ButtonPresetDemoComponent],
    exports: [ButtonPresetDemoComponent],
    imports: [JigsawButtonModule, JigsawDemoDescriptionModule]
})
export class ButtonPresetDemoModule {

}
