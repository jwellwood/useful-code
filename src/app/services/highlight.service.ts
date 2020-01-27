// Big help in using Prism from this blog post:
// https://auralinna.blog/post/2017/code-syntax-highlighting-with-angular-and-prismjs

import { Injectable, Inject } from "@angular/core";

import { PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

// import "clipboard";

import "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-scss";

declare var Prism: any;

@Injectable()
export class HighlightService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  highlightAll() {
    // if (isPlatformBrowser(this.platformId)) {
    Prism.highlightAll();
    // }
  }
}
