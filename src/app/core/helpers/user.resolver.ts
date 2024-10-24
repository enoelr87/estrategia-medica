import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService, DataService } from '../services';

@Injectable({
	providedIn: 'root',
})
export class UserResolver implements Resolve<any> {
	constructor(private dataService: DataService, private accountService: AccountService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<any> {
		const userLogged = this.accountService.userLogged;
		const userId = userLogged._id;
		return this.dataService.getUserData(userId); // Llamada al servicio que obtiene los datos del usuario
	}
}
