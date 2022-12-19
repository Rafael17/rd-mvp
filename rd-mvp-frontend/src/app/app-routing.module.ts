import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'expenses/:projectId', component: ExpensesComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
