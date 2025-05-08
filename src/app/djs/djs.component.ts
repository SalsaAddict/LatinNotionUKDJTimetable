import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SystemService } from '../system.service';
import { Timetable } from '../timetable';

@Component({
  selector: 'app-djs',
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './djs.component.html',
  styleUrl: './djs.component.css'
})
export class DJsComponent {
  constructor(readonly system: SystemService) {}
  isBusySession(session: Timetable.Session) {
    let found = false;
    for (let i = 0; i < session.slots.length; i++) {
      if (session.slots[i].dj === this.system.djName) {
        found = true;
        break;
      }
    }
    return found;
  }
}
