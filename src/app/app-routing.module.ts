import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component' ;
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TrainingComponent } from './training/training.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { BlogComponent } from './blog/blog.component';
import { EventComponent } from './event/event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyComponent } from './apply/apply.component';
const routes: Routes = [
{path:'about',component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'contact',component:ContactComponent},
  {path:'training',component:TrainingComponent},
  {path:'services',component:ServicesComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'course',component:CourseComponent},
  {path:'blog',component:BlogComponent},
  {path:'event',component:EventComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Apply',component:ApplyComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
