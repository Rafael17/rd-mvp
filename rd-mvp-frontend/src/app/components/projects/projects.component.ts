import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    projects$: Observable<Project[]> = this.projectService.getAllProjects();
    searchResultProjects: Project[];
    constructor(
        private readonly projectService: ProjectService,
        public dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        this.subscribeToProjects();
    }

    subscribeToProjects() {
        this.projects$.subscribe(
            (projects) => (this.searchResultProjects = projects),
        );
    }

    openCreateProjectModal() {
        const dialogRef = this.dialog.open(CreateProjectComponent, {
            minHeight: '400px',
            width: '700px',
        });
        dialogRef.afterClosed().subscribe(() => this.subscribeToProjects());
    }

    searchUpdated(searchText: string) {
        this.searchResultProjects = this.searchResultProjects.map((project) => {
            project.isHidden = !project.title
                .toLowerCase()
                .includes(searchText.toLowerCase());
            return project;
        });
    }
}
