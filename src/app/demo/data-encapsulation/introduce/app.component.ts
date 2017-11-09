import {Component} from "@angular/core";
import {ArrayCollection} from "jigsaw/core/data/array-collection";
import {HttpClient} from "@angular/common/http";

@Component({
    templateUrl: './app.component.html'
})
export class DataIntroduceComponent {

    constructor(http: HttpClient) {
    }

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = 'Jigsaw提供了很多数据封装对象用于处理各种场景下的数据，熟悉和善于利用这些数据封装对象会减少很多重复性的工作。';
    description: string = require('!!raw-loader!./readme.md');
}