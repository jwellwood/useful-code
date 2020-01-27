// Big help in using Prism from this blog post:
// https://auralinna.blog/post/2017/code-syntax-highlighting-with-angular-and-prismjs

import { Component, OnInit, Input, AfterViewChecked } from "@angular/core";
import { HighlightService } from "src/app/services/highlight.service";

@Component({
  selector: "app-code-block",
  templateUrl: "./code-block.component.html",
  styleUrls: ["./code-block.component.scss"]
})
export class CodeBlockComponent implements OnInit, AfterViewChecked {
  @Input() codeBlock: string;
  highlighted: boolean = false;
  constructor(private highlightService: HighlightService) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    if (this.codeBlock && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
