import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { CodeCardComponent } from "./components/code-card/code-card.component";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { NotFoundComponent } from "./utils/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "add", component: AddFormComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  {
    path: "codes/:id/edit",
    component: AddFormComponent,
    canActivate: [AuthGuard]
  },
  { path: "codes/:id", component: CodeCardComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
