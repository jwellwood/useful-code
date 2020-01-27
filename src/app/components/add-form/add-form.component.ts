import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { CodesService } from "src/app/services/codes.service";
import { Code } from "src/app/models/Code";

@Component({
  selector: "app-add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.scss"]
})
export class AddFormComponent implements OnInit {
  id: string;
  isUpdate: boolean = false;
  addCodeForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private codesService: CodesService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.addCodeForm = this.createFormGroup(this.fb);
    this.route.params
      .pipe(switchMap((params: Params) => this.codesService.getCode(this.id)))
      .subscribe((code: Code) => {
        if (code) {
          this.isUpdate = true;
          this.addCodeForm.patchValue({
            name: code.name,
            desc: code.desc,
            codeBlock: code.codeBlock,
            type: code.type
          });
        }
      });
  }

  createFormGroup(fb: FormBuilder) {
    return fb.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      desc: ["", [Validators.required, Validators.maxLength(200)]],
      codeBlock: ["", [Validators.required, Validators.maxLength(5000)]],
      type: ["", [Validators.required]]
    });
  }

  get name() {
    return this.addCodeForm.get("name");
  }
  get desc() {
    return this.addCodeForm.get("desc");
  }
  get codeBlock() {
    return this.addCodeForm.get("codeBlock");
  }

  get type() {
    return this.addCodeForm.get("type");
  }

  onUpdate() {
    // Create a deep copy
    const value: Code = Object.assign({}, this.addCodeForm.value);
    const valid: boolean = this.addCodeForm.valid;
    if (!valid) {
      alert("There was a problem");
    } else {
      value.id = this.id;
      this.codesService.updateCode(value);
      this.router.navigate([`/codes/${this.id}`]);
    }
  }

  onSubmit() {
    // Create a deep copy
    const value: Code = Object.assign({}, this.addCodeForm.value);
    const valid: boolean = this.addCodeForm.valid;
    if (!valid) {
      alert("There was a problem");
    } else {
      this.codesService.newCode(value);
      this.router.navigate([`/`]);
    }
  }
}
