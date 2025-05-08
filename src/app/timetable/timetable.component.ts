import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
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
export class TimetableComponent {
  constructor(
    readonly system: SystemService,
    private readonly datePipe: DatePipe
  ) {}
  set day(day: Timetable.Day) {
    this.system.dayIndex = this.system.timetable.days.indexOf(day);
  }
  get day() {
    return this.system.timetable.days[this.system.dayIndex];
  }
  date(hour: number) {
    return new Date(this.day.date.setHours(hour));
  }
  hours(session: Timetable.Session) {
    let items: number[] = [];
    for (let i = 0; i < session.duration; i++) {
      items.push(session.start + i);
    }
    return items;
  }
  end(start: Date) {
    return this.date(start.getHours() + 1);
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
  period(start: number, duration: number) {
    return (
      this.datePipe.transform(this.date(start), 'HH:mm') +
      ' - ' +
      this.datePipe.transform(this.date(start + duration), 'HH:mm')
    );
  }
}
