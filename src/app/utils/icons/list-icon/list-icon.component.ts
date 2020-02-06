import { Component, OnInit, Input } from "@angular/core";
import { faFire, faInfo } from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faSass,
  faReact,
  faAngular
} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-list-icon",
  templateUrl: "./list-icon.component.html",
  styleUrls: ["./list-icon.component.scss"]
})
export class ListIconComponent implements OnInit {
  @Input() type: string;
  icon: any;
  js = faJs;
  ts = faJs;
  css = faCss3Alt;
  sass = faSass;
  fire = faFire;
  html = faHtml5;
  react = faReact;
  angular = faAngular;
  other = faInfo;
  constructor() {}

  ngOnInit() {
    switch (this.type) {
      case "javascript":
        this.icon = this.js;
        break;
      case "typescript":
        this.icon = this.ts;
        break;
      case "css":
        this.icon = this.css;
        break;
      case "sass":
        this.icon = this.sass;
        break;
      case "firebase":
        this.icon = this.fire;
        break;
      case "angular":
        this.icon = this.angular;
        break;
      case "react":
        this.icon = this.react;
        break;
      case "html":
        this.icon = this.html;
        break;
      case "other":
        this.icon = this.other;
        break;
      default:
        this.icon = this.other;
    }
  }
}
