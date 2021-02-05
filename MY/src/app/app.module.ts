import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { NgCircleProgressModule } from 'node_modules/ng-circle-progress';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    MyResumeComponent,
    ServicesComponent,
    ContactComponent,
    ProjectsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 99,
      "space": -8,
      "outerStrokeWidth": 8,
      "innerStrokeWidth": 8,
      "innerStrokeColor":"#fafaf9",
      "showSubtitle": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
