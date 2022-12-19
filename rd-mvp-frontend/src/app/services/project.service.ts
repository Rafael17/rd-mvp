import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from '../models/expense';
import { Project } from '../models/project';

const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) {}

    getAllProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${API_ENDPOINT}/projects`);
    }

    createProject(project: Project): Observable<Project[]> {
        return this.http.post<Project[]>(`${API_ENDPOINT}/projects`, project);
    }
}
