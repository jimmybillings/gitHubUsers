import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Users } from './users.interface';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-user-search',
    template: `
        <form [formGroup]="form" action="">
            <mat-form-field class="full-width">
                <input 
                matInput
                type="text"
                placeholder="{{placeHolder}}"
                formControlName="{{controlName}}" 
                required>
            </mat-form-field>
            <mat-error *ngIf="errors">Invalid User Name</mat-error>
        </form>
    `,
    styles: [`
        .full-width {
            width: 300px;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserSearchComponent {
    @Input() form: FormGroup;
    @Input() placeHolder: string;
    @Input() controlName: string;
    @Input() errors: string;
}
