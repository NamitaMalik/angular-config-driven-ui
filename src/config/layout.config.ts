import { signal } from '@angular/core';

export const HOME_LAYOUT = signal({
    rows: [
      {
        columns: [
          { width: 6, type: 'welcome' },
          { width: 6, type: 'banner' }
        ]
      },
      {
        columns: [
          { width: 12, type: 'features', inputs: ['Simple', 'Fast', 'Reliable'] }
        ]
      }
    ]
  });

  export type column = {
    width: number,
    type: string,
    inputs: string[]
  }