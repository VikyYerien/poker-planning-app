import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStoryComponent } from './components/user-story/user-story.component';
import { UserStoriesListComponent } from './components/user-stories-list/user-stories-list.component';
import { TableComponent } from './components/table/table.component';
import { ScoresComponent } from './components/scores/scores.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CardComponent } from './components/card/card.component';
import { UseStoryFormComponent } from './components/use-story-form/use-story-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserStoryComponent,
    UserStoriesListComponent,
    TableComponent,
    ScoresComponent,
    LogInComponent,
    CardComponent,
    UseStoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
