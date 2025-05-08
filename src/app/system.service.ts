import { DatePipe, DOCUMENT, formatDate } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { Timetable } from './timetable';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  constructor(
    @Inject(DOCUMENT) readonly document: Document,
    private readonly zone: NgZone
  ) {
    this.timetable = new Timetable();
  }
  timetable: Timetable;
  private setItem(key: string, value: unknown) {
    this.zone.run(() => {
      this.localStorage.setItem(key, JSON.stringify(value));
    });
  }
  private getItem<T>(key: string, defaultValue: T) {
    let item = this.localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : defaultValue;
  }
  get window() {
    return this.document.defaultView!;
  }
  get localStorage() {
    return this.window.localStorage;
  }
  set dayIndex(value: number) {
    this.setItem('dayIndex', value);
  }
  get dayIndex() {
    return this.getItem('dayIndex', 0);
  }
  setDayIndex(value: number) {
    this.dayIndex = value;
  }
  set djName(value: Timetable.DJs) {
    this.setItem('djName', value);
  }
  get djName() {
    return this.getItem('djName', 'Pierre');
  }
  setDjName(value: Timetable.DJs) {
    this.djName = value;
  }
}
