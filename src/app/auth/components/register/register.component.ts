import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {registerAction} from '../../store/actions/register.action';
import {isSubmittingSelector} from '../../store/selectors';
import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid);
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({request}));
  }
}
