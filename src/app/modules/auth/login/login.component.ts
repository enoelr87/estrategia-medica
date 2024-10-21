import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastMessageService } from 'src/app/core/services/toast-message.service';

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
		private authService: AuthService,
		private toastService: ToastMessageService
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
		this.toastService.clear();
		if (this.loginForm.invalid) {
			return;
		}

		this.loading = true;
		this.authService
			.loginUser(this.f.email.value, this.f.password.value)
			.pipe(first())
			.subscribe(
				(data) => {
					if (data) {
						this.router.navigate(['/']);
					}
				},
				(error) => {
					this.toastService.handleError(error);
					this.loading = false;
				}
			);
	}
}
