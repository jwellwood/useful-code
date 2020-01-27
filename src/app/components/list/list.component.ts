import { Component, OnInit } from "@angular/core";
import { CodesService } from "src/app/services/codes.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  codes = [];
  isAuth: boolean;
  constructor(
    private codesService: CodesService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
    this.codesService.getCodes().subscribe(codes => {
      this.codes = codes;
    });
  }
}
