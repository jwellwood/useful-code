import { Component, OnInit } from "@angular/core";
import { CodesService } from "src/app/services/codes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Code } from "src/app/models/Code";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-code-card",
  templateUrl: "./code-card.component.html",
  styleUrls: ["./code-card.component.scss"]
})
export class CodeCardComponent implements OnInit {
  id: string;
  code: Code;
  isAuth: boolean;
  constructor(
    private codesService: CodesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
    this.codesService.getCode(this.id).subscribe(code => {
      if (code != null) {
        this.code = code;
      }
    });
  }
  // TODO add a confirmation
  onDelete() {
    this.codesService.deleteCode(this.code);
    this.router.navigate(["/"]);
  }
}
