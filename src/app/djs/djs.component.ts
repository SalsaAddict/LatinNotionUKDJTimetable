import { Component, Input, OnInit } from '@angular/core';
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
export class DJsComponent implements OnInit {
  @Input() djName?: string;
  constructor(readonly system: SystemService) {}
  ngOnInit(): void {
    if (this.djName) {
      let djName = this.djName.toLowerCase(),
        djNames = this.system.timetable.djs;
      for (let i = 0; i < djNames.length; i++) {
        if (djNames[i].toLowerCase() === djName) {
          this.system.setDjName(djNames[i]);
          break;
        }
      }
    }
  }
  isBusySession(session: Timetable.ISession) {
    let found = false;
    for (let i = 0; i < session.slots.length; i++) {
      if (session.slots[i].dj === this.system.djName) {
        found = true;
        break;
      }
    }
    return found;
  }
  slots(session: Timetable.ISession) {
    return session.slots
      .filter((slot) => {
        return slot.dj === this.system.djName;
      })
      .sort((a, b) => {
        return a.start > b.start ? 1 : a.start < b.start ? -1 : 0;
      });
  }
}
