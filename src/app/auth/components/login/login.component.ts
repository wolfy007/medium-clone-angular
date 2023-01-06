import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/selectors';
import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {LoginRequestInterface} from 'src/app/auth/types/loginRequest.interface';
import {loginAction} from 'src/app/auth/store/actions/login.action';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
  }

  private initForm(): void {
    console.log('initForm');
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({request}));
  }
}
