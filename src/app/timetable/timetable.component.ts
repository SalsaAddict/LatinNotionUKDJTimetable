import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  NgbDropdownModule,
  NgbPopoverModule
} from '@ng-bootstrap/ng-bootstrap';
import { Timetable } from '../timetable';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-timetable',
  imports: [CommonModule, NgbDropdownModule, NgbPopoverModule],
  providers: [DatePipe],
  templateUrl: './timetable.component.html'
})
export class TimetableComponent implements OnInit {
  @Input() dayParam?: string;
  constructor(
    readonly system: SystemService,
    private readonly datePipe: DatePipe
  ) {}
  ngOnInit(): void {
    if (this.dayParam) {
      let abbr = this.dayParam.substring(0, 3).toLowerCase();
      let dayNames = this.system.timetable.dayNames;
      for (let i = 0; i < dayNames.length; i++) {
        if (dayNames[i].substring(0, 3).toLowerCase() === abbr) {
          console.log('match', abbr, dayNames[i]);
          this.dayParam = dayNames[i];
          this.system.setDayIndex(i);
          break;
        }
      }
    }
  }
  get day() {
    return this.system.timetable.days[this.system.dayIndex];
  }
  hours(session: Timetable.Session) {
    let items: number[] = [];
    for (let i = 0; i < session.duration; i++) {
      items.push(session.start + i);
    }
    return items;
  }
  slot(session: Timetable.Session, room: Timetable.Rooms, hour: number) {
    let item = session.slots.find((item) => {
      if (item.room !== room) return false;
      if (hour < item.start) return false;
      if (hour >= item.start + item.duration) return false;
      return true;
    });
    if (item) {
      if (item.start < hour) return null;
      return item;
    }
    return;
  }
}
