import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AccountService, AlertService } from 'src/app/core/services';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private accountService: AccountService,
		private alertService: AlertService
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.loginForm.controls;
	}

	loginUser() {
		this.submitted = true;
		this.alertService.clear();
		if (this.loginForm.invalid) {
			return;
		}

		this.loading = true;
		this.accountService
			.login(this.f.email.value, this.f.password.value)
			.pipe(first())
			.subscribe(
				(data) => {
					console.info('data', data);
					if (data) {
						this.router.navigate(['/']);
					} else {
						this.alertService.error('Nome de usuário ou senha está incorreta');
						this.loading = false;
					}
				},
				(error) => {
					this.alertService.error(error);
					this.loading = false;
				}
			);
	}
}
