export class Timetable {
  get djs() {
    return Timetable.DJNames.map((value) => value).sort();
  }
  days: Timetable.Day[] = [
    {
      date: new Date('2025-05-15'),
      sessions: [
        {
          name: 'Boat Party',
          start: 20,
          duration: 4,
          rooms: ['Bachata', 'Salsa'],
          slots: [
            { room: 'Salsa', start: 20, duration: 2, dj: 'Ramiro' },
            { room: 'Salsa', start: 22, duration: 1, dj: 'Pierre' },
            { room: 'Salsa', start: 23, duration: 1, dj: 'Shahid' },
            { room: 'Bachata', start: 20, duration: 1, dj: 'Pierre' },
            { room: 'Bachata', start: 21, duration: 1, dj: 'Shahid' },
            { room: 'Bachata', start: 22, duration: 1, dj: 'Daniel Chong' },
            { room: 'Bachata', start: 23, duration: 1, dj: 'Roger Cracco' }
          ]
        }
      ]
    },
    {
      date: new Date('2025-05-16'),
      sessions: [
        {
          name: 'Afternoon Social',
          start: 16,
          duration: 4,
          rooms: ['Mixed SBK'],
          slots: [
            { room: 'Mixed SBK', start: 16, duration: 2, dj: 'Farsh' },
            { room: 'Mixed SBK', start: 18, duration: 2, dj: 'Chino' }
          ]
        },
        {
          name: 'Party Night',
          start: 21,
          duration: 7,
          rooms: ['Bachata', 'Salsa', 'Cuban', 'Kizomba'],
          slots: [
            {
              room: 'Bachata',
              start: 21,
              duration: 2,
              dj: 'Shahid',
              notes: 'Jack & Jill<br>Pro Competition'
            },
            { room: 'Bachata', start: 23, duration: 3, dj: 'Pierre' },
            { room: 'Bachata', start: 26, duration: 1, dj: 'Peynao' },
            { room: 'Bachata', start: 27, duration: 1, dj: 'Farsh' },
            {
              room: 'Salsa',
              start: 21,
              duration: 2,
              dj: 'Ramiro',
              notes: 'Salsa & Bachata<br>during competition'
            },
            { room: 'Salsa', start: 23, duration: 2, dj: 'Julian the Duke' },
            { room: 'Salsa', start: 25, duration: 2, dj: 'Mauricio' },
            { room: 'Cuban', start: 21, duration: 3, dj: 'Massimo' },
            { room: 'Cuban', start: 24, duration: 3, dj: 'Javier La Rosa' },
            { room: 'Kizomba', start: 21, duration: 2, dj: 'Qas' },
            { room: 'Kizomba', start: 23, duration: 1, dj: 'Jeydikson' },
            { room: 'Kizomba', start: 24, duration: 2, dj: 'Shark' },
            { room: 'Kizomba', start: 26, duration: 2, dj: 'Super Dixon' }
          ]
        }
      ]
    },
    {
      date: new Date('2025-05-17'),
      sessions: [
        {
          name: 'Afternoon Social',
          start: 14,
          duration: 6,
          rooms: ['Mixed SBK'],
          slots: [
            { room: 'Mixed SBK', start: 14, duration: 2, dj: 'Davide' },
            { room: 'Mixed SBK', start: 16, duration: 2, dj: 'Shahid' },
            { room: 'Mixed SBK', start: 18, duration: 2, dj: 'Farsh' }
          ]
        },
        {
          name: 'Party Night',
          start: 21,
          duration: 7,
          rooms: ['Bachata', 'Salsa', 'Cuban', 'Kizomba'],
          slots: [
            {
              room: 'Bachata',
              start: 21,
              duration: 2,
              dj: 'Oreo Sensual',
              notes: 'Shows'
            },
            { room: 'Bachata', start: 23, duration: 1, dj: 'Daniel Chong' },
            { room: 'Bachata', start: 24, duration: 1, dj: 'Pierre' },
            { room: 'Bachata', start: 25, duration: 1, dj: 'Chino' },
            { room: 'Bachata', start: 26, duration: 1, dj: 'Julian MrM' },
            { room: 'Bachata', start: 27, duration: 1, dj: 'Shahid' },
            { room: 'Salsa', start: 21, duration: 2, dj: 'Ami Emirato' },
            { room: 'Salsa', start: 23, duration: 2, dj: 'Julian the Duke' },
            { room: 'Salsa', start: 25, duration: 2, dj: 'Fadi K' },
            {
              room: 'Cuban',
              start: 21,
              duration: 2,
              dj: 'Ramiro',
              notes: 'Cuban Salsa & Bachata<br>during shows'
            },
            { room: 'Cuban', start: 23, duration: 2, dj: 'Davide' },
            { room: 'Cuban', start: 25, duration: 2, dj: 'Javier La Rosa' },
            { room: 'Kizomba', start: 21, duration: 2, dj: 'Super Dixon' },
            { room: 'Kizomba', start: 23, duration: 1, dj: 'Qas' },
            { room: 'Kizomba', start: 24, duration: 2, dj: 'Shark' },
            { room: 'Kizomba', start: 26, duration: 2, dj: 'Jeydikson' }
          ]
        }
      ]
    },
    {
      date: new Date('2025-05-18'),
      sessions: [
        {
          name: 'Afternoon Social',
          start: 14,
          duration: 6,
          rooms: ['Mixed SBK'],
          slots: [
            { room: 'Mixed SBK', start: 14, duration: 2, dj: 'Farsh' },
            { room: 'Mixed SBK', start: 16, duration: 2, dj: 'Davide' },
            { room: 'Mixed SBK', start: 18, duration: 2, dj: 'Chino' }
          ]
        },
        {
          name: 'Party Night',
          start: 21,
          duration: 6,
          rooms: ['Bachata', 'Salsa', 'Cuban', 'Kizomba'],
          slots: [
            {
              room: 'Bachata',
              start: 21,
              duration: 2,
              dj: 'Pierre',
              notes: 'Jack & Jill<br>Open Competition'
            },
            { room: 'Bachata', start: 23, duration: 1, dj: 'Oreo Sensual' },
            { room: 'Bachata', start: 24, duration: 1, dj: 'Chino' },
            { room: 'Bachata', start: 25, duration: 1, dj: 'Julian MrM' },
            { room: 'Bachata', start: 26, duration: 1, dj: 'Farsh' },
            {
              room: 'Salsa',
              start: 21,
              duration: 2,
              dj: 'Ami Emirato',
              notes: 'Salsa & Bachata<br>during competition'
            },
            { room: 'Salsa', start: 23, duration: 2, dj: 'Julian the Duke' },
            { room: 'Salsa', start: 25, duration: 2, dj: 'Fadi K' },
            { room: 'Cuban', start: 21, duration: 3, dj: 'Moe Flex' },
            { room: 'Cuban', start: 24, duration: 3, dj: 'Davide' },
            { room: 'Kizomba', start: 21, duration: 2, dj: 'Jeydikson' },
            { room: 'Kizomba', start: 23, duration: 1, dj: 'Super Dixon' },
            { room: 'Kizomba', start: 24, duration: 2, dj: 'Shark' },
            { room: 'Kizomba', start: 26, duration: 2, dj: 'Qas' }
          ]
        }
      ]
    }
  ];
}

export namespace Timetable {
  export interface Day {
    date: Date;
    sessions: Session[];
  }
  export interface Period {
    start: number;
    duration: number;
  }
  export interface Session extends Period {
    name: SessionName;
    rooms: Rooms[];
    slots: Slot[];
  }
  export type SessionName = 'Afternoon Social' | 'Party Night' | 'Boat Party';
  export interface Slot extends Period {
    room: Rooms;
    dj: DJs;
    notes?: string;
  }
  export type Rooms = 'Bachata' | 'Salsa' | 'Cuban' | 'Kizomba' | 'Mixed SBK';
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
    'Roger Cracco'
  ] as const;
  export type DJs = (typeof DJNames)[number];
}
