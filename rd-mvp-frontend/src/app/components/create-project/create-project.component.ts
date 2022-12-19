import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from 'src/app/services/project.service';

@Component({
    selector: 'app-create-project',
    templateUrl: './create-project.component.html',
    styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
    expenses: FormArray;
    projectForm: FormGroup;
    constructor(
        private readonly projectService: ProjectService,
        public dialogRef: MatDialogRef<CreateProjectComponent>,
    ) {
        const expenses = new FormArray([this.getNewFormGroup()]);
        this.projectForm = new FormGroup({
            title: new FormControl(''),
            expenses,
        });
        this.expenses = this.projectForm.get('expenses') as FormArray;
    }

    private getNewFormGroup() {
        return new FormGroup({
            amount: new FormControl(null, [Validators.required]),
            isQualified: new FormControl(false),
            title: new FormControl(null, [Validators.required]),
        });
    }

    ngOnInit(): void {}

    submit() {
        if (this.projectForm.valid) {
            const data = this.projectForm.getRawValue();
            this.projectService.createProject(data).subscribe();
            this.dialogRef.close();
        } else {
            alert('Form is invalid. Please fill out all fields');
        }
    }

    addExpense() {
        this.expenses.push(this.getNewFormGroup());
    }

    removeExpense(index: number) {
        if (this.expenses.length > 1) {
            this.expenses.removeAt(index);
        }
    }
}
