import { Component } from '@angular/core';

import { PostAuthResponse, User } from '../_models';
import { AccountService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: PostAuthResponse;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}