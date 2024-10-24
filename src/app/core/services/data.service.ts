import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { buildURLData } from '../utils/UrlUtil';

@Injectable({ providedIn: 'root' })
export class DataService {
	private apiPathData = buildURLData('');

	constructor(private httpClient: HttpClient) {}

	mapResponse(response: Observable<any>) {
		return response.pipe(map((data: any) => data));
	}

	getAllUsers(): Observable<any> {
		const response = this.httpClient.get(`${this.apiPathData}/users`);
		return this.mapResponse(response);
	}

	getUserData(userId: string): Observable<any> {
		const response = this.httpClient.get(`${this.apiPathData}/users/` + userId);
		return this.mapResponse(response);
	}

	getAllAreaList(): Observable<any> {
		const response = this.httpClient.get(`${this.apiPathData}/areaList`);
		return this.mapResponse(response);
	}

	getAllCheckList(page: number, areaId: number, themeId: number): Observable<any> {
		const response = this.httpClient.get(`${this.apiPathData}/checkList/` + page + `/` + areaId + `/` + themeId);
		return this.mapResponse(response);
	}

	getCheckListData(checkListId: number): Observable<any> {
		const response = this.httpClient.get(`${this.apiPathData}/checkList/` + checkListId);
		return this.mapResponse(response);
	}
}
