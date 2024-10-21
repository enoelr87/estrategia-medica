import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PostAuthResponse } from '../models';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { deleteData, storeData } from '../utils/local-storage.util';
import { AccountService } from './account.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private router: Router, private http: HttpClient, private accountService: AccountService) {}

	mapResponse(response: Observable<any>): Observable<any> {
		return response.pipe(map((data: any) => data));
	}

	loginUser(username: string, password: string): Observable<PostAuthResponse> {
		return this.http.post<PostAuthResponse>(`${environment.apiUrl}/auth/login`, { username, password }).pipe(
			map((data) => {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				storeData('user', JSON.stringify(data.user));
				this.accountService.setUserLogged$(data.user);
				this.accountService.setAccessToken(data.accessToken);
				return data;
			})
		);
	}

	logout(): void {
		// remove user from local storage and set current user to null
		deleteData('user');
		this.accountService.setUserLogged$(null);
		this.router.navigate(['/login']);
	}
}
