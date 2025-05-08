import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Timetable } from './timetable';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  constructor(@Inject(DOCUMENT) readonly document: Document) {
    this.timetable = new Timetable();
  }
  timetable: Timetable;
  get window() {
    return this.document.defaultView!;
  }
  get localStorage() {
    return this.window.localStorage;
  }
  set dayIndex(value: number) {
    this.localStorage.setItem('dayIndex', JSON.stringify(value));
  }
  get dayIndex() {
    return JSON.parse(this.localStorage.getItem('dayIndex') ?? '0');
  }
  set djName(value: Timetable.DJs) {
    this.localStorage.setItem('djName', JSON.stringify(value));
  }
  get djName() {
    return 'Davide';
    /*
    return JSON.parse(
      this.localStorage.getItem('djName') ??
        JSON.stringify(this.timetable.djs[0])
    );
    */
  }
}
