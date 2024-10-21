import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../models';
import { getCookie, setCookie } from '../utils/cookie.util';
import { accessToken } from '../constants/general.constant';
import { getData } from '../utils/local-storage.util';

@Injectable({ providedIn: 'root' })
export class AccountService {
	private userLogged$: BehaviorSubject<UserData> = new BehaviorSubject<any>(null);
	private userToken$: BehaviorSubject<string> = new BehaviorSubject<any>(null);

	constructor(private router: Router, private http: HttpClient) {
		if (getData('user')) {
			this.setUserLogged$(JSON.parse(getData('user')));
		}
	}

	get getUserLogged$(): Observable<UserData> {
		return this.userLogged$.asObservable();
	}

	get userLogged(): UserData {
		return this.userLogged$.getValue();
	}

	setUserLogged$(userLogged: UserData): void {
		this.userLogged$.next(userLogged);
	}

	getAccessToken(): string {
		return this.userToken$.getValue() || getCookie(accessToken);
	}

	getAccessToken$(): Observable<string> {
		return this.userToken$.asObservable();
	}

	setAccessToken(token: string): void {
		this.userToken$.next(token);
		if (token) {
			setCookie(accessToken, token);
		}
	}
}
