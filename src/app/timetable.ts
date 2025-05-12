import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export class Timetable implements Timetable.ITimetable {
  constructor(private readonly http: HttpClient = inject(HttpClient)) {}
  $schema: Timetable.SchemaNames = './timetable.schema.json';
  days: Timetable.IDay[] = [];
  async load() {
    let timetable = await firstValueFrom(
      this.http.get<Timetable.ITimetable>('timetable.json')
    );
    this.days.push(...timetable.days);
  }
  get djs() {
    return Timetable.DJNames.map((value) => value).sort();
  }
  get dayNames() {
    return Timetable.DayNames.map((value) => value);
  }
  date(hour: number) {
    return new Date(new Date(0).setHours(hour));
  }
  period(start: number, duration: number) {
    return (
      formatDate(this.date(start), 'HH:mm', 'en-GB', '+0100') +
      ' - ' +
      formatDate(this.date(start + duration), 'HH:mm', 'en-GB', '+0100')
    );
  }
}

export namespace Timetable {
  export type SchemaNames = './timetable.schema.json';
  export interface ITimetable {
    $schema: SchemaNames;
    days: IDay[];
  }
  export const DayNames = ['Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
  export type Days = (typeof DayNames)[number];
  export interface IDay {
    name: Days;
    sessions: ISession[];
  }
  export interface IPeriod {
    start: number;
    duration: number;
  }
  export interface ISession extends IPeriod {
    name: Sessions;
    rooms: Rooms[];
    slots: ISlot[];
  }
  export const SessionNames = [
    'Afternoon Social',
    'Party Night',
    'Boat Party'
  ] as const;
  export type Sessions = (typeof SessionNames)[number];
  export interface ISlot extends IPeriod {
    room: Rooms;
    dj: DJs;
    notes?: string;
  }
  export const RoomNames = [
    'Bachata',
    'Salsa',
    'Cuban',
    'Kizomba',
    'Mixed SBK'
  ] as const;
  export type Rooms = (typeof RoomNames)[number];
  export const DJNames = [
    'Shahid',
    'Pierre',
    'Peynao',
    'Farsh',
    'Ramiro',
    'Julian the Duke',
    'Mauricio',
    'Massimo',
    'Javier La Rosa',
    'Davide',
    'Super Dixon',
    'Qas',
    'Shark',
    'Jeydikson',
    'Chino',
    'Oreo Sensual',
    'Daniel Chong',
    'Julian MrM',
    'Ami Emirato',
    'Fadi K',
    'Moe Flex',
    'Roger Cracco',
    'Junior',
    'Playlist'
  ] as const;
  export type DJs = (typeof DJNames)[number];
}
