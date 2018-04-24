import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Users } from './users.interface';

@Component({
    selector: 'app-user-list',
    template: `
        <mat-nav-list>
            <mat-chip-list *ngIf="validCount(users.total_count)">
                <h3>Total Users: </h3>
                <mat-chip color="primary" selected="true">{{users.total_count}}</mat-chip>
            </mat-chip-list>
            <h3 *ngIf="!validCount(users.total_count)">Currently no users to display</h3>
            <a mat-list-item [href]="user.html_url" target="_blank" *ngFor="let user of users.items">
                <img [src]="user.avatar_url" />
                <p>{{user.login}}</p>
            </a>
        </mat-nav-list>`,
    styles: [`
        h3 {margin: 20px;}  
        p { font-size: 20px;} 
        img {
            margin-right: 50px;
            height: 40px;
            width: 40px;
            border: 2px solid #eee;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserListComponent {
    @Input() users: Users;

    public validCount(count): boolean {
        return count > 0;
    }
}
