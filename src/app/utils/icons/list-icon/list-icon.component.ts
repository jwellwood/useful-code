import { Component, OnInit, Input } from "@angular/core";
import {
  faInfinity,
  faPenFancy,
  faFire,
  faInfo
} from "@fortawesome/free-solid-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-list-icon",
  templateUrl: "./list-icon.component.html",
  styleUrls: ["./list-icon.component.scss"]
})
export class ListIconComponent implements OnInit {
  @Input() type: string;
  icon: any;
  number = faInfinity;
  string = faPenFancy;
  fire = faFire;
  angular = faAngular;
  other = faInfo;
  constructor() {}

  ngOnInit() {
    switch (this.type) {
      case "number":
        this.icon = this.number;
        break;
      case "string":
        this.icon = this.string;
        break;
      case "firebase":
        this.icon = this.fire;
        break;
      case "angular":
        this.icon = this.angular;
        break;
      case "other":
        this.icon = this.other;
        break;
    }
  }
}
