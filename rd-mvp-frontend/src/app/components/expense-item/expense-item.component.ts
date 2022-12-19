import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
    selector: 'app-expense-item',
    templateUrl: './expense-item.component.html',
    styleUrls: ['./expense-item.component.scss'],
})
export class ExpenseItemComponent implements OnInit {
    @Input() project: Project;

    constructor() {}

    ngOnInit(): void {}
}
