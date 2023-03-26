import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ScoresComponent } from './components/scores/scores.component';
import { TableComponent } from './components/table/table.component';
import { UseStoryFormComponent } from './components/use-story-form/use-story-form.component';
import { UserStoriesListComponent } from './components/user-stories-list/user-stories-list.component';
import { UserStoryComponent } from './components/user-story/user-story.component';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent},
  { path: '', component: UserStoriesListComponent},
  { path: 'user-stories-list', component: UserStoriesListComponent},
  { path: 'user-story/:id', component: UserStoryComponent},
  { path: 'user-story-form', component: UseStoryFormComponent},
  { path: 'scores-history', component: ScoresComponent},
  { path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
