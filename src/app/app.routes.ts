import { Routes } from '@angular/router';
import { TimetableComponent } from './timetable/timetable.component';
import { DJsComponent } from './djs/djs.component';

export const routes: Routes = [
  { path: 'timetable', component: TimetableComponent },
  { path: 'djs', component: DJsComponent },
  { path: '**', redirectTo: '/timetable' }
];
