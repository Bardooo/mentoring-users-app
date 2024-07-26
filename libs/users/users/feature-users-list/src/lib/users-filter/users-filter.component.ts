import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { UsersFacade } from "@users/users/data-access";

@Component({
  selector: 'users-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.scss'],
})
export class UsersFilterComponent {
  private readonly fb = inject(FormBuilder)
  private readonly usersFacade = inject(UsersFacade)

  private readonly form: FormGroup = this.fb.group({
    name: ['', Validators.required],
  })

  private filterUsers() {
    this.usersFacade.filterUsers(this.form.value)
  }
}