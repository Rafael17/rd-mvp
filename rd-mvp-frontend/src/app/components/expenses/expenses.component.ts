import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
    projects$: Observable<Project[]>;

    constructor(
        private readonly projectService: ProjectService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        const projectId = this.route.snapshot.paramMap.get('projectId');
        this.projects$ = this.projectService.getAllProjects().pipe(
            map((projects) => {
                if (projectId) {
                    return projects.filter(
                        (project) => project._id === projectId,
                    );
                }
                return projects;
            }),
        );
    }
}
