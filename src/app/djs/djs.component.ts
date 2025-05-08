import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SystemService } from '../system.service';
import { Timetable } from '../timetable';

interface DJSlot extends Timetable.Slot {
  date: Date;
  session: Timetable.SessionName;
}

@Component({
  selector: 'app-djs',
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './djs.component.html'
})
export class DJsComponent {
  constructor(readonly system: SystemService) {}
  isBusyDay(day: Timetable.Day) {
    let found = false;
    for (let iSession = 0; iSession < day.sessions.length; iSession++) {
      for (
        let iSlot = 0;
        iSlot < day.sessions[iSession].slots.length;
        iSlot++
      ) {
        if (day.sessions[iSession].slots[iSlot].dj === this.system.djName) {
          found = true;
          break;
        }
      }
      if (found) break;
    }
    return found;
  }
  isBusySession(session: Timetable.Session) {}
}
