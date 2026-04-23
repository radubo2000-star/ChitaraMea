import type { Song, Author, Category, Chord } from '@/types';

export const chordsData: Chord[] = [
  {
    "id": 1,
    "name": "A",
    "type": "major",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 3
      }
    ],
    "open_strings": [
      2,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 2,
    "name": "A#",
    "type": "major",
    "root_note": "A#",
    "positions": [
      {
        "fret": 1,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 4
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 1,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 3,
    "name": "A#m",
    "type": "minor",
    "root_note": "A#",
    "positions": [
      {
        "fret": 1,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 1,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 1,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 4,
    "name": "A6",
    "type": "6th",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 3
      }
    ],
    "open_strings": [
      1,
      6
    ],
    "muted_strings": [
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 5,
    "name": "A7",
    "type": "dominant 7th",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 3
      }
    ],
    "open_strings": [
      2,
      4,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 6,
    "name": "Am",
    "type": "minor",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      2,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 7,
    "name": "Am/C",
    "type": "minor",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 4
      }
    ],
    "open_strings": [
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 8,
    "name": "Am7",
    "type": "minor 7th",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      1,
      4,
      6
    ],
    "muted_strings": [
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 9,
    "name": "Am9",
    "type": "minor 9th",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      1,
      4,
      6
    ],
    "muted_strings": [
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 10,
    "name": "Asus4",
    "type": "sus4",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 3
      }
    ],
    "open_strings": [
      2,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 11,
    "name": "B",
    "type": "major",
    "root_note": "B",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 4,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 4
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 2,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 12,
    "name": "B7",
    "type": "dominant 7th",
    "root_note": "B",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 4
      }
    ],
    "open_strings": [
      5
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 13,
    "name": "Bb",
    "type": "major",
    "root_note": "Bb",
    "positions": [
      {
        "fret": 1,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 4
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 1,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 14,
    "name": "Bdim",
    "type": "diminished",
    "root_note": "B",
    "positions": [
      {
        "fret": 1,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 2
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1,
      2,
      6
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 15,
    "name": "Bm",
    "type": "minor",
    "root_note": "B",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 4,
        "string": 4,
        "finger": 4
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 2,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 16,
    "name": "C",
    "type": "major",
    "root_note": "C",
    "positions": [
      {
        "fret": 3,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      4,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 17,
    "name": "C#",
    "type": "major",
    "root_note": "C#",
    "positions": [
      {
        "fret": 4,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 6,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 6,
        "string": 5,
        "finger": 4
      },
      {
        "fret": 4,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 4,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 4
  },
  {
    "id": 18,
    "name": "C#7",
    "type": "dominant 7th",
    "root_note": "C#",
    "positions": [
      {
        "fret": 4,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 4,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 5,
        "finger": 4
      },
      {
        "fret": 4,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 4,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 4
  },
  {
    "id": 19,
    "name": "C#m",
    "type": "minor",
    "root_note": "C#",
    "positions": [
      {
        "fret": 4,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 6,
        "string": 4,
        "finger": 4
      },
      {
        "fret": 5,
        "string": 5,
        "finger": 2
      },
      {
        "fret": 4,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 4,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 4
  },
  {
    "id": 20,
    "name": "C7",
    "type": "dominant 7th",
    "root_note": "C",
    "positions": [
      {
        "fret": 3,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 4
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 21,
    "name": "C9",
    "type": "9th",
    "root_note": "C",
    "positions": [
      {
        "fret": 3,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 4
      }
    ],
    "open_strings": [
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 22,
    "name": "Cdim",
    "type": "diminished",
    "root_note": "C",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 2
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1,
      2,
      6
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 23,
    "name": "Cm",
    "type": "minor",
    "root_note": "C",
    "positions": [
      {
        "fret": 3,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 5,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 5,
        "string": 4,
        "finger": 4
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 3,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 24,
    "name": "D",
    "type": "major",
    "root_note": "D",
    "positions": [
      {
        "fret": 2,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 2
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 25,
    "name": "D6",
    "type": "6th",
    "root_note": "D",
    "positions": [
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 3
      }
    ],
    "open_strings": [
      3,
      5
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 26,
    "name": "D7",
    "type": "dominant 7th",
    "root_note": "D",
    "positions": [
      {
        "fret": 2,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 2
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 27,
    "name": "D7sus4",
    "type": "sus4",
    "root_note": "D",
    "positions": [
      {
        "fret": 1,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 2
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 28,
    "name": "Ddim",
    "type": "diminished",
    "root_note": "D",
    "positions": [
      {
        "fret": 1,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 2
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 29,
    "name": "Dm",
    "type": "minor",
    "root_note": "D",
    "positions": [
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 30,
    "name": "Dm7",
    "type": "minor 7th",
    "root_note": "D",
    "positions": [
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": {
      "fret": 1,
      "from_string": 5,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 31,
    "name": "E",
    "type": "major",
    "root_note": "E",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 4,
        "finger": 1
      }
    ],
    "open_strings": [
      1,
      5,
      6
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 32,
    "name": "E7",
    "type": "dominant 7th",
    "root_note": "E",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 4,
        "finger": 1
      }
    ],
    "open_strings": [
      1,
      3,
      5,
      6
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 33,
    "name": "Eb",
    "type": "major",
    "root_note": "Eb",
    "positions": [
      {
        "fret": 1,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 4
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 3
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 34,
    "name": "Edim",
    "type": "diminished",
    "root_note": "E",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      1
    ],
    "muted_strings": [
      2,
      6
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 35,
    "name": "Em",
    "type": "minor",
    "root_note": "E",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 3,
        "finger": 3
      }
    ],
    "open_strings": [
      1,
      4,
      5,
      6
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 36,
    "name": "F",
    "type": "major",
    "root_note": "F",
    "positions": [
      {
        "fret": 1,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 1,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 37,
    "name": "F#",
    "type": "major",
    "root_note": "F#",
    "positions": [
      {
        "fret": 2,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 4,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 2,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 38,
    "name": "F#7",
    "type": "dominant 7th",
    "root_note": "F#",
    "positions": [
      {
        "fret": 2,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 2,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 39,
    "name": "F#m",
    "type": "minor",
    "root_note": "F#",
    "positions": [
      {
        "fret": 2,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 4,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 2,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 40,
    "name": "Fm",
    "type": "minor",
    "root_note": "F",
    "positions": [
      {
        "fret": 1,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 1,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 1,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 41,
    "name": "G",
    "type": "major",
    "root_note": "G",
    "positions": [
      {
        "fret": 3,
        "string": 1,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 3
      }
    ],
    "open_strings": [
      3,
      4,
      5
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 42,
    "name": "G#",
    "type": "major",
    "root_note": "G#",
    "positions": [
      {
        "fret": 4,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 6,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 5,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 4,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 4
  },
  {
    "id": 43,
    "name": "G#7",
    "type": "dominant 7th",
    "root_note": "G#",
    "positions": [
      {
        "fret": 4,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 4,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 5,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 4,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 4
  },
  {
    "id": 44,
    "name": "G#m",
    "type": "minor",
    "root_note": "G#",
    "positions": [
      {
        "fret": 4,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 6,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 4,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 4,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 4
  },
  {
    "id": 45,
    "name": "G7",
    "type": "dominant 7th",
    "root_note": "G",
    "positions": [
      {
        "fret": 3,
        "string": 1,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [
      3,
      4,
      5
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 46,
    "name": "Gm",
    "type": "minor",
    "root_note": "G",
    "positions": [
      {
        "fret": 3,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 5,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 5,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 3,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 47,
    "name": "Gsus4",
    "type": "sus4",
    "root_note": "G",
    "positions": [
      {
        "fret": 3,
        "string": 1,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 4
      }
    ],
    "open_strings": [
      3,
      4,
      5
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  }
];

export const songsData: Song[] = [
  {
    "id": 1,
    "title": "Se mărită Mona mea",
    "slug": "se-marita-mona-mea-1",
    "content": "Intro : B   Em \n\nRefren : \n\n            D   Em \nAoleu!\n                     D \nCe să mă fac, Doamne eu? \n                 C\nSe mărită Mona mea\n                            B7\n Nu știu Doamne ce-i cu ea\n\n\nEm         A \n Aoleu,\n                      D                       G\n ce să mă fac, Doamne eu?\n                    C             Am \n Se mărită Mona mea\n                             B7\n Nu știu Doamne ce-i cu ea\n\n\nBridge : \n\nEm        D            C              B\n Vino la mine ca pasărea în zbor\nEm        D            C              B\n Eu vin la tine, la tine cu dor \n\n\nVers \n\nEm \nAseară pe stradă\nA                     D\n am întâlnit o fată \nG                 C\nAvea părul negru\nAm                B\n și ochii căprui ",
    "author": {
      "id": 1,
      "name": "Azur",
      "slug": "azur"
    },
    "author_id": 1,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      },
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Em",
      "C",
      "B7",
      "A",
      "G",
      "Am",
      "B"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 2,
    "title": "Ce mult te-am iubit Paraschivo (fingerstyle)",
    "slug": "ce-mult-te-am-iubit-paraschivo-fingerstyle-2",
    "content": "Pentru a simplifica tabulatura, notez\nAmbA acord de Am pe care se ciupeste \ncoarda La in bas și AmbE, acord de Am cu \nMi in bas. \n\nCiupitura pe toate acordurile \nse face coarda bas o data, dupa ciupire \nprimele 3 corzi de langa coarda de bas de\n2 ori, cele 3 fiind in masura egala (de \ntriolet).\n\nE destul de usoara, doar trebuie sa va\nobișnuiți cu ritmul.\n\nIntro: AmbA AmbE AmbA AmbE \n\nDupa care se canta pe coarda E: E, F#,G\nsi se continua cu AmbA AmbE\n\n\nStrofa:\n\nAmbA        AmbE         AmbA  AmbE  \nCe mult te-am iubit Paraschivo\nDm x2                  AmbA AmbE\nTi-am zis-o d-o mie da ori\nDm x2\nSi ca drept dovada                  |\nAmbA              AmbE.             |\nTi-am adus gramada                  | bis\nE x2                     AmbA  AmbE |     \nVreo trei basculante da flori.      |\n\nTe-am luat de la ma-ta de acasa\nIn fusta si far' de jupon\nTi-am luat si poseta\nTi-am luat si jacheta\nSi-o geaca mishto da nailon\nTI-am luat si posheta\nTi-am luat si jacheta\nSi-o rochie misto da nailon\n\nTe-am si cultivat Paraschivo\nTe-am dus la chermeza si meci\nTI-am luat si bomboane ba\nTi-am luat si samantza\nTu faci pe nasoala si pleci\nTi-am luat si bomboane\nTi-am luat si samantza\nFa tu faci pe nasoala si pleci\n\nPa frati-tu si pa tot neamu\nSa nu va mai prind ca ma rogi\nV-am scos dintr-o pivnitza\nCand v-a spart geamu\nPa f**-va-n gat da milogi\nV-am scos dintr-o pivnitza\nCand v-a spart geamu\nPai f**-va-n *** da milogi\n\nLa dragostea mea aia mare\nMai spun 2 vorbe sh-atat\nCa cand iese luna eu scot bracinarii\nPa ma spanzur cu ma-ta pa gat\nCa cand iese luna\nImi scot bracinarii\nMa spanzur cu mata da gat\n\nCand tactu bolnav de holera\nIn 3-4 zile a crepat\nSi bani da tamaie si bani de coliva\nTot Mandea saracu tia dat\nSi bani da coliva\nSi bani da tamaie\nTot Mandea saracu ti-a dat!\n\nDar daca te prind Paraschivo\nLa brat cu-un alt gealat\nIti iau si posheta\nIti bat si gagiul\nSi o suta de pumni iei in cap\nIti bat si posheta\nIti iau si gagiul\nSi-o suta da pumni iei in cap!",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "-",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Fingerstyle"
      }
    ],
    "views": 0
  },
  {
    "id": 3,
    "title": "Jeana",
    "slug": "jeana-3",
    "content": "Ultimul vers din fiecare strofa se poate canta liber, sau folosind acordul E (eu prefer fara). Ca bataie, folosesc jos-jos, pauza, jos-jos.\n\nAm\nJeana era croitoreasă\nDm\nJan frizeru' o iubea\nE7\nŞi-a murit tuberculoasă\nE              Am    E  Am \nJan frizerul o jelea.\n\nRefren:\nNu mai plânge Jane\nPlânsul e de formă\nJeana nu e moartă\nJeana să transformă.\n\nŞi când a fost la înmormântare\nPlângea şi ultimu' calic\nŞi când Jănel mai puse o floare\nDoamne plângea şi caii dă la dric.\n\nNu mai plânge Jane\nPlânsul e de formă\nJeana nu e moartă\nJeana se transformă\n\nColo-n deal la croitorie\nStătea cearceafuri la uscat\nCurgea bacilii de fizie\nCurgea încet treptat treptat\n\nNu mai plânge Jane\nPlânsul e de formă\nJeana nu e moartă\nJeana se transformă\n\nStă paduchii întinţi la soare\nStă paduchii câte doi\nPăi cum stăteau odinioară\nJan şi Jeana amandoi.\n\nNu mai plânge Jane\nPlânsul e de formă\nJeana nu e moartă\nJeana se transformă.",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 5,
    "title": "Sobita din odaie",
    "slug": "sobita-din-odaie-5",
    "content": "D\n1. Ma puse dracu sa ma-nsor\nA             D\nCe mare dandanaie\nD\nSa-mi iau nevasta cu avere\nA         D\nO soba de odaie.\n\n  Ref:\nG             D\nDur-dur-duru da-i cu cu*u\nA            D\nS-asa mica cum e ea\nG             D\nDur-dur-duru da-i cu cu*u\nA            D\nE sobita mea...\n\n2. In prima noapte ea n-a vrut\nA zis ca-i fac durere\nCa-i stric sobita ce i-a dat-o\nMa-sa ca avere...\n\n3. A doua noapte tot la fel\nN-a scos macar o vorba\nDar eram tanar s-as fi vrut\nSa bag un lemn in soba\n\n4. A treia noapte-am incercat\nSobita era sparta\nCu multe luni-naitea mea\nBagase altu-o cioata\n\n5. Acum sobita s-a largit \nIncap lemne mai multe\nNoroc ca am prieteni buni \nSa vina sa m-ajute\n\n6. Vecinii mei sunt oameni buni\nNu scot nici ei o vorba\nMai vin si ei din cand in cand\nSa bage-un lemn in soba...\n\n\nVarianta studenteasca...de munte...de chef..de betie :))\n...simplu cu bass si bataie-n jos..",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      },
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "G",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 7,
    "title": "Ma iubeste femeile",
    "slug": "ma-iubeste-femeile-7",
    "content": "Am\nMa iubeste femeile\nDm          Am      \nSi e moarte dupa mine\nDm             Am       \nToata ziua imi sade pe cap\nE                       Am \nNu stiu ce sa fac ca sa scap\n\nAm                   Dm\nDom'ne toate ma cere,toate ma vrea\nE                Am      \nZice ca le place destinctia mea\nAm                  Dm    \nEu nu stiu ce-i aia dar daca or vrea\nE                       Am\nLe-o dau pe toata ce sa fac eu cu ea\n\nMa iubeste femeile\nSi e moarte dupe mine,\nToata ziua imi sade pe cap,\nNu stiu ce sa fac\nCa sa scap\n\nE cate unii dom'ne,n-are noroc,\nNu place dom'ne la dame deloc,\nDegeaba umbla dupa fomei,\nCa nu se uita nici dracu' la ei.\n\nMa iubeste femeile\nSi e moarte dupe mine,\nToata ziua imi sade pe cap,\nNu stiu ce sa fac\nCa sa scap\n\nCand ies afara ma-mbrac frumos,\nImi pun un trening si pantofi cu toc,\nToate femeile se uita la mine,\nNu stiu da ce, da' cred ca-i da bine.\n\nMa iubeste femeile\nSi e moarte dupe mine,\nToata ziua imi sade pe cap,\nNu stiu ce sa fac\nCa sa scap\n\nDa'-mi iau nevasta, sa fie-a mea,\nNu ca tramvaiul, s-o ia cine vrea,\nCa este unii dom'ne, care netoti\nIsi ia nevasta biblioteca pentru toti.\n\nMa iubeste femeile\nSi e moarte dupe mine,\nToata ziua imi sade pe cap,\nNu stiu ce sa fac\nCa sa scap\n\nMa iubeste femeile\nSi e moarte dupe mine,\nToata ziua imi sade pe cap,\nNu stiu ce sa fac\nCa sa scap",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      },
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 8,
    "title": "La cap de pod",
    "slug": "la-cap-de-pod-8",
    "content": "C\nCand ti-o fi lumea mai draga\n  Am\n5 bani 10 bani ajutor pt golani\nSa-ti cada dreapta beteaga\n5 centi 10 centi ajutor pt studenti\nSi-am ajuns la cap de pod\nCersetor sunt si olog\n\n                C                   Am\nR: La cap de pooood...la cap de poood...\n                C                        Am\n   La cap de pooood... sa ti-o dau la boooot...\n   Si ce-ai sa faci...\n   Exercitii umeri craci..\n\nCand erai la ma-ta fata\n5 bani 10 bani ajutor pt golani\nTe pisai cat o galeata \n5 centi 10 centi ajutor pt studenti\nIar acum la maritiiis\nNiagara cand te piiiiisi\n\nR:\n\nAi jurat ca esti virgina\n5 bani 10 bani ajutor pt golani\nIar eu fac penicilina \n5 centi 10 centi ajutor pt studenti\nM-ai facut din om neoooom\nCand ma pis ma tin de poooom\n\nR:\n\nErai mica n-ai stiut\n5 bani 10 bani ajutor pt golani\nSi-ai picat la asternut\n5 centi 10 centi ajutor pt studenti\nAcum esti mare si proasta \nAi picat in posta noastra\n\nR:",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 10,
    "title": "Femei, femei...",
    "slug": "femei-femei-10",
    "content": "Intro:\nDm Am E Am\n\nI:\n\t\tDm\nNu e nimeni pe strada\n\t\tAm\nOchii tristi sa mi-i vada...\n\t\tE\nA, nu-i nimeni pe strada\n\t\tAm\nSa ma vada cum plang.\n\nDoar un gabor de seara,\nCe-a venit ca sa-mi ceara\nSa-si aprind-o tigara\nM-a vazut lacrimand...\n\nRefren:\nFemei, femei, (asa...)\nE plina lumea de nebune, (da' cum...)\nCine v-a adus pe lume, (cine?)\nCine oare v-a facut? (cine oare, ce oare?)\nFemei, femei, \nE plina lumea de nebune, (buneee)\nCine v-a adus pe lume, \nCine oare v-a facut? (eu nu)\n\nII:\n\nSi-acel gabor de seara, (a gabor)\nCe-a venit ca sa-mi ceara, (aaa)\nA zis razand catre mine (a, deci gaboru' a zis razand)\n\"Wai, decat sa-ti fie rau mai bine sa-ti fie bine!\" (al dracu' bai)\n\nRefren:\n\nFemei, femei, (ia zi ba ce)\nE plina lumea de nebune, (ei nu mai spune, frate)\nCine v-a adus pe lume, (hai, ba, fii serios acuma)\nCine oare v-a facut? (aha, aha! aha...)\nBarbati, barbati, (aicea, hahahaha)\nE plina lumea de c*cati, (aoleu)\nDe suparati si de-ncordati, (ia vezi, alo...)\nNu stiti decat sa va-mbatati! (ia stai sa te prind o data beat sa vezi tu care-i treaba...)\n\nDeci autoru' a vrut sa spuna in urmatoarele versuri\nCa se plimba singur pe strada si a nimerit de un gabor care a cerut o tigara\nCare tigara cand i-a dat-o el a zis ba femeile el era inlacrimat\nDe fapt tigara plangea cu niste lacrimi cat crocodilu'\nMargineanu era politist si politistu' era\nBai femei femei la care politistu' zice \"C*cat!\" nu...\nPolitistii zice... zice lu' Margineanu\nBa, Margineanu, femeile sunt niste ratati!\nMargineanu, baaa analflabetilor!\nSi dupa aia ii zice stati sa spun eu ca de fapt C*cati, c*cati, Cine? Ratati,\nVoi, cine? Noi? si ei a inteles si ei plangea.\nMargineanu plangea la final si era o nebuna care tipa pe fundal.\n\nAha, ia...\n\nRefren:\n\nBarbati, barbati, \nE plina lumea de c*cati,\nDe suparati si de-ncordati,\nNu stiti decat sa va-mbatati!",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "Am",
      "E",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 11,
    "title": "Eu te-am iubit Paraschivo",
    "slug": "eu-te-am-iubit-paraschivo-11",
    "content": "personal folosesc o trecere intre acorduri, ca mai jos:\n\n   Dm         C           Bm          C          Dm         \ne -1----------0-----------2-----------0----------1-----------\nB -3----------1-----------3-----------1----------3-----------\nG -2----------0-----------4-----------0----------2-----------\nD -0----------2-----------4-----------2----------0-----------\nA -----3--2---3---2---0---2---0---2---3--------------3---2---\nE -----------------------------------------------------------\n\n C          E           Am\n0----------0-----------0----------------\n1----------0-----------1----------------\n0----------1-----------2----------------\n2----------2-----------2----------------\n3---2---0--2-----------0----------------\n-----------0---2---4--------------------\n\nascultati melodia si va dati seama repede\nimi cer scuze pentru ortografie, nu sunt foarte la curent cu noile reguli.\n\n\tAm                  E\n\tCe mult te am iubit Paraschivo\n\n\tDm                      Am\n\tTi am zis-o de-o mie de ori\n\n\tDm                       C\n\tSi ca drept dovada ti-am adus gramada\n\n        Bm                      C\n\tVreo trei basculante de flori\n\n\tDm                       C\n\tSi ca drept dovada ti-am adus gramada\n\n        E                       Am      E Am\n\tVreo trei basculante de flori\n\n\n\n\n\tTe-am luat de la mata d'acasa\n\tIn fusta si far' de jupon\n\tTi-am luat si poseta, ti-am luat si jacheta\n\tSi-o geaca misto de nylon\n\tTi-am luat si poseta, ti-am luat si jacheta\n\tSi-o rochie misto de nylon\n\n\tTe-am si cultivat Paraschivo\n\tTe-am dus la chermeza si meci\n\tTi-am luat si bomboane, ti-am luat si samanta fa,\n\tTu faci pe nasoala si pleci\n\tTi-am luat si bomboane, ti-am luat si samanta fa,\n\tTu faci pe nasoala si pleci\n\t\n\tPe frati-tu si pe tot neamu'\n\tSa nu va mai prind ca ma rogi\n\tV-am scos dintr-o pivnita cand v-a spart geamu'\n\tPai f____a-n gat de milogi\n\tV-am scos dintr-o pivnita cand v-a spart geamu'\n\tPai f____a-n c_r de milogi\n\n\tLa dragostea mea aia mare\n\tMai spun doua vorbe si-atat\n\tCand iese luna imi scot bracinarii fa\n\tMa spanzur cu ma-ta de gat,\n\tCa cand iese luna imi scot bracinarii\n\tMa spanzur cu ma-ta de gat,\n\n\tCand tac-tu bolnav de holera\n\tIn trei patru zile-a crapat\n\tSi bani de tamaie si bani de coliva\n\tTot mandea saracu ti-a dat\n\tSi bani de coliva si bani de tamaie\n\tTot mandea saracu ti-a dat\n\n\tDar daca te prind Paraschivo\n\tLa brat cu alt gealat\n\tIti iau si poseta iti bat si gagiul\n\tSi o suta de pumni iei in cap\n\tIti bat si poseta iti iau si gagiul\n\tSi-o suta de pumni iei in cap",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      },
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "C",
      "Bm",
      "E",
      "Am",
      "B",
      "G",
      "D",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 12,
    "title": "Apa de izvor",
    "slug": "apa-de-izvor-12",
    "content": "G            C              D\n1.Marine, Marine, m-as f*te cu tine\n  Hai siktir marine, c-am glumit cu tine\n\n         G                Em\n     R:  Ah, ah, apa de izvor,\n         C               D\n         Mai repede ca mor, mai repede, ca nu mai pot\n\n2.Pentr-o sticla de Martini\n  M-ai lasat sa-ti vad bikinii\n  Pentru sticla de Vermut\n  M-ai lasat ca sa te f*t\n\n3.Maria, fetita mea\n  Nu mai da din c*r asa\n  Nebunatica cum esti\n  S-ar putea sa mi-o belesti\n\n4.Doua babe cracanate\n  Faceau scoala de karate\n  Ca sa-nvete o figura\n  Cum sa stea in cap de p**a\n\n5.-Ce faci mosule-n tarina?\n  -Ma caznesc sa f*t o rima\n  Si de mult ce m-am caznit\n  Pi**a rimii n-am gasit\n\n6.Iese popa din Altar\n  Cu p**a facuta par\n  Preoteasa cum il vede\n  Drept la p**a se repede\n\n7.-Ia fa mina de pe p**a\n  Ca-ti dau una peste gura\n  -Poti sa-mi dai si peste nas\n   Eu de p**a nu ma las\n\n8.Fata popii cea mai mica\n  Si-a bagat in c*r supica\n  Si-acum baga degetelul\n  Ca sa scoata castronelul",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "Em"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 14,
    "title": "Inima de tiganca",
    "slug": "inima-de-tiganca-14",
    "content": "A        E    A\nInima de tiganca,\nA        E    A\nInima de tiganca\nA               D\nTe cheama si te vrea\n          A\nSa fim alaturea\nA        E    A\nInima de tiganca:|\n\nA              E  A\nSi mama a fost neagra\nA                 E  A\nSi tatii i-a fost draga\nA                 D\nSi findca s-au placut\n               A\nPe mine m-au facut\nA                   E  A\nSi spun ca lor li-s draga\n\nA               E  A\nMai sunt fete negrute\nA                 E A\nMai mari si mai micute\nA                   D\nDar toate stiu c-ar vrea\n              A\nSa aibe inima mea\nA        E    A\nInima de tiganca\n\nA                 E A\nCând înfloresc castanii\nA               E A\nSe-aduna toti tiganii\nA               D\nSi fac afara un foc\n                A\nSi se încing la joc\nA        E    A\nInima de tiganca\n\nA           E  A\nDuminica la nunta\nA               E  A\nCu toti tiganii cânta\nA            D\nCânta se veselesc\n               A\nFindca ei se iubesc\nA        E    A\nInima de tiganca",
    "author": {
      "id": 4,
      "name": "Aurel Moldoveanu",
      "slug": "aurel-moldoveanu"
    },
    "author_id": 4,
    "categories": [
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "A",
      "E",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 15,
    "title": "Tigancusa",
    "slug": "tigancusa-15",
    "content": "Am         E\nLa o margine de sat\n             Am\nEste-o şatră de ţigani\nDm            Am\nȘi-o ţigancă frumuşică\nE                 Am\nMi-a ghicit pe sub castani\nDm             Am\nȘi-o ţigancă frumuşică\nE               Am E Am\nMi-a ghicit pe sub castani\n\n\tRefren (x2):\n\n\tDm\n\tȚigăncuşă eşti frumoasă,\n\tAm\n\tȚigăncuşa mea\n\tE            Am\n\tTe iubesc şi nu te pot iuta\n\tȚigăncuşă eşti frumoasă, \n\tȚigăncuşa mea\n\tTe iubesc şi nu te pot iuta\n\tLa-rai-ra...\n\nȚigăncuşă eşti frumoasă\nȘi ştii bine să ghiceşti\nȘi cu ochii tăi cei negri\nPe oricine cucereşti\nȘi cu ochii tăi cei negri\nPe oricine cucereşti\n\n\tRefren.\n\nTrece vara, vine iarna\nPleacă şatra de ţigani\nȘi cu ea pleacă ţiganca\nCe-am iubit-o sub castani\nȘi cu ea pleacă ţiganca\nCe-am iubit-o sub castani\n\n\tRefren.",
    "author": {
      "id": 4,
      "name": "Aurel Moldoveanu",
      "slug": "aurel-moldoveanu"
    },
    "author_id": 4,
    "categories": [
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 16,
    "title": "Trec tiganii",
    "slug": "trec-tiganii-16",
    "content": "Intro:\n\nA7 Dm\nG C\nAm Dm\nE Am\n\n Am                         E\nÎn căruţe colorate trec ţiganii\nE7                          Am\nO ţigancă-n părul ei şi-adună banii\n Dm                        Am\nAlta şade într-un colţ, dă cu ghiocul \n E                              Am\nSă-i ghicească unei fete mari norocul\nDm                              Am\nUn ţigan cântă cu foc dintr-o vioară\nE                            Am\nDe cu zori şi pân-se lasă seara.\n\nAm               E\nTrec ţiganii, trec,\nE7   \t\t  Am\nSe duc şi petrec     \n A7                        Dm\nTrec ţiganii, nu se mai opresc\nE             Am\nDar ei se iubesc.\n\nA7            Dm\nSe-aude o vioara\nG           C\nSe-aude un ţambal\nAm               Dm\nSe-aude  vocea caldă \nE        Am\nA unui lăutar\nA7         Dm\nSe-aude o vioara \nG           C\nSe-aude un arcuş\nAm              Dm\nSe-aude glasul dulce \nE         Am\nAl unui ţigănuş\n\nLa o margine de drum au aprins focul\nşi în jurul focului au încins jocul\nNoaptea e cu lună plină fermecată\nSeara cu ţiganii n-o uiţi niciodată\nCaii pasc la iarbă verde liniştiţi,\nIar ţiganii cânta şi sunt fericiţi.",
    "author": {
      "id": 5,
      "name": "Șatra",
      "slug": "satra"
    },
    "author_id": 5,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "A7",
      "Dm",
      "G",
      "C",
      "Am",
      "E",
      "E7",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 17,
    "title": "Satra",
    "slug": "satra-17",
    "content": "Am                G        C\nN-am nici rochii, nici pantofi\nF                   C     A7\nNici castel cu slujitori\nDm               Am\nÎn căruţă m-am născut\nE            Am E Am\nDin căruţă ştiu să cânt.\n\nLai ra rai ra… (pe aceleaşi acorduri ca şi strofa)\n\n(2 ori)\n\nÞiganco cu bani în păr\nşi cu sânii ca de măr\nHai cu mine-n lumea mare\nSă vezi cum e cu parale\n\nLai ra rai ra…\n\n(2 ori)\n\nMăi străine, măi străine\nStai în lumea ta cu bine\nEu nu-mi las ţiganii mei \nPoţi să-mi dai tu mii de lei.",
    "author": {
      "id": 5,
      "name": "Șatra",
      "slug": "satra"
    },
    "author_id": 5,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "G",
      "C",
      "F",
      "A7",
      "Dm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 18,
    "title": "Apus de soare roșu poleit",
    "slug": "asfintit-18",
    "content": "Am             \nApus de soare roşu poleit\nSe vad trecand zeci de coviltire\nSunt ţiganii, spoitorii de tingire\n Am              \nHoţi de cai şi de parale\nCe străbat lumea cea mare\n Dm                                    Am\nCantul veseeeel, pai cantul veseeeel, de chitare\n  Am\nDai mujarii, dai mujarii, dai mujarii jakeresco\n E \nCarturarii mai\n Dm \nCat e lumea de parie\n Am \nJakeresco tiganie\nE                    Am \nSai la la lai la la la lai\n\tDm    Am     E   Am\n\tR: La-la..La-la..La-la..La-la..\nCand in crâşmă ei intrau\nCu vin roşu se cinsteau\nBanii toţi şi-i cheltuiau\nşi din gură aşa cântau\n\nVinul mintea lor o seacă\nSisurile ies din teacă\nSângele curgea şiroi\nCa şi vinul din butoi\n",
    "author": {
      "id": 5,
      "name": "Șatra",
      "slug": "satra"
    },
    "author_id": 5,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E7",
      "C",
      "G7",
      "F",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 19,
    "title": "La multi ani!",
    "slug": "la-multi-ani-19",
    "content": "G\nMulti ani traiasca!\nG\nMulti ani traiasca!\n D   C   G\nLa multi ani!\n\nG\nCine sa traiasca?\nG\nCine sa traiasca?\n D  C    G\nLa multi ani!\n\n   G \n[prenumele] sa traiasca!\n   G\n[prenumele] sa traiasca!\n D  C    G\nLa multi ani!\n\nG                     C\nLa multi ani cu sanatate\nC            D            G\nSa va dea Domnul tot ce doriti\n    G          C\nZile senine si fericire\n C       D   D    G\nLa multi ani sa traiti!\n  C               G\nMulti ani La multi ani            X2\nD          D                 G              G\nLa multi ani fericiti sa traiti !La multi ani!",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 20,
    "title": "Asta seara nimeni sa nu doarma",
    "slug": "asta-seara-nimeni-sa-nu-doarma-20",
    "content": "intro C - Dm - G - C - Am - Dm - G - C \n\n\nC                        Dm\nAsta seara nimeni sa nu doarma\nG                         C\nPa-n la ziua toti sa ne distram,\nAm                    Dm\nOspatarii in pahar sa toarne\nG                 C\nSi cu lautarii sa cantam,\nC                              Dm\nAsta seara-n dans ne strange-n brate\nG                   C\nO fata frumoasa nui pacat ,\nAm                     Dm\nSeara asta le rugam pe soate\nG                   D\nSa se faca ca n-au observat.\n\nC                    Dm\nTine-o pe DO, tine-o pe Si, \nG                     C\nTine-o pe la mandruta mea\nAm                      Dm\nTine-o pe MI, tine-o pe RE,\nG             C\nTine-o intr-o petrecere\n\nAsta seara nimeni sa nu doarma,\nCa tot oi dormi cand noi mai fi\nNevestico un pahar mai toarna,\nBea cu mine nu am cicali\nAzi cu alutari dupa mine,\nOi porni hai-hui prin Bucuresti\nMoi opri unde mi-o fi mai bine,\nC-asta seara-i bine sa traiesti\n\nTine-o pe DO, tine-o pe Si, \nTine-o pe la mandruta mea\nTine-o pe MI, tine-o pe RE,\nTine-o intr-o petrecere\n\nSa-mi cante si mie lautarul,\nCa eu ani in sir va-m tot cantat\nSa-l ascult si sa-mi golesc paharul,\nInca-un DO Major si am plecat\nNui nici un pacat de seara aceasta,\nMa mai ametesc eu cu-n cotnar\nJur de maine spun la sprituri basta,\nN-am sa mai beau decat murfatlar\n\nTine-o pe DO, tine-o pe Si, \nTine-o pe la mandruta mea\nTine-o pe MI, tine-o pe RE,\nTine-o ïntr-o mere, mereu asa",
    "author": {
      "id": 6,
      "name": "Gică Petrescu",
      "slug": "gica-petrescu"
    },
    "author_id": 6,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "Dm",
      "G",
      "Am",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 21,
    "title": "Mai intoarce, Doamne roata",
    "slug": "mai-intoarce-doamne-roata-21",
    "content": "Am                                             Dm\nMai intoarce doamne roata Sa-mi mai vad o data soarta\nAm                        Dm                          |\nSa-mi vad anii tineretii Sa-mi vad stralucirea vietii |\nE                     Am                              | x2\nCare doamne fara rost s-au dus                        |\n\nAm                                            Dm   \nCind aveam vreo 16 ani Doamne ah ce viata mai duceam\nAm                       Dm                           |\nPrin restaurante baruri, cafenele si localuri         |\nE                  Am                                 | x2\nDoamne ah ce viata mai duceam                         |\n\nCind aveam vre-o 20 de ani Doamne ah ce viata mai duceam\nMa dusei la primarie sa declar casatorie\nDoamne ah ce viata mai duceam\n\nCind aveam vre-o 30 de ani Doamne ah ce viata mai duceam\nO duceam bine cu casa Ma-ntelegeam cu nevasta\nSi aveam si doi copii frumosi\n\nCind aveam vre-o 40 de ani Doamne ah ce viata mai duceam\nCopii-mi crescura mari Falnici ca si doi stejari\nDoamne ah ce viata mai duceam\n\nCand am implinit 50 de ani Doamne ah ce viata mai duceam\nS-a dus jumatatea vietii, S-au dus anii tineretii \nDoamne ah ce viata mai duceam\n\nCind aveam vre-o 55 de ani Doamne ah ce viata mai duceam\nZi si noapte nu dormeam pe copii ii ajutam\nDoamne ah ce viata mai duceam\n\nCind aveam vre-o 60 de ani Ma plimbam prin parcul cu castani\nVedeam frunzele picand anii vietii numarind\nDoamne ah ce viata am mai dus",
    "author": {
      "id": 1,
      "name": "Azur",
      "slug": "azur"
    },
    "author_id": 1,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 8,
        "name": "Romanțe",
        "slug": "romante",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 22,
    "title": "Cavaleri ai Mesei Rotunde",
    "slug": "cavaleri-ai-mesei-rotunde-22",
    "content": "D\nCavaleri ai Mesei Rotunde\n     A              D\nSa vedem daca vinu-i bun.  – bis\n\nRef:\nD    G                     D\nSa vedem, da, da. da, sa vedem, nu, nu, nu,\n      A              D   A   D\nSa vedem daca vinu-i bun sau nu . – bis\n\nEu as bea cinci sau sase sticle\nC-o studenta pe genunchii mei . – bis\n\nRef:\nEu as bea, da, da, da, eu as bea, nu, nu, nu,\nEu as bea cinci sau sase sticle.\n\nCioc, cioc, cioc, bate la fereastra,\nSa vedem daca-i sotul meu. – bis\n\nRef:\nSa vedem, da, da, da, sa vedem, nu, nu, nu,\nSa vedem daca-i sotul meu sau nu. – bis\n\nDaca-i el, duca-se la dracu’\nC-a stricat placerea mea si-a ta. – bis\n\nRef:\nDaca-i el, da, da, da, daca-i el, nu, nu, nu,\nDaca-i el, duca-se la dracu’. – bis\n\nDaca mor vreau sa ma ingroape\nIntr-o crasma undevinu-i bun. – bis\n\nRef:\nIntr-o crasma, da, da, da,  intr-o crasma, nu, nu, nu,\nIntr-o crasma unde vinu-i bun sau nu. – bis\n\nIar la cap vreau sa mi se scrie:\nAici zace un student betiv! – bis\n\nRef:\nAici zace, da, da, da, aici zace, nu, nu, nu,\nAici zace un student betiv sau nu. - bis",
    "author": {
      "id": 7,
      "name": "Necunoscut",
      "slug": "necunoscut"
    },
    "author_id": 7,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 9,
        "name": "Școala și profesorii",
        "slug": "scoala-si-profesorii",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 23,
    "title": "Marie si Marioara",
    "slug": "marie-si-marioara-23",
    "content": "D               Ddim   Am  Cdim Em\nSi-am zis verde salcioara(aaaaaaaaa...)\n         A      D\nMarie si Marioara\nD        Ddim  Am  Cdim  Em\nMarie si Marioara(aaaaaaaaaa....)\n             A       D\nIa un par de ma omoara\n\nA        D A      D\nParul sa fie de plop\nB7       Em Bdim F#7          Bm\nSa nu ma oooooooomori de tot (mai)\nA     D  A      D\nMarie si Marioara\nB7        Em  Bdim  F#7    Bm\nIa un par deeeeeeee ma omoara\n\nCa de trei zile zac in boala\nsi nu-mi zice nimeni \"scoala\"\nDe trei zile zac in boala\nsi nu-mi zice nimeni \"scoala\"\n\nDar de-i zice dumneata\nM-ar mai trage inima\nDar de-i zice dumneata\nM-ar mai trage inima (mai)\n\nSi-am zis verde salcioara\nMarie si Marioara\nIa un par de ma omoara\nIa un par de ma omoara\n\nParul sa fie de plop\nSa nu ma omori de tot (mai)\nMarie si Marïoara\nIa un par de ma omoara",
    "author": {
      "id": 8,
      "name": "Folclor",
      "slug": "folclor"
    },
    "author_id": 8,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Ddim",
      "Am",
      "Cdim",
      "Em",
      "A",
      "B7",
      "Bdim",
      "F#7",
      "Bm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 24,
    "title": "Costică, Costică",
    "slug": "costica-costica-24",
    "content": "Refren:\n\n\tG\n\tCostică, Costică\n\t\n\tFă lampa mai mică\n\t\n\tCostică, Costică\n\tAm    B7       Em     D\n\tAmândoi când stăm\n\n\tCostică, Costică\n\tFă lampa mai mică\n\tCostică, Costică\n\tCând ne sărutăm\n\nG\nRea e lumea-n mahala\nD7           G\nCostică, Costică\n              Am\nSă nu ştie nimenea\nB7            Em\nFă lampa mai mică\n\nDe vecini să ne ferim\nCostică, Costică\nSă putem să ne iubim\nCostică, Costică\n\n\tRefren.\n\nMii de stele-am împletit\nAlbei nopţi cununa\nşi-n fereastră s-a ivit \nSă ne vadă luna\nStau femei în mahala\nLângă porticică\nSă nu vadă că glumim\nFă lampa mai mică\n\n\tRefren.\n\n\tEm\n\tIa papucii, dă papucii\n\tIa papucii, dă papucii...",
    "author": {
      "id": 6,
      "name": "Gică Petrescu",
      "slug": "gica-petrescu"
    },
    "author_id": 6,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Am",
      "B7",
      "Em",
      "D",
      "D7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 25,
    "title": "Lunile anului",
    "slug": "lunile-anului-25",
    "content": "G                  C           D        D7       G\nCine-i nascut în ianuarie, hai sus, hai sus, hai sus.\nG                  C           D        D7       G\nCine-i nascut în ianuarie, hai sus, hai sus, hai sus.\n\nRefren:\nG        D     C       D7\nSa bea paharul pâna la fund,\nEm       D     C       D7\nSa bea paharul pâna la fund,\n     C         D         G\nStai jos, stai jos, stai jos,\n    C    D      G\nIti multumim frumos.\n\nG                  C            D        D7       G\nCine-i nascut în februarie, hai sus, hai sus, hai sus.\nG                  C            D        D7       G\nCine-i nascut în februarie, hai sus, hai sus, hai sus.\n\n...si tot asa,la rand, toate lunile anului...\n\nG                 C          D        D7       G\nCine-i nascut din flori, hai sus, hai sus, hai sus.\nG                 C          D        D7       G\nCine-i nascut din flori, hai sus, hai sus, hai sus.\n\nG                 C            D        D7       G\nCine s-a renascut vreodat, hai sus, hai sus, hai sus.\nG                 C            D        D7       G\nCine s-a renascut vreodat, hai sus, hai sus, hai sus.\n\nG                     C        D        D7       G\nSi cine-o sa se nasca iar, hai sus, hai sus, hai sus.\nG                     C        D        D7       G\nSi cine-o sa se nasca iar, hai sus, hai sus, hai sus.",
    "author": {
      "id": 9,
      "name": "Atlantic",
      "slug": "atlantic"
    },
    "author_id": 9,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "D7",
      "Em"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 26,
    "title": "Tu Ardeal",
    "slug": "tu-ardeal-26",
    "content": "Refren:\nDm                      Gm    C     F  \nTu Ardeal, tu Ardeal, iti suntem osteni, \n Dm                          Gm    C  Dm \nTemplu sfant, templu sfant, muntii Apuseni.\n\n\nDm              Gm    C             Dm\nCa tu ne esti vatra si din piatra-n piatra, \n         Gm     C     F \nE taria unui neam de moti, \nDm              Gm    C              Dm \nAsta-i tara noastra, noi nu stam in gazda, \n                Gm   C     Dm\nHorea nostru-i risipit pe roti.\n\nRefren\n\nNe-au furat barbarii, ne-au caznit mai marii, \nDar avem in piepturi sapte vieti.\nNe vibreaza-n sange, pan' la Putna n-a plÃ¢nge, \nClopotul ce bate la Ramet.\n\nRefren\n\nNu vrem razbunare, dar atat ne doare, \nCa se pierde amintirea-n val.\nDoamne da-i tarie, unei maini sa scrie, \nBiblia latinului Ardeal.\n\nRefren\n\nRauri cresc purtate, tari ce nu sunt toate\nDar veni-vor si mai bune vesti\nPentru toti romanii care-si sint stapanii\nSoarele rasare-n Bucuresti\n\nRefren\n\nUnde-i Avram Iancu, sa mai franga rangul, \nCelor ce Ardealul vor pustiu.\nIata ca rasare, Iancu din oricare, \nE-n puterea fiecarui fiu.\n\nRefren\n\nPentru aceasta tara, poate sa si moara, \nFiecare dintre noi razand.\nRestul e dorinta, de ingaduinta, \nSi sa fie pace pe pamÃ¢nt.\n\nRefren\n\nNu uitati aceasta, dreapta ne e brazda, \nCe-am lucrat cu ale noastre maini.\nFiecare munte stie aici sa cante, \nImnul \"Desteptati-va romani\".",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 11,
        "name": "Despre Patrie",
        "slug": "despre-patrie",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "Gm",
      "C",
      "F",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 27,
    "title": "Nebun de alb",
    "slug": "nebun-de-alb-27",
    "content": "Acorduri: \n\nAm: 002210\nF: 133211\nBm7-5: 023230\nE: 022100\nC: 032013 \nE7: 002434\nDm: 000231\nG: 320033\nC: 332010\n\n---------------------------------------------------------\n\nIntro: Am , F , Bm7-5, E , Am (Am x 2, dupa care urmeaza \nstrofa)\n\nUrmat de:\n\nAm                        F  \nAcum sunt mai pustiu ca-ntotdeauna \nC                        E7 \nDe cand ma simt tot mai bogat de tine \nAm                        F\nImi stau pe tample soarele si luna \nDm              E             Am\nAcum e cel mai rau si cel mai bine \n\nAm                        F\nSi uite n-are cine sa ne-ajute \nC                         E7\nAbia-si mai tine lumea ale sale \nAm                            F\nSi-ntr-un perete alb de muze mute \nDm            E       Am \nNebunii negri cauta o cale \n\nRefren x 2:\n\nDm             G           C  \nSi te iubesc cu mila si cu groaza\n Dm                         E7\nTot ce-i al tau mi se cuvine mie \n F              E           Am\nCa un nebun de alb ce captureaza \n F             E           Am\nRegina neagra pentru o vesnicie \n\nAici se repeta intro-ul:\nAm F Bm7-5 E Am\n\n(ca mai sus)\nPrin gari descreierate accidente \nMarfare triste vin in miezul verii \nIar eu sunt plin de gesturi imprudente \nCa sa te apropii si sa te sperii \n\nJur imprejur privelisti aberante \nCopii fragili ducand parintii-n spate \nPatrund cu sanii gri de os pe pante \nSi albastrosi venind spre zari uscate\n\n---------------------------------------------------------\n\nSucces! Ptr. mai multe informatii imi puteti lasa un mesaj si o sa va raspund cu placere \n:)",
    "author": {
      "id": 11,
      "name": "Emeric Imre",
      "slug": "emeric-imre"
    },
    "author_id": 11,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "F",
      "C",
      "E7",
      "Dm",
      "E",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 30,
    "title": "Ostasii luminii colinda",
    "slug": "ostasii-luminii-colinda-30",
    "content": "C#m             E      B    G#    C#m\nLarg deschideti poarta sufletelor noastre\nE      B      E      B       G#     C#m\nN-am venit sa cerem, ci-am venit sa dam.   - bis\n\nRefren:\nE            B     E      B   C#m\nDalbe si iar dalbe flori adevarate\nE            C#m  B           C#m\nCa si vestea buna ce v-o colindam.\nE            B     E      B   C#m\nDalbe si iar dalbe flori adevarate\nE            C#m   B          C#m\nDalbe si iar dalbe florile de mar.\n\n\nDincolo de muntii vietii si-ai himerii\nLe-am cules azi noapte florile de mar.\nLe-am cules din muntii unde vesnic merii\nRoditori de aur cresc intr-adevar.\n\nFlorile pe care le-am cules azi noapte\nVor rodi in brazda sufletelor toate.\nMerele de aur, merele visate\nDe colindatorii veacurïlor toate.",
    "author": {
      "id": 14,
      "name": "2 și jumătate",
      "slug": "2-si-jumatate"
    },
    "author_id": 14,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C#m",
      "E",
      "B",
      "G",
      "G#"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 31,
    "title": "Totusi, iubirea",
    "slug": "totusi-iubirea-31",
    "content": "Am                   Dm\nSi totusi e stare de veghe\n   C        E       Am\nSi totusi murim repetat\nAm                      Dm\nSi totusi mai cred în pereche\n   C        E         Am\nSi totusi ceva sa-ntâmplat.\n\nPretentii nici n-am de la lume\nUn pat, întuneric si tu\nIntrăm în amor fără nume\nFiorul ca fulger căzu. \n\nRefren:\n\n    Am                 Dm\nSi totusi există iubire\n   E                 Am\nSi totusi există blestem\nAm                      Dm\nDau lumii, dau lumii de stire\n  E                 Am\nIubesc, am curaj si mă tem.\n\nMotoarele lumii sunt stinse\nRetele pe căi au căzut\nUn mare pustiu pe cuprins e\nTrezeste-le tu c-un sărut.\n\nAcum te declar Dumnezee\nEu însumi mă simt Dumnezeu\nContinuă lumea femeie\nCu plozi scrisi în numele meu.\n\nRef:\n\nAfară roiesc întunerici\nAici suntem noi luminosi\nSe ceartă-ntre ele biserici\nFăcându-si acelasi repros.\n\nSi tu si iubirea există\nSi moartea există în ea\nImi place mai mult când esti tristă\nTristetea, de fapt, e a ta.\n\nRef:\n\nGenunchii mi-i plec pe podele\nCu capul mă sprijin de cer,\nTu esti în puterile mele,\nDesi închizitii te cer.\n\nCe spun se aude aiurea,\nMă-ntorc la silaba dintâi,\nPrăval peste tine pădurea:\nAdio, adica ramai.\nRef:",
    "author": {
      "id": 15,
      "name": "Mayai Gyozo",
      "slug": "mayai-gyozo"
    },
    "author_id": 15,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "C",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 32,
    "title": "Amor cubist",
    "slug": "amor-cubist-32",
    "content": " Dm               A7                  Dm\n Sa mergem într-o seara departe-n mahalale\n                  A7             Dm\n Si noaptea sa ne lege cu negurile ei\n       F          C                    Dm\n Sa-ti dau îmbratisarea mai vrei sau nu mai vrei\n                 A7                 Dm\n Si eu sa cad în focul îmbratisarii tale.\n\nRrfren:\nDm            A7               Dm\nLa margini te chem sa fugim undeva\n               A7        Dm\nCa si sufletul meu e o mahala.\n    F          C               Dm\nLa margini te chem sa fugim undeva\n               A7        Dm\nCa si sufletul meu e o mahala.\n\n\nAi vrea sa fie iarna, ai vrea sa fie toamna\nAi vrea ca liliacul sa înfloreasca brusc\nSa-ti fiu arheologul tu vasul meu de trusc\nAi vrea sa fie-o vreme ce nu stii ce înseamna.\n\nRrfren...\n\nDar hai în mahalale tinându-ne de mâna\nPe strazi cu becuri stranii de-un galben violet\nCând picura cismele pe lânga un bufet\nCu firma posomorâta si preturi la-ndemâna.\n\nRrfren...\n\nParalelipipedic traim în nopti egale\nIubirea noastra moare într-un oras cubist\nS-o inventam întreaga cât esti, cât mai exist\nÎmbraca-te aiurea si hai în mahalale.",
    "author": {
      "id": 16,
      "name": "Andrei Păunescu",
      "slug": "andrei-paunescu"
    },
    "author_id": 16,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A7",
      "F",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 33,
    "title": "Cantec pentru Charlie Chaplin",
    "slug": "cantec-pentru-charlie-chaplin-33",
    "content": "Am                              Dm           E \nRîdeţi, rîdeţi, rîdeţi, rîdeţi, cu pămînt cu tot\nAm                       E           Am\nPînă cînd vă mai suportă ultimul Charlot.\nAm                            Dm            E \nNu de el cînd rîdeţi, rîdeţi, rîdeţi voi de voi, \nAm                           E             Am\nCă sunteţi grăbiţi şi cinici şi inculţi şi goi.\n\nE                             Am\nCharlie Chaplin calcă-n dodii cu pantofi strîmbaţi,\nDm                         E  \nHohotiţi dar n-aveţi ştire voi ce strîmb călcaţi.\nAm                    Dm       E\nFace el cum face raţa şi e caraghios\nAm                          E                Am\nDar ce cîrduri mari de raţe trec în sus şi-n jos.\n\nRefren:\nDm         G                  C\nO, Charlie Chaplin, înger vagabond\nDm            Am   E         Am\nHai, bătrîne, vino de sub orizont.\nDm         G                   C\nO, Charlie Chaplin, hohot interzis\nDm         Am      E            Am \nRedeschide teatrul ce ni l-au închis!\n\nAm                        Dm        E  \nNu mai sunt deloc parale, casierii, trişti, \nAm                    E            Am\nAstăzi dau autografe, nu bani la artişti.\nAm                                 Dm        E \nS-au născut prea mulţi pragmatici, muzica nu pot,\nAm                          E              Am\nHai, Pămînt, reaminteşte-ţi că ai fost Charlot!\n\nE                      Am\nUn şofer cu leafă mică şi cu mult umor\nDm                      E\nMi te-a readus în minte ca pe-un luptător.\nAm                         Dm          E \nCă ai fost al celor simpli şi al lor rămîi,\nAm                      E          Am\nPeste toată lumea veche hohotul dintîi.\n\n\nRefren...\n\nAm                 Dm             E\nLăutarii împrumută bani pentru sacîz,\nAm                       E          Am\nCifra noastră de afaceri hohotul de rîs.\nAm                   Dm          E \nFacem bancă mondială şi băgăm în ea\nAm                      E             Am\nRîsul sărăcimii triste, ca dobînzi să dea.\n\nE                Am \nNu există omenie unde nu eşti tu,\nDm                        E\nCă tu eşti curajul nostru de a spune NU!\nAm                         Dm             E \nÎnvîrteşte-te prin Cosmos, spune ce-ai de spus, \nAm                        E          Am\nÎntre-atîtea stele moarte tu Planeta Rîs!\n\nRefren...\n\n(cat despre mana dreapta...)\n\ne|----0---0---0---0-\nB|----1---1---1---1-\nG|----2---2---2---2-\nD|------------------\nA|--0---0---0---0---\nE|------------------\n\n(e o piesa destul de simplutza, asha ca... have fun playing it! :) )",
    "author": {
      "id": 17,
      "name": "Victor Socaciu",
      "slug": "victor-socaciu"
    },
    "author_id": 17,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E",
      "G",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 34,
    "title": "Trăiască România",
    "slug": "traiasca-romania-34",
    "content": "Mkay, dacă ignoraţi versurile cu partidul şi cu Ceauşescu, este un cântec\npatriotic fain (adică dacă se scot anumite versuri şi refrenul legat de nea \nNicu, este chiar OK).\n\nNu sunt prea sigur de acorduri pe alocuri, aşadar dacă aveţi sugestii, băgaţi\n şi voi un comentariu. De asemenea, la final am lăsat şi acorduri pentru cei \npe care nu-i duce vocea atât de sus (ca mine, par example). În plus, la un \nmoment dat nu se înţeleg versurile foarte bine, aşadar acolo am lăsat trei \nsemne de întrebare.\n\nAm                         E             Am\nDacă ne-nfruntă munţii, cu munţii ne vom bate\nAm                     E           Am\nPentru lumina ţării şi pentru libertate\nC           G           C          G\nAici ne e cuvântul când îl avem de spus\nC              G       E               Am\nDecât slujirea ţării nimic nu-i mai presus\nAm                       E            Am\nJurăm credinţă luptei oricât ar fi de grea\nAm                      E              Am\nJurăm că pentru ţară şi viaţa ne-o vom da\nC              G          C             G\nJurăm să nu ne mintă nici clipa, nici vecia\n\nRefren:\nC             G         E         Am\nTrăiască libertatea, trăiască România\nC             G         E         Am\nTrăiască libertatea, trăiască România\nC\nTrăiască-n fericire şi linişte poporul\nC                    E          Am\nTrăiască România, trăiască tricolorul\nC\nTrăiască-n fericire şi linişte poporul\nC                    E          Am\nTrăiască România, trăiască tricolorul\n\nDar ţara nu se face cu laşi, cu apatrizi\nIubirea nu te scuză când ochii îi inchizi\nSă curăţăm tot răul din viaţa României\nCă noi suntem partidul şi ţara omeniei\nNu creadă hoţii muncii că ei sunt mari si tari\nNoi suntem patrioţii revoluţionari\nAvem contract pe viaţă cu visul şi cu glia\n\nRefren\n\nA noastră este ţara, o moştenim din plin\nVa trebui întreagă s-o dam celor ce vin\nLa cei nascuţi şi astăzi, şi mâine, şi poimâine\nNici pâine fără muncă, nici muncă fără pâine\nNici călăreţi pe aer, nici cai fără călări\nNici ţară fără lume, nici lume fără ţări\nSa crească-n lume pacea, dreptatea, bucuria\n\nRefren\n\nTrăiască muncitorii, ţăranii, cărturarii\nTrăiască demnitatea cea fără de avarii\nDacă renunţi la luptă n-ai ce sa mai aştepţi\nNimica nu se face-n poziţie de drepţi\nSă facem România prin tot şi pentru toţi\nUn teritoriu liber de-orice prejudecăţi\nSă fie al nostru dreptul şi-a noastră datoria\n\nRefren 2:\nTrăiască libertatea, trăiască România\nTrăiască libertatea, trăiască România\nTrăiască Ceauşescu, partidul şi poporul\nTrăiască România, trăiască tricolorul\nTrăiască Ceauşescu, partidul şi poporul\nTrăiască România, trăiască tricolorul\n\nJurăm din milioane de inimi şi destine\nDin orice fel de sânge ne murmura în vine\nJurăm bătrân şi tânăr, femeie şi bărbat\nCredinţa României necondiţionat\nCă ţara-i bogăţia ce veşnic ne rămâne\nşi glasul ei ce îndamnă ”Deşteaptă-te, române!”\nNu ne-nspăimântă nimeni cu forţa sau pustia\n\nRefren 2\n\nSuntem de e nevoie o ţară de soldaţi\nSuntem de e nevoie un lanţ de munţi Carpaţi\nDurerea ţării noastre facută-i să ne doară\nNe place libertatea ca oameni şi ca ţară\nşi soarele dreptăţii să lumineze sfânt\nO ţară-n roşu, galben şi albastru pe pământ\nAceasta-i viaţa noastră, aceasta ni-i tăria\n\nRefren\n\nAlte acorduri:\nAm devine Em\nE devine B (sau B7, că-i mai comod aşa şi sună bine)\nC devine G\nG devine D",
    "author": {
      "id": 18,
      "name": "Nicu Alifantis",
      "slug": "nicu-alifantis"
    },
    "author_id": 18,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 11,
        "name": "Despre Patrie",
        "slug": "despre-patrie",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "C",
      "G",
      "A",
      "Em",
      "B",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 35,
    "title": "Cand s-o-mpartit norocu (S-asa-mi vine cateodata)",
    "slug": "cand-s-o-mpartit-norocu-s-asa-mi-vine-cateodata-35",
    "content": "intro\n   Am\n|---0---0-----0---0---|\n|---1---1-----1---1---|\n|---2---2-----2---2---|\n|---2---2-----2---2---|\n|-0-0---0---0-0---0---|\n|-----0---------0-----|\n\n   Am        E        Am     G         C       G        Am\n|---0---0----0---0----0--0----3---3-----0---0---3---3----0---0--\n|---1---1----0---0----1--1----3---3-----1---1---3---3----1---1--\n|---2---2----1---1----2--2----0---0-----0---0---0---0----2---2--\n|---2---2----2---2----2--2----0---0---2-2-2-2---0---0----2---2--\n|-0-0---0--2-2---2--0-0--0--2-2-2-2---3-3-3-3-2-2-2-2--0-0---0--\n|-----0------0-0-0------0---3-3-3-3-----------3-3-3-3------0----\n\n  E         Am      E       Am\n|---0---0----0---0----0---0--0---0----|\n|---0---0----1---1----0---0--1---1----|\n|---1---1----2---2----1---1--2---2----|\n|---2---2----2---2----2---2--2---2----|\n|-2-2---2--0-0---0--2-2---2--0---0----|\n|---0-0-0------0-0----0-0-0----0------|\n\n  Am            E          Am   G\n  S-asa-mi vine cateoadata dorule\n  C             G\n  S-asa-mi vine cateodata\n  Am           E\n  Sa dau cu cutitu-n piatra\n  Am           E            Am      Am\n  Sa dau cu cutitu-n piatra dorule.......\n\n  Una din cele mai frumoase melodii romanesti, m-am mirat cand n-am\n vazut-o transpusa pe site.",
    "author": {
      "id": 19,
      "name": "Ducu Bertzi",
      "slug": "ducu-bertzi"
    },
    "author_id": 19,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 36,
    "title": "Amintire cu haiduci",
    "slug": "amintire-cu-haiduci-36",
    "content": "Capo pe fretul 1 sau pe fretul 2.Varianta de pe albumul Cenaclul flacara este cu \ncapo pe fretul 1. Cea de pe albumul Best of...este cu capo pe fretul 2.\n\n\nIntro: Em D Em G D Em\n\nEm         G     D        Em\nÎn codru verde nu se mai vede \nD          G      D      Em\nNu se mai pierde urmă de cal\nEm         G     D     Em\nPe la izvoare nu mai apare \nD        G      D         Em\nUmbra călare a vreunui haiduc.\n\n\nEm         G    D        Em\nUnde s-au dus, când au apus \nD        G      D      Em\nAnii de sus ai gloriei lor\nEm         G         D        Em\nUnde-s pistoalele, unde-s pumnalele \nD          G      D      Em\nCaii si flintele haiducilor.\n\n\nRefren:Aceleasi acorduri ca pe strofe.\n\n\nEm         G    D        Em\nLa drumul mare nu mai apare \nD         G     D        Em\nSă mai omoare câte-un ciocoi\nEm            G     D        Em\nSă-i ia toti banii pentru ţăranii\nD          G      D        Em\nPentru sărmanii plini de nevoi.\n\n\nEm         G     D      Em\nUnde s-au dus, când au apus \nD        G      D      Em\nAnii de sus ai gloriei lor\nEm         G         D        Em\nUnde-s pistoalele, unde-s pumnalele \nD          G      D      Em\nCaii şi flintele haiducilor.",
    "author": {
      "id": 20,
      "name": "Valeriu Sterian",
      "slug": "valeriu-sterian"
    },
    "author_id": 20,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 37,
    "title": "Cana cu vin",
    "slug": "cana-cu-vin-37",
    "content": "C\nAseara te-am asteptat\nG                  C\nSi n-ai venit\n           C\nPoate te-ai suparat\nF     G            C\nPoate-ai adormit.\n\nC                   F\nR: Deseara sa nu m-astepti\nG                   C\nDeseara n-am sa vin\nPentru doua vorbe\nLa o cana cu vin.\n\nDeseara sa nu m-astepti\nO, nu, n-am sa vin\nPentru \"Buna, seara!\"\nAtât, si-o cana cu vin.\n\n2.Speram ca într-o zi\nSi tu sa ma iubesti\nDar din romante stiu\nCa sperând gresesti.\n\n3.De-acuma poti sa pleci\nLa alta linistit\nMi-am pierdut si timpul\nSi tot nu m-ai iubit.",
    "author": {
      "id": 12,
      "name": "Ecoul",
      "slug": "ecoul"
    },
    "author_id": 12,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "G",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 38,
    "title": "Ruga pentru parinti",
    "slug": "ruga-pentru-parinti-38",
    "content": "Gm                         Cm\nEnigmatici şi cuminţi\n\nE||-------|-------3--------3--------|-------3--------3--------|\nB||-------|----------3--------3-----|----------4--------4-----|\nG||-------|-------------3--------3--|-------------5--------5--|\nD||-------|-------------------------|-------------------------|\nA||-------|-------------------------|--3----------------------|\nE||-------|--3----------------------|-------------------------|\n\n\n     F                     Bb \n   Terminându-şi   rostul lor\n                      \n-------1--------1--------|-------1--------1--------||\n----------1--------1-----|----------3--------3-----||\n-------------2--------2--|-------------3--------3--||\n-------------------------|-------------------------||\n-------------------------|--1----------------------||\n--1----------------------|-------------------------||\n\netc.. pe următoarele acorduri:\n\nGm              Cm\nEnigmatici şi cuminţi\nF                Bb\nTerminându-şi rostul lor\nGm              Cm\nLângă noi se sting şi mor\nF                     Bb\nDragii noştri, dragi părinţi\n\nCm              Gm\nDă-ni-i Doamne înapoi\nEb                   Dm\nCăci şi-aşa au dus-o prost\nCm                    Gm\nşi fă-i tineri cum au fost\nEb          D         Gm\nFă-i mai tineri decât noi\n\nPentru cei ce ne-au făcut\nDă un ordin, dă ceva\nSă-i mai poţi întârzia\nSă o ia de la început. \n \nAu plătit cu viata lor\nAle fiilor erori,\nDoamne fă-i nemuritori\nPe părinţii care mor. \n \nIa priviţi-i cum se duc,\nIa priviţi-i cum se sting,\nLumânări în cuib de cuc,\nParcă tac, si parcă ning. \n \nPlini de boli si suferinţi\nNe întoarcem în pământ,\nCât mai suntem, cât mai sunt,\nMângâiati-i pe parinti. \n \nE pământul tot mai greu,\nDespărţirea-i tot mai grea,\nSărut-mâna, tatăl meu,\nSărut-mâna, mama mea. \n \nDar de ce priviţi asa,\nFata mea si fiul meu,\nEu sunt cel ce va urma \nDragii mei mă duc si eu.\n\nSărut-mâna, tatăl meu,\nSărut-mâna, mama mea.\nRămas bun, băiatul meu,\nRămas bun, fetita mea, \n \nTatăl meu, băiatul meu,\nMama mea, fetiţa mea.",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Gm",
      "Cm",
      "F",
      "Bb",
      "Eb",
      "Dm",
      "D",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 39,
    "title": "La nunta ta",
    "slug": "la-nunta-ta-39",
    "content": "Originalul e în F#m, dar pentru comoditate am transcris în Em\n\nEm          B7       Em\nEu vin la nunta ta, iubito\n                    Am\nȘi nu voiesc nimic să-ți cer\n                C        B\nDar roagă-ți nașii să mă lase\n       Am      C       B7\nSă-ți cânt la nuntă lerui-ler\n\nColindător fără de casă\nColindător fără noroc\nUn strop de vin și-un strop de pâine\nÎți cânt și-apoi o iau din loc\n\n\tRefren:\n\t\n\tAm          D        G\n\tDreptul să colind îl cer\n                Am  C       B7\n\tDalbe flori și lerui-ler\n\tAm     D              G\n\tPentru ea, doar pentru ea\n\tC   B7   Em\n\tMăritata mea\n\nAm drum în față și în urmă\nDin când mai mor prin munți\nDar am venit să-ți cânt colindul \nPreafericitei tale nunți\n\nPot să-l rostesc și din picioare\nNu am pretenții de mesean\nUn strop de vin și-un strop de pâine\nȘi-am să-ți colind nepământean\n\n\tRefren.\n\nIubita mea vândută lumii\nNimic n-aș mai putea să sper\nCă florile nu mai sunt dalbe\nȘi \"lerui\" nu mai este \"ler\"\n\nDar eu colind bătut de lacrimi\nColind și voi mai colinda\nLa toate nunțile din lume\nAfară doar de nunta mea\n\n\tRefren.",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "B7",
      "Am",
      "C",
      "B",
      "D",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 40,
    "title": "Broasca Țestoasă",
    "slug": "broasca-testoasa-40",
    "content": "D                   A\nAm ani o mie, asta-i tot\nBm                F#\nȘi vin asupră-mi alţii\nG                   D\nSub Teobald, regele got\nA                D\nCrescui în rezervaţii\nG                   D\nSub Teobald, regele got\nA                D\nCrescui în rezervaţii\n\n\tRefren:\n\tD          A\n\tHai lin, hai lon\n\tBm                 F#\n\tCiu-daga-dinghi-langhi-lo\n\tG                         D\n\tCiu-daga-dinghi-langhi-dobobldinghi\n\tA                        D\n\tDaghi-dobobldinghi-daghi-dobobldinghi\n\tG                        D\n\tCiu-daga-dinghi-langhi-dobobldinghi\n\tA                          D A D\n\tDaghi-dobo-bldinghi-langhi-lo\n\nAtâte-au fost în aceşti ani\nDin care nu ştiu boabă\nAcum expusă-s pentru bani\nLa moşi într-o tarabă\n\n\tRefren\n\nStafia morţii nu-mi dă ghes\nNu ştiu de muta coasă\nSunt broasca ţest, sunt broasca ţest\nSunt broasca ţestoasă\n\n\tRefren 3x (accelerând tempoul)",
    "author": {
      "id": 21,
      "name": "Radu Gheorghe",
      "slug": "radu-gheorghe"
    },
    "author_id": 21,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      },
      {
        "id": 12,
        "name": "Cântece pentru copii",
        "slug": "cantece-pentru-copii",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "Bm",
      "F",
      "G",
      "Am",
      "F#"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 41,
    "title": "Decembre",
    "slug": "decembre-41",
    "content": "Ciupitura:\n\nDm                 A7\n----1h3p1--1---   ----0h3-3---0---\n---3------3-2--   ---2------2---2-\n--2------------   --0-------------\n-0-------------   -2--------------\n---------------   ----------------\n---------------   ----------------\n\n\nDm\nTe uită cum ninge decembre\nA7 \nSpre geamuri iubito privește\nDm\nMai spune s-aducă jăratec\nA7                     Dm\nȘi focul s-aud cum trosneşte\n\nȘi mână fotoliul spre sobă\nLa horn să ascult vijelia\nSau zilele mele totuna\nAş vrea să le-nvăţ simfonia\n\nMai spune s-aducă şi ceaiul\nȘi vino şi tu mai aproape\nCiteşte-mi ceva de la poluri,\nȘi ningă, zăpada ne-ngroape\n\nCe cald e aicea la tine\nȘi toate din casă-mi sunt sfinte\nTe uite cum ninge decembre\nNu râde, citeşte-nainte\n\nE ziuă şi ce întuneric\nMai spune s-aducă şi lampa\nTe uită zăpada-i cât gardul \nȘi-a prins promoroacă şi clampa\n\nEu nu mă mai duc azi acasă\nPotop e-napoi şi-nainte\nTe uită cum ninge decembre\nNu râde, citeşte-nainte\n\nOutro:\n\nI-a oara:\n\nDm Gm\nMmmmmm...\nC  F\nMmmmmm...\nBb Gm\nMmmmmm...\nA  Dm\nMmmmmm...\n\nII-a oara:\n\nDm Gm\nMmmmmm...\nC  F\nMmmmmm...\nBb Gm\nMmmmmm...\nA  Dm\nMmmmmm...\nBb A  Dm\nMmmmmm...",
    "author": {
      "id": 18,
      "name": "Nicu Alifantis",
      "slug": "nicu-alifantis"
    },
    "author_id": 18,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 13,
        "name": "De iarnă",
        "slug": "de-iarna",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A7",
      "Gm",
      "C",
      "F",
      "Bb",
      "A",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "-",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Fingerstyle"
      }
    ],
    "views": 0
  },
  {
    "id": 42,
    "title": "Copacii fara padure",
    "slug": "copacii-fara-padure-42",
    "content": "Dm          A         Dm\nÎn povestea copacilor goi\n                         Gm  \nScârţâind într-o singură uşă\n                     Dm\nEste vorba de noi amândoi\n         A7          Dm\nEste vorba de foc şi cenuşă\nDm             A7         Dm\nDoi copaci fără frunze pe drum\nF                         Gm  \nDupă cum îi priveşte înaltul\n                      Dm\nDoi copaci prin sărutul de sus\n     A7                   A \nAplecându-se unul spre altul.\n\t\n\tRefren:\n\t\n\tDm                       A\n\tSpune-mi pădure cu frunza rară\n               A7            Dm\n\tUnde-i iubirea de astă vară?\n            D                Gm\n\tNu ştie iarna să se îndure\n                   Dm    A      Dm\n\tDe noi, copacii fără pădure.\n\nToată vara au fost numai ploi\nşi-au fost stele în nopţi fără stele\nşi prin toamna şederii pe nori\nCade ultima frunză spre ele\nÎn zadar către tine întind\nNişte crengi ce-mi fuseseră braţe\nAlte uşi se aud scârţâind\nDe tomnatecul vânt să se agaţe.\n\nNu mai suntem decât doi copaci\nVor veni călători să ne tundă\nVor lua crengi toţi copiii săraci\nPentru flacăra lor muribundă\nşi chiar dacă mă vei mai iubi\nPeste crivăţul iernii ce vine\nFără braţe cu ochii pustii\nN-am să am ce întinde spre tine.",
    "author": {
      "id": 13,
      "name": "Tatiana Stepa",
      "slug": "tatiana-stepa"
    },
    "author_id": 13,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A7",
      "F",
      "Gm",
      "A",
      "D7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 43,
    "title": "Taina",
    "slug": "taina-43",
    "content": "C\nDacă n-am să vin deseară\nF    G         C\nMamă uşa n-o-ncuia\nC\nSpune-i tatei că-s în poartă\nF        C          F        C          F  G7   C\nSau găseşte tu, sau găseşte tu, sau găseşte tu ceva.\n\n\nF          G        C\nÎn seara asta mamă lumea e a mea\nO lume de douăzeci de ani\nPriveşte, mamă, jocul şi taci, nu întreba:\nE foarte simplu, este ziua mea.\n\n\nNu pune nici-o întrebare\nDe întrebări m-am săturat\nNelămurită să rămână\nFie taina mea, fie taina mea, n-o-mpart cu nimenea.\n\n\nÎn seara asta mamă lumea e a mea\nO lume de douăzeci de ani\nPriveşte, mamă, jocul şi taci, nu întreba:\nE foarte simplu, este seara mea.\n\n\nDe te-apucă miezul nopţii\nşi eu, mamă, n-am venit\nLasă telefonu-n pace\nFiindcă-n noaptea asta, noaptea asta, mamă nu-s de găsit. \n\n\nÎn seara asta mamă lumea e a mea\nO lume de douăzeci de ani\nPriveşte, mamă, jocul şi taci, nu întreba:\nE foarte simplu, este noaptea mea.",
    "author": {
      "id": 12,
      "name": "Ecoul",
      "slug": "ecoul"
    },
    "author_id": 12,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "F",
      "G",
      "G7",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 44,
    "title": "Rău mă dor ochii, mă dor",
    "slug": "rau-ma-dor-ochii-ma-dor-44",
    "content": "   G                       C\n1. Rau ma dor ochii, ma dor\n\tD\tG\nDe durerea frunzelor\n         Em              D C\nR: Si ma duc si iar ma duc\n\tD\t\tG\n   Pana la izvor sub nuc\n         Em\t    D \t   C\n   Si ma fac si iar ma fac\n            D              G\n   Lemn de brad si lemn de fag\n\n\n 2. Rau ma dor picioarele\n    De batut cararile\n\n3. Rau ma dor ochii, ma dor\n   De lumina stelelor\n\n4. Unde ai plecat nu stiu\n   Dar mi-e sufletul pustiu\n\n5. Si-am sa plec fara sa stiu\n   Dus de dorul meu tarziu",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "Em"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 45,
    "title": "Râpa",
    "slug": "rapa-45",
    "content": "Em          D     Em\nLa marginea pantei abrupte (o-o-o-o)\nC         D         Em\nLa un han s-a oprit un strain (strain-strain)\nC         D               G       D   Em\nEra trist si avea hainele rupte o-o-o-o \nEm          D        Em\nSi pe masa o cana cu vin (cu vin-cu vin) [Era trist.... x2         \n\nOm nebun ce-nconjoara pamantul (o-o-o-o)\nStai la mine, ramai doar un ceas (un ceas-un ceas) \nSa te-ntorci inapoi nu mai ai unde o-o-o-o\nInainte sa maergi ti-a ramas (ramas-ramas)  [Sa te-n.... x2\n\nMi-amintesc de o vara fierbinte (o-o-o-o)\nDe o padure cu muguri pe ram (pe ram-pe ram)\nMi-amintesc de prieteni si de iubita 0-0-0-0 \nSi de-o casa cu mama la geam. (la geam-la geam) [Mi-amintesc... x2\n \n\nSi am ajuns la un han pe o stanca  (o-o-o-o)\nSa-mi inec tot amarul nu pot (nu pot-nu pot)\nSi ma-ntreb daca apa e adanca o-o-o-o \nSa ma-nec azi cu jale cu tot. (cu tot-cu tot) [ Si ma-.... x2\n\nL-am vazut ridicandu-se agale (o-o-o-o)\nAvea ochi plini de lacrimi de dor (de dor-de dor)\nMultumesc pentru vinul mariei tale o-o-o-o\nEu ma duc azi la rapa sa mor (sa mor-sa mor)  [Multumesc.... x2\n\nLinia melodica o gasiti la coverul facut de mine pe youtube\nhttp://www.youtube.com/watch?v=ef7sddFChaQ",
    "author": {
      "id": 22,
      "name": "Trupa Şanţ",
      "slug": "trupa-sant"
    },
    "author_id": 22,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "D",
      "C",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 46,
    "title": "Castelul",
    "slug": "castelul-46",
    "content": "Am               C \nCandva demult un crang de brazi\nG              Am  \nPazea un vechi castel\nAm              C \nSi-o satra de tigani nomazi\nG            Am\nA poposit in el\n\nRefren:   Am      C   G       Am\n          Aaaaaaaaa   nananananana\n          Am      C   G       Am\n          Ooooooooo   nananananana\n\nSi-aveau tiganii ochi adanci \nSi galbeni prinsi in plete\nSi-aveau cu ei un card de tanci\nSi-un card de negre fete\n\nRefren: \n\n\n3. Si cum faceau tiganii foc \nDin crengile de pin\nTiganci cu carti si cu ghioc\nPlecara prin vecini\n\nRefren:\n\n4. Candva un tanar castelan\nPrivind prin vechi ferestre\nZari o fata de tigan\nFrumoasa ca-n poveste\n\nRefren:\n\n5.Si-avea cu el în drumul sau\nUn biet copil de casa\nL-a pus s-aduca la castel\nTiganca cea frumoasa\n\nRefren:\n\n6.Trecu un an, mai mult de-atunci\nSi-n patul de matasa\nFrumoasa fata de tigan\nEra acum craiasa\n\nRefren:\n\n7. Of, domnul meu, iubitul meu\nMi-ai spus acum un an\nC-ai vrea sa-ti fiu mireasa eu\nEu, fata de tigan\n\nRefren:\n\n8.Si cum statea într-un balcon\nSi-si acorda chitara\nUn cântec rasuna duios\nPentru tiganca seara\n\n\nPuteti pune capo pe 1 , dar se poate canta fara capo .....",
    "author": {
      "id": 23,
      "name": "Nae Berechet",
      "slug": "nae-berechet"
    },
    "author_id": 23,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "G",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 48,
    "title": "Ninge astazi pentru tine",
    "slug": "ninge-astazi-pentru-tine-48",
    "content": "G           Am          C       D        G\n1. Ninge astazi pentru tine muntele e alb de nea,\n   G          Am          C    D             G\n   Soarele din ceruri vine doar pentru iubita mea.\n   Acum coboara si dorul chemat de la locul lui,\n   Tocmai de pe Vârful Omu pâna-n Valea Cerbului.\n                   R:  Când te scuturi de zapada\n                       Nu stii cât esti de frumoasa\n                       Ochii-ti verzi zapada-i alba\n                       Si se face cald în casa.\n\n2. Si calugarii din schit vor cu totii a te vedea,\n   La cabana au venit doar pentru iubita mea.\n   Si zapada de pe culme în vale s-a rostogolit,\n   Muntele e pus pe glume de când stie c-ai venit.\n   \n3. Jepii Mici ca sa te vada si-au cumparat ochelari,\n   Si în cea mai mare graba i-au chemat pe Jepii Mari.\n   Nu stiu sigur azi sau mâine pe Morar am sa te sui,\n   Sa ne logodim iubito sus în vârful muntelui.\n\nhttp://www.youtube.com/watch?v=0ZztyJ1zcy4&feature=player_detailpage\nInterpretare :Puiu Cazan",
    "author": {
      "id": 25,
      "name": "Puiu Cazan",
      "slug": "puiu-cazan"
    },
    "author_id": 25,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Am",
      "C",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 49,
    "title": "Floare de Colt",
    "slug": "floare-de-colt-49",
    "content": "Am         E          Am\nVis de-argint şi de petale\nG                      C\nCuibul tău e sus pe creste\nDm                     Am\nRaza ta-mi coboară-n cale\nE                    Am\nMai frumos ca-ntr-o poveste\nDm                     Am\nRaza ta-mi coboară-n cale\nE                    Am\nMai frumos ca-ntr-o poveste\n\t   Dm          Am\n\tR: Tu floare de colț\n\tE            Am\n\tMinune sub bolți\n\tDm       Am \n\tFragedă stea\n\tE      Am\n\tIubita mea\n\nFloare ninsă-n vârf de stâncă\nMai presus de dor şi stele\nCine oare să te-ajungă\nNumai dorurile mele\nCine oare să te-ajungă\nNumai dorurile mele\n\nFloare de lumina vie\nZâmbet cald de dimineață\nTe aştept de-o veşnicie\nTe-ntâlnesc odată-n viață\nTe aştept de-o veşnicie\nTe-ntâlnesc odată-n viață\n",
    "author": {
      "id": 19,
      "name": "Ducu Bertzi",
      "slug": "ducu-bertzi"
    },
    "author_id": 19,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "C",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 50,
    "title": "Imnu Pietrei Craiului",
    "slug": "imnu-pietrei-craiului-50",
    "content": "Em             Am     D          Em\nAvem un singur Crai ce-asteapta neclintit\nEm             Am     D          Em\nCu ale sale creste ce-s rosii-n asfintit\nPlecam sâmbata seara, urcam toti împreuna\nSi liberi ca sa fim sub cerul clar de luna\nSa vii sa îl strabatem pe ale sale drumuri\nSa vezi cum cresc la brazi cu miile de muguri\nSa vezi si jneapanul cum creanga si-a plecat\nCe vitrega-i natura si-i vântu-i neîncetat\n\nR: Si vreau sa vii si tu, sa mergem împreuna\nSa împletim acolo a Craiului cununa\nDin garofite rosii si din bujori de munte\nAm          D               Em\nDin liliac si flori de colt carunte\nAm  D      Em     Am               D\nHei, hai,  liliac si flori de colt carunte\n\n2. De pleci din Plaiul Foii pe drumul pietruit\nAi sa ajungi la Spirla, refugiul poleit \nSa-i întâlnesti pe marius, pe ghimpe si pe dan\nSi vei vedea ce-nseamna sa fii un muntoman \nDe urci înspre Ascunsa pe Hornul Nisipos\nE noapte si e iarna si vântul e taios \nSa simti rucsacu-n spate, o munca de Sisif\nSi mâna pe chitara lipindu-se de griff\n\n3. De pleci din Curmatura, traseu pe banda-albastra\nAjungi în Saua Caprei, cobori apoi sub creasta\nSa treci si de Gavan, de Padina Închisa\nDe stânca Orgii Mari si de Diana stinsa\nDe vrei sa stii ce-i munte, sa urci pe Crapatura\nSi prin zapada inalta , sa mângâi stânca dura\nSa treci si de-Ascutiti, Timbalele-amândoua\nDe stanca orgii mari cand ninge si când ploua\n\n4. Pe Lanturi de te-ncumeti în nopti cu luna plina\nSi prin zapada-nalta sa tai poteca lina\nCând ochii tai se-nalta spre bolta înstelata\nLa crucea unei fete sa-ngenunchezi o data\nCând râuri de sudoare-ti vor sirui pe fata\nSa ai credinta-n munte si-ncredere în viata\nAicea sus pe munte nimic nu e usor\nMai bine stati acasa în poala mamelor\n\n\n\nRitmul este foarte usor , voi poasta un video cu aceasta piesa\nVideoul pe care lam facut pentru aceasta piesa : http://www.youtube.com/watch?v=YaYROYlEhnI",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 14,
        "name": "Imnuri",
        "slug": "imnuri",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "F",
      "C",
      "Am",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 51,
    "title": "Sunt sărac",
    "slug": "sunt-sarac-51",
    "content": "Am           Dm            \nMă întreb ce s-ar fi întâmplat\nF      C         E           Am   - Am E\nDacă-n zori m-aș fi trezit bogat.\nAm         Dm\nDeseori la asta m-am gândit,\nF    C     E              Am\nÎnsă visul meu nu s-a-mplinit.\n       Dm           Am\nR: Sunt sărac, sunt sărac,\n        Dm          Am\nN-am un ban în buzunar,\n       Dm         Am\nSunt sărac, și ce dacă,\n      E           Am      \nEu cu soarta mă împac.  \n\nBanul e - vorba țăranului,\nBanul este ochiul dracului. \nCând îl ai îți pare foarte mic,\nCând nu-l ai, nu valorezi nimic.\n\nFericirea n-o poți cumpăra\nNici cu bani și nici cu altceva.\nCânt și nimeni nu mă poate-opri\nSă dau glas tăcerii inimii.",
    "author": {
      "id": 26,
      "name": "Karma",
      "slug": "karma"
    },
    "author_id": 26,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "F",
      "C",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 52,
    "title": "Visul",
    "slug": "visul-52",
    "content": "G                    Em                 C               D        \nA fost odata un vis frumos un vis frumos cu un baiat si-o fata\nG                  Em                 C             D\nA fost un vis cam dureros cam dureros de te ranesc ma iarta.\nA fost un vis nascut în munti, nascut în munti crescut la o cabana\nUmbrit de brazi înalti carunti înalti carunti ce astazi se destrama\nRefren:\nG                       Em\nDe ce va destramati usor va destramati\nC            D\nVoi vise pe poteci\nG                       Em\nÎn amintirea muntilor, a muntilor\n      C        D\nSa dainuiti pe veci.\n\t\nCad stelele ard lumânari pe-al muntelui altar\nVin cerbii iarasi pe carari padurile tresar\nIzvoarele în sopot lin vestesc iubirea  noastra\nIar ale tale vise vin sa-ti bata la fereastra.\n\nRamâi cu bine visul meu si s-auzim de bine\nTe voi pastra în gând mereu voi fi mereu cu tine\nIar cel ce va veni apoi pe munte tu sa-l aduci\nVa voi veghea pe amândoi pe creste de-ai sa-l urci.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Em",
      "C",
      "D",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 53,
    "title": "Padure Nebuna",
    "slug": "padure-nebuna-53",
    "content": "Em\nO vara intreaga m-a tinut padurea\nG\nCu fata in iarba si cu gandul aiuria\nEm\nIar acum in toamna la plecare\nG                    D            Em\nSe tanguie ca ma rup din inima ei si o doare\n   G\nR: Padure, padure nebuna\nEm\nIn fiecare noapte cu luna\nG\nVoi ratacii fara tinta agale\nEm                  D                  Em\nCa o frunza manata de vant pe potecile tale\n\nIn fiecare noapte de iarna\nUmbra mea alba va veni sa se-astearna\nCa o ursoaica cu puii ucisi\nLa umbra stejarilor pradati de frunzis \n\nIn fiecare dimineata\nUneori ca o umbra,alteori ca o ceata\nCa o negura sau ca o bruma\nVoi veni,voi veni,nu te mai tangui padure nebuna",
    "author": {
      "id": 27,
      "name": "Carmen Ciocolata",
      "slug": "carmen-ciocolata"
    },
    "author_id": 27,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 54,
    "title": "Muntele alb",
    "slug": "muntele-alb-54",
    "content": "Bataia: clasica (jjssjs) Intro: Am Am\n\"-\" reprezinta jumatati de acord\n\n    Am  -    E     Am \n1.Ninge cu vorbe secate\n     G  \n  Când iarna e grea\n     C \n  Si viscolul bate\n Dm  -     E     Am    \n  Ninge cu vorbe secate.\n  Si iarna e solitarã\n  Când stele de gheatã\n  Scânteie afarã\n  Si iarna e solitarã.\n           G              C        \nR: Tu esti muntele alb pe care urcãm\n         Dm             Am     \n   Si-nãltimile tale ne cad la picioare,\n           E       Am    \n   Tu esti muntele alb.\n   Tu esti visul meu alb În care mã-mbrac\n   În miresme de crin si de liliac\n   Tu esti visul meu alb. +Am\n2.Ninge cu vorbele tale\n  E iarnã fierbinte\n  Ca o rugãminte\n  Ninge cu vorbele tale.\n  Si te-as iubi în ianuarie\n  Ca pe-o floare de crin\n  Ca pe-o stea cãzãtoare\n  Si te-as iubi în ianuarie.\n3.Si îmi pãstrez jurãmântul\n  Sã fiu o biatã frunzã\n  Ce-o leagãnã vântul\n  Si îmi pãstrez jurãmântul.\n  Iar tu rãmâi ca o sete\n  Pe care-o astâmperi\n  Când iarna începe\n  Iar tu rãmâi ca o sete.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "C",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },{
    "id": 56,
    "title": "Imnul Dianei",
    "slug": "imnul-dianei-56",
    "content": "Am             G        Am\nSi-am pornit sa recladim Diana\nAm         G      Am\nUn refugiu ars si parasit/ (si parasit)\nF     G               C   E   Am\nSi-am lasat sticla si damigeana\nF             E       Am\nSi din Plaiul Foii am pornit, \nF     G               C   E   Am\nSi-am lasat sticla si damigeana\nF             E       Am\nSi din Plaiul Foii am pornit. \n\t Am   E    Am    Dm            Am\n  R: Mama unde esti? Poti sa ma si bati\n\t E             Am\n\t Dar lasa-ma-n Carpati !\n\t Am      C     E   E   Am\n\t Darira, rira, ri, ra, ra\n\t Am   G    C     Dm         Am\n\t Mama unde esti? Bate-ma de vrei\n\t E              Am\n\t Dar lasa-ma cu ei !\nSi intr-o zi cu ploaie si cu ceata\nCu rucsaci in spate si vopsea/ (si vopsea)\nIn alertul nostru pas de rata\nAm atacat-o pe Diana,\nIn alertul nostru pas de rata\nAm atacat-o pe Diana.\n\nScandura mica, scandura lata\nO caram pana ne facem mici/ (ne facem mici)\nSi echipa noastra-i cocosata\nParc-ar fi o ceata de pitici,\nSi echipa noastra-i cocosata\nParc-ar fi o ceata de pitici.\n\nTotu-i bine pan'la inserare\nCand cu calde lacrimi ne rugam/ (ne rugam)\nO, Ceresc Parinte, indurare!\nFa mai cald sa nu mai inghetam,\nO, Ceresc Parinte, indurare!\nFa mai cald sa nu mai inghetam.\n\nSi-am ajuns acolo toti o forta\nSi-ntr-o scurta clipa de ragaz (de ragaz)\nAm aprins a tineretii torta\nDe indata ce-am ajuns in Crai,\nAm aprins a tineretii torta\nDe indata ce-am ajuns in Crai.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 14,
        "name": "Imnuri",
        "slug": "imnuri",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "G",
      "F",
      "C",
      "E",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 57,
    "title": "Puiul de drac (Cade copacu`)",
    "slug": "puiul-de-drac-cade-copacu-57",
    "content": "G         Em              C        D \nHei m-am dus m-am dus, sa tai un copac\n\n       G        Em        C        D\nSi-a venit a venit, un mic pui de drac\n\n        G          Em       C        D\nSi mi-a spus mi-a spus, sa nu tai copacul,\n \n         G           Em            C            D\nC-o sa-mi scoata un ochi si-o sa-mi sparga si capul,\n\n      G       Em      C        D\nInsa eu insa eu, nu l-am ascultat\n \n         G        Em        C      D\nSi m-am dus m-am dus, sa tai un copac.\n\n\n\n G          D         G\nCadeee, da-te ba ca cadeee\n\nG           G          Em       C        D\nDaa-te ba ca cade cade cade cade cade copacu`\n\nG           Em          C       D\nCurge curge curge curge curge coniacu`\n\n\n\n           G        Em       c       D\nHei m-am dus m-am dus, sa beau un coniac\n\n       G       Em      C          D\nSi-a venit a venit, acel pui de drac\n\n         G          Em      C         D\nSi mi-a spus mi-a spus, sa nu beau coniacul,\n\n          G           Em             C          D\nC-o sa-mi scoata un ochi si-o sa-mi sparga si capul,\n\n      G       Em      C         D\nInsa eu insa eu, nu l-am ascultat\n\n        G       Em        C       D\nSi m-am dus m-am dus, sa beau un coniac.\n\n  G          D           G\nCurgeee, da-te ba ca curgeee\n\n   G           G          Em          C      D\nDaa-te ba ca curge curge curge curge curge coniacu`\n\n G        Em         C     D\nCade cade cade cade cade copacu`.\n\n\n\n G          D         G\nCadeee, da-te ba ca cadeee\n\nG           G          Em       C        D\nDaa-te ba ca cade cade cade cade cade copacu`\n\nG           Em          C       D\nCurge curge curge curge curge coniacu`",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Em",
      "C",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 58,
    "title": "Omul bun si pomul copt",
    "slug": "omul-bun-si-pomul-copt-58",
    "content": "C\nOmul bun si pomul copt , dar\nF   G          C\nHai mai dorule hai\nC\nAstia n-or avut noroc\nF   G         C\nHai mai dorule hai\nRef:   F       G         C\n\t Si stau la margine de drum\n\t   F       G         C\n\t Pomul copt si amul bun\n\t\tF       G         C   \n\t Si stau la margine de drum\n\t   F       G         C\n\t Pomu-i copt si omu-i bun\nDupa ce-or da ce-or avuta\nHai mai dorule hai\nI-o lasat i-o parasita\nHai mai dorule hai\n\nSi-asa ca-i venea sa creasca\nHai mai dorule hai\nPoate-o mai rodi vreidata\nHai mai dorule hai",
    "author": {
      "id": 29,
      "name": "Mircea Rusu Band",
      "slug": "mircea-rusu-band"
    },
    "author_id": 29,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "F",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 59,
    "title": "Tu sa stai cuminte acasa",
    "slug": "tu-sa-stai-cuminte-acasa-59",
    "content": "C                F\nE greu urcusul, vantul ma sfasie\nG                      C\nSi viata mi-e legata de-o franghie\nC                   F\nIn jurul meu se lasa ceata deasa\nG                   C\nIubito, tu sa stai cuminte acasa.\nC                   F\nIn jurul meu se lasa ceata deasa\nG                   C\nIubito, tu sa stai cuminte acasa.\n\nSi bate crivat rece dintr-o parte\nStau atarnat intre destin si moarte\nUn fel de liniste incet m-apasa\nIubito, tu sa stai cuminte acasa.\n\nMai fac un pas si-ncremenesc pe stanca\nSub mine e prapastie adanca\nSimt cum puterile incet ma lasa\nIubito, tu sa stai cuminte acasa.\n\nPe-o piatra mi-a alunecat piciorul\nSub mine se intinde negru golul\nSi franghia-i pe jumatate roasa\nIubito, tu sa stai cuminte acasa.\n\nDin clipa-n clipa vantul se-nteteste\nSi-n stanca inghetata ma izbeste\nS-a pus ca din senin o ceata deasa\nIubito, tu sa stai cuminte acasa.\n\nAm inghetat, nimic nu ma mai doare\nSi parca urla lupii-n departare\nUn fel de liniste incet m-apasa\nIubito, tu sa stai cuminte acasa.\n\nAud o voce ca din nefiinta\nCare-mi sopteste groaznic o sentinta\nSi simt o ameteala pacatoasa\nIubito, tu sa stai cuminte acasa.\n\nMana-nghetata-ncet mi se desprinde\nSi-n liniste infinitul ma cuprinde\nUn ultim salt de circ dar fara plasa\nIubito, tu sa stai cuminte acasa.\n\nSi cand in muntii goi un vant va bate\nTu pleaca-ti ochii in singuratate\nSi cand tacuta noapte-n geam se lasa\nIubito, tu sa stai cuminte acasa.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "F",
      "G",
      "E",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 60,
    "title": "M-a tinut mama acasa",
    "slug": "m-a-tinut-mama-acasa-60",
    "content": "ritm:2 batai in jos 2 in sus 1 in jos 1 in sus.. \nC          F              \nM-a tinut mama acasa\nG             C\nSa nu vin la tine\nInsa eu am tot rugat-o\nPan' s-a plictisit de mine\n\nNu mai pot hei hei\nSa mai suport\nLa munte vreau\nSa ma intorc\n\nDaca ai un ghid nebun\nsi-un nebun sa-ti cante \nori ce-ar zice-ai tai parinti\ntu sa te intorci la munte\n\nSambata voi sta acasa\nSingur voi petrece\nAltfel risc ca sa ma treaca\nAi mei pe hrana rece.\n\nPoate acuma sa ma lege\nSa ma bata-n cuie\nAm sa fug si-ntotdeauna\nAm sa ma intorc la munte.\n\n",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 61,
    "title": "Omagiu unui alpinist",
    "slug": "omagiu-unui-alpinist-61",
    "content": "Am\t    C\t  Dm   F    C\t \nNinge peste munte cu melancolie \nDm\t    E\t    Dm\t F   E\t \nNinge peste moartea unui alpinist \nNinge peste creste, ninge si sfarseste\nInima ce-mi bate azi in pieptu-mi trist.\n    Am\t    E\t \nR:  Ninge sfant si pagan, \n\tF\t    C\t \n\tNumai ochii ne raman \n\tAm\t    E7        Am\t\n\tDespartirea s-o mai vada \n\tCaci in munti noi ne-am strans\n\tSi-am ajuns de-atata nins\n\tNiste oameni de zapada.\n\nStanca grea si dura viata i-a rapit\nDuhurile vaii casa i-au facut\nGiulgiu-i de zapada pe care-a iubit-o\nVantul il jeleste ca la inceput.\n\nVoi cei ce astazi dormiti in munte\nVoi pe care stanca dura v-a invins\nO, pustietatea lasa sa v-asculte\nIar soptirea blanda mi se pare plans.\n\nPulberea uitarii ninge pe morminte\nCei legati in coarda nu va vom uita\nCatre culmea vietii mergem inainte\nPana-n cllipa-n care stanca ne-o trada.",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "Dm",
      "F",
      "E",
      "E7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 62,
    "title": "Imnul Bucegilor",
    "slug": "imnul-bucegilor-62",
    "content": "Capo I\n\nC\t \nDaca ai un dor ce te framanta \n                       Dm7\nNu cata ca-i drum obositor \nG\t \nHai prietene cu noi pe stanca \nG7                C\t \nPe cararile Bucegilor. \nPe cararile umblate doar de ciute\nSub aripa Caraimanului\nAi s-auzi povesti necunoscute\nSpuse doar de glasul muntelui.\n\n\nRefren:\n       C\t \nCand Bucegii  \n                        Dm\t\nDau zvon de piatra si izvoare \n           G\t \nOriunde-ai fi  \n                     C\t \nRaspunde la a lor chemare \nCaraimanul, Costila-ascunsa dup-un nor\nSi Morarul te vor primi la pieptul lor.\n\nPe platou la mare inaltime\nBabele la sfat s-au adunat\nNumai Baba Mare sta deoparte\nSi-si pune intrebari neincetat.\nOare Sfinxul care tace-ntr-una\nSi priveste in zari nepasator\nSe iubeste-n taina cu Batrana\nSau le face curte Doamnelor.\n\nJos in Pestera intunecoasa\nSta batranul schit uitat de ani\nAici doina-ti pare mai duioasa\nInganata de batrani ciobani.\nNumai staretul cu barba-i alba\nAdancit in rugaciunea lui\nSpune-ncet cu vocea lui domola\nPravila straveche a muntelui.\n\nPe Morar in nopti cu luna plina\nSau pe branele Bucsoiului\nVin scaldate parca in lumina\nZanele din Valea Cerbului.\nAu pe cap cununi de campanula\nSi in plete flori de colt de-argint\nCapre negre-n colt de piatra sura\nStrajuiesc in noapte locul sfant.\n\nDe la Varful Omu pana-n zare\nDunarea albastra poti s-o vezi\nPiatra Craiului si Piatra Mare\nFagarasul cu-ale lui zapezi.\nHoinarind vreodata pe-o carare\nDac-o cruce-n cale-ai intalnit\nNu uita sa pui macar o floare\nPentru cel ce muntele-a iubit.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 14,
        "name": "Imnuri",
        "slug": "imnuri",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "G",
      "G7",
      "Dm",
      "Dm7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 64,
    "title": "Ma intorc si pasi-s grei",
    "slug": "ma-intorc-si-pasi-s-grei-64",
    "content": "   Em               G        \n1. Merg pe unduite caaaaaaaaaai\nC                     Em\nIncalciti sunt pasii mei\nRucsacul m-apasa greeeeeeeeeu\nIara eu prin munti mereu\n    D                    Em\nR:  Ma intorc si pasii-s grei\n    G            D  \n\tIa, hai, Ia, hai\n\tLas in urma muntii mei\n\tIa, hai, hai, hai\n\tMa intorc si pasii-s grei\n\tIa, hai, hai, hai\n\tMa gandesc numai la ei\n2. Muntii cat am strabatut\nSa m-opresc nu am putut\nInfruntand si ploi si vant\nVreau pe creste sa ajung\n\n3. Cerul arde-n curcubeu\nIara eu prin munti mereu\nRucsacul m-apasa greu\nIncalc&#239;t e drumul meu",
    "author": {
      "id": 30,
      "name": "Amurg",
      "slug": "amurg"
    },
    "author_id": 30,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "C",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 65,
    "title": "Ciobanas cu 300 de oi",
    "slug": "ciobanas-cu-300-de-oi-65",
    "content": "D           A           D\nCiobanas cu trei sute de oi,\n   D                   G          D\nCând vii si treci cu turma pe la noi,\n    G            A            D\nDe-i vedea pe mândra, draga mea,\nSpune-i ca m-am departat de ea.\n\nCând luna-apare dintre munti în sus,\nPleaca-ti mândro ochii cum ti-am spus,\nSpune-i numai lui ca ma iubesti\nSi-atunci mândro tot mai draga-mi esti.\n\nCând soarele rasare dintr-un negru nor,\nMa cuprinde mândro al tau dor,\nJale mi-e si nu te pot uita,\nDar n-am ce face c-asa-i soarta mea.",
    "author": {
      "id": 8,
      "name": "Folclor",
      "slug": "folclor"
    },
    "author_id": 8,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 66,
    "title": "Batranul refugiu",
    "slug": "batranul-refugiu-66",
    "content": "Am                                    Dm\n1.Departe în munti ascuns  printre stânci\n G                        C              E\nSe afla batrânul refugiu\nAcolo se întâlnesc acei ce iubesc\nPeretii de stînca si cerul.\n\n   Am                    Dm\nR:Nu-i nimeni sa-i înteleaga\nG                     C             E \nNu-i nimeni la fel ca ei, la fel ca noi\nDoar dorul în dulce leagan\nSa-i urce spre creste mereu.\n\n2. Mi-e inima-n furci, de vrei poti sa urci\nSa simti primul pas în perete\nSperanta apoi sa facem în doi\nSi-apoi tot mai sus printre creste.",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "G",
      "C",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 67,
    "title": "Ana lui Manole",
    "slug": "ana-lui-manole-67",
    "content": "  Em\n1.Voi ziditi în jurul meu\nDar aici în zid sunt eu\nD                        Em\nDar aici în zid sunt eu, sunt eu.\nHai, Manole, pune zid\nSa nu pot sa-l mai deschid\nHai îmbraca-ma în zid, zid greu.\n    G\nR:  Turla-mi soarbe capu-n ea\n\tD\n\tÎn altar e fruntea mea\n\tEm        D                Em\n\tOchii ei feresti vor sta, spre cer\n\tVoi lucrati si va e greu\n\tÎnsa de murit, mor eu\n\tJertfa voastra sunt chiar eu, eu pier.\n\n2.Pe oriunde sunt zidiri\nOmul meu, sa nu te miri\nLe-au întruchipat doi miri de rând.\nDara tu de-a pururi pleci\nEu ramân aici pe veci\nPrada caramizii reci, plângând.\n\n3.Sângele mi-i înca viu\nVoi nu stiti ca si eu stiu\nC-am sa mor dintr-un pariu stupid.\nHai Manole fii mai demn\nCum sa-ti faci aripi de lemn\nMi se face-a moarte semn în zid.\n \n4.Sa te-nchini când vei pleca\nSa nu uiti, sa uiti cumva\nCa-nauntru-i Ana ta, om crud.\nMila cum nu poti sa ai\nVoi plecati catre alt Rai\nEu din zid abia va mai aud.",
    "author": {
      "id": 31,
      "name": "Magda Pușcaș",
      "slug": "magda-puscas"
    },
    "author_id": 31,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "G",
      "Em",
      "C",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 68,
    "title": "Noapte la mare, noapte la munte",
    "slug": "noapte-la-mare-noapte-la-munte-68",
    "content": "   Am              Dm\n1. Noi n-am fost niciodata doi\n      G             C\n   Ci unul singur amandoi,\n      Am          Dm\n   Salbatic cuplu-nsingurat,\n      E           Am\n   Pe care timpul l-a uitat.\n\nR: Noapte la mare, noapte la mare,\n   Buzele tale au gust de sare,\n   Pielea-ti miroase a scoici si a soare, \n   Noapte la mare, noapte la mare.\n   Noapte la munte, noapte carpatina,\n   Buzele tale au gust de rasina,\n   Paru-ti miroase a flori si a fructe,\n   Noapte la munte, noapte la munte.\n\n2. Noapte la mare, noapte-nstelata,\n   Inima mea e o scoica furata,\n   Perla din ea e chiar dragostea mea,\n   Stai langa mine, tu esti a mea.\n\n3. Buzele tale pe buzele mele\n   In intunericul noptii-s mai grele\n   Bratele tale, flacari in noapte,\n   Roiuri de stele, roiuri de soapte.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "G",
      "C",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 69,
    "title": "Tincturi de frunze",
    "slug": "tincturi-de-frunze-69",
    "content": "   G                     Em\n1. Nu pot sa stau drept, merg cu toamna-n piept\nC                 D\nVantu-n toate ranile ma doare\nG                 Em\nSi pe orice drum, ca-ntr-un vers postum\nC                  D\nVine frunza in intampinare\n\nR: Si-am sa-ti scriu scrisori pe tulpini de flori\nDe lumina stelelor patrunse\nSi-un roman sa-ti scriu, folosind pe viu\nSub umbra de nuc, tincturi de frunze\nTincturi de frunze\n\n2. Putredul accent a lovit atent\nFiecare fir de iarba verde\nClipe indigo, care incotro\nSa n-avem motive de-a ne pierde\n\n3. Frunze iti trimit, scrise cu grafit\nIar din albul iernii care vine\nCe sa-ti mai insir, frunzele-n delir\nTe iubesc si ma gandesc la tine\n\n4. Nu vad pe unde merg, frunze cad din cer\nSi in tropot mi se-aude mersul\nScriu scrisori pe foi, lacrimez in ploi\nIntr-un liber schimb cu universul\n\n5. Te iubesc profund, nu ma mai ascund\nIn mine e toamna si ma doare\nCe sa-ti spun acum, cad frunze pe drum\nTe astept cu multa nerabdare",
    "author": {
      "id": 32,
      "name": "Ursul Trubadur",
      "slug": "ursul-trubadur"
    },
    "author_id": 32,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Em",
      "C",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 70,
    "title": "Numai noi",
    "slug": "numai-noi-70",
    "content": "   Em          D\n1. Numai noi, suntem împreună\n   Em         D        \n   Numai noi sub clarul de lună\n   G          D           Em\n   Suntem doi fericiţi în munte\n   Tu şi eu cuplul fericirii\n   Eu şi tu vis al împlinirii\n   Iar în păr porţi doar flori de munte.\n\tG                   D  \nR:  Vom fi singuri prin văi şi pe creste\n\tDin noi doi va rămâne o poveste\n\tG            D            Em\n\tÎmpreună vom fi şi ne vom iubi.\n2. Numai noi, câtă poezie\n   Numai noi, noaptea e târzie\n   Focul doar mai trosneşte parcă\n   Sunt al tău, nu mai sunt cuvinte\n   Eşti a mea, ne iubim pe munte\n   Pat de flori, şi-mpărţim o soartă\n3.Jos sunt flori, pe cer numai stele\n   Ne iubim martore-s doar ele\n   Adormim ca şi doi copii\n   Numai vis sub clarul de lună\n   Numai vis, suntem împreună\n   Amândoi plini de bucurie.\n\n(interpretat si de Karma)",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "D",
      "Am",
      "B7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 72,
    "title": "Delirul",
    "slug": "delirul-72",
    "content": "  Am                   Dm\n1.Curând va fi o noapte lungă\n     G                C  \n  şi fără tine-mi va fi greu\n  Am                   Dm\n  Iubita mea vino la mine\n  E                   Am\n  Te aştept să vii de Anul Nou.\n   Am               Dm\nR: Râd şi plâng şi te strig delirând\n    G                 C\n   E soare e ploaie e cald şi e vânt \n      Am                  Dm   \n   Din somn mă trezesc şi tresar speriat\n      E                  Am  \n   Dar nu-i nimic doar am visat.\n\n2.De vrei să vii curând cu munţii\n  La marea mea cu valuri verzi\n  Să ne jurăm credinţă pururi\n  Să nu te pierd să nu mă pierzi.\n\n3.Tu nu ai timp tu nu ai suflet\n  Nimic din tine n-ai să-mi dai\n  Când vii şi pleci şi nu rămâne\n  Nimic din serile de mai.\n\n4.Când te-am văzut ultima oară\n  Ah, ce frumos tu m-ai privit\n  Nu pot să uit a ta privire\n  şi parc-o văd şi parc-o simt.\n\n5.şi de vei face-o nouă punte\n  Să n-o arunci în amintiri\n  şi lasă-mă să vin la tine\n  Cu braţul plin de trandafiri.\n\n6.Curând va fi o noapte lungă\n  şi fără tine-mi va fi greu\n  Iubirea mea te rog revino\n  Te-aştept să te întorci mereu.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E",
      "G",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 74,
    "title": "Sculați, boieri mari!",
    "slug": "sculati-boieri-mari-74",
    "content": "Intro: C F C F C G C\n\n\nC        G        C      F\nSculaţi, sculaţi, boieri mari,\nC       G     C\nCristos s-a născut,\nC        F      C       F\nSculaţi, voi, români plugari,\nC       G     C\nCristos s-a născut!\n\nCă vă vin colindători\nCristos s-a născut,\nNoaptea, pe la cântători,\nCristos s-a născut.\n\nŞi v-aduc pe Dumnezeu\nCristos s-a născut,\nSă vă mântuie de rău\nCristos s-a născut.\n\nDumnezeu adevărat,\nCristos s-a născut,\nSoare-n raze luminat\nCristos s-a născut.\n\nEl vă zice ”Să trăiți”,\nCristos s-a născut,\nÎntr-un ”Mulţi ani fericiţi!”,\nCristos s-a născut.\n\nȘi ca pomii să-nfloriți,\nCristos s-a născut\nȘi ca ei să-mbătrâniți,\nCristos s-a născut.\n",
    "author": {
      "id": 34,
      "name": "Dida Drăgan",
      "slug": "dida-dragan"
    },
    "author_id": 34,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "G",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 75,
    "title": "O brad frumos",
    "slug": "o-brad-frumos-75",
    "content": "G  C    C       G  C   C\nO, brad frumos, o brad frumos,\nC G C F   G  G  C\nCu cetina tot verde.\nC  C    C  F F  G  F  F\nTu esti copacul credincios,\nF  F  F  G  G    F   C \nCe frunza nu si-o pierde,\nG  C    C       G  C   C\nO, brad frumos, o brad frumos,\nC G C F   G  G  C\nCu cetina tot verde.\n\nO, brad frumos, o brad frumos,\nVerdeata ta imi place.\nCand o revad sunt bucuros\nSi vesel ea ma face.\nO, brad frumos, o brad frumos,\nVerdeata ta imi place.\n\nO, brad frumos, o brad frumos,\nCu frunza neschimbata.\nMa mangai si ma faci voios\nSi ma-ntaresti indata.\nO, brad frumos, o brad frumos,\nCu frunza-ti neschimbata.",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 76,
    "title": "Florile dalbe",
    "slug": "florile-dalbe-76",
    "content": "Am            Dm  Am\nScoală gazdă din pătuţ\nAm       G Am\nFlorile dalbe\nAm           Dm  Am\nşi ne dă un colăcuţ\n          Dm  F   Am\nFlorile, florile dalbe\n\nAm            Dm  Am\nCă mamuca nu o făcut\nAm       G Am\nFlorile dalbe\nAm           Dm  Am\nSită rară n-o avut\n          Dm  F   Am\nFlorile, florile dalbe\nAm            Dm  Am\nPăna  sită o căpătat\nAm       G Am\nCovata i s-o crăpat\nAm            Dm  Am\nL-o sfădit mama pe tata\nAm       G Am\nDe ce s-o crăpat covata\nAm            Dm  Am\nCând covata o lipit\nAm       G Am\nCuptioru li s-o urnit\nAm            Dm  Am\nCând cuptoru l-o tocmit\nAm       G Am\nAnul Nou o şi venit\n\nAm           Dm   Am\nFlorile, florile dalbe\nAm        Dm  F   Am\nFlorile, florile dalbe",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "G",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 77,
    "title": "Trei păstori",
    "slug": "trei-pastori-77",
    "content": "2/4 & 3/4 (*)\n\nD(2/4)D(3/4) D(2/4)\nTrei pastori se intalnira\nG (2/4)  D(3/4) D(2/4) \nTrei pastori se intalnira\nG(2/4) D(2/4)  A7(2/4) D(2/4)\nRaza soarelui, floarea soarelui\nG(2/4) A7(3/4) D(2/4)\nSi asa se sfatuira:\n\nD                    D \nHaideti fratilor sa mergem\nG                    D  \nHaideti fratilor sa mergem\nG         D         A7         D\nRaza soarelui, floarea soarelui\nG       A7      D\nFloricele sa culegem.\n\nD                    D \nSi sa facem o cununa\nG                    D \nSi sa facem o cununa\nG         D         A7         D\nRaza soarelui, floarea soarelui\nG       A7      D\nS-ompletim cu voie buna.\n\nD                    D \nSi s-o ducem lui Cristos\nG                    D \nSi s-o ducem lui Cristos\nG         D         A7         D\nRaza soarelui, floarea soarelui\nG       A7      D\nSa ne fie de folos.\n\n(*) Dificultatea melodiei (dar si frumusețea ei) consta în faptul ca este un mix intre masurile 2/4 si 3/4. Am încercat sa marchez trecerile în strofa 1.",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
      "A7",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "U",
          "U"
        ],
        "timeSignature": "3/4",
        "name": "Vals"
      }
    ],
    "views": 0
  },
  {
    "id": 78,
    "title": "Am plecat să colindăm",
    "slug": "am-plecat-sa-colindam-78",
    "content": "G\nAm plecat să colindăm\nDomn, Domn, să-nălțăm!\nD             G\nCând boierii nu-s acasă\nD           G\nDomn, Domn să-nălțăm!\n\nG\nȘi-au plecat la vânătoare\nDomn, Domn să-nălțăm!\nD         G\nSă vâneze căprioare\nD          G\nDomn, Domn să-nălțăm!\n\nG\nCăprioare n-au vânat\nDomn, Domn să-nălțăm\nD              G\nȘi-au vânat un iepuraș\nD          G\nDomn, Domn să-nălțăm!\n\nG\nSă facă din blana lui\nDomn, Domn să-nălțăm!\nD               G\nVeștmânt frumos Domnului\nD          G\nDomn, Domn să-nălțăm!\n",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 79,
    "title": "Linu-i lin",
    "slug": "linu-i-lin-79",
    "content": "Capo III\n\n\nIntro: D G / D G A / D\n\n\nD                  G\nLinu-i lin şi iară lin,\n                  D\nBate vântul cât e lin,    \nA                 D\nFrunză verde de mălin,\n                   G\nLinu-i lin şi iară lin,\n                  D\nBate vântul cât e lin,    \nA                 D\nFrunză verde de mălin.\n\n\n         A      D     A\nSculaţi, gazde, nu durmiţi,\nD       A      D     A\nCă nu-i vremea de durmit,\nD                  G\nLinu-i lin şi iară lin,\n                  D\nBate vântul cât e lin,    \nA                 D\nFrunză verde de mălin,\n                   G\nLinu-i lin şi iară lin,\n                  D\nBate vântul cât e lin,    \nA                 D\nFrunză verde de mălin.\n\n\nCă-i vremea de săsculat,\nCasăle de aşăzat,\nLinu-i lin şi iară lin,\nBate vântul cât e lin,    \nFrunză verde de mălin,\nLinu-i lin şi iară lin,\nBate vântul cât e lin,    \nFrunză verde de mălin.\n\n\nPă la uşă cu brânduşă,\nLa fereşti cu flori domneşti,\nLinu-i lin şi iară lin,\nBate vântul cât e lin,    \nFrunză verde de mălin,\nLinu-i lin şi iară lin,\nBate vântul cât e lin,    \nFrunză verde de mălin.\n\n\nȘi colinda nu-i mai multă,\nSă trăia cine-o ascultă,\nLinu-i lin şi iară lin,\nBate vântul cât e lin,    \nFrunză verde de mălin,\nLinu-i lin şi iară lin,\nBate vântul cât e lin,    \nFrunză verde de mălin.\n",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 80,
    "title": "Flori de măr",
    "slug": "flori-de-mar-80",
    "content": "Intro: G D G\n\n\nG                                        D\nAm venit aici, la voi, am venit aici, la voi,\n                G                    D   G\nCum e datina la noi, cum e datina la noi.\n\n\nG                          D                 G\nSculați gazde, nu dormiți, vremea e să vă treziți,\n                           D                 G\nSculați gazde, nu dormiți, vremea e să vă treziți,\n\nCasa să vi-o aranjați, flori de măr,\n                        D        G\nMasa să vi-o încărcați, flori de măr,\n\nCasa să vi-o aranjați, flori de măr,\n                        D        G\nMasa să vi-o încărcați, flori de măr.\n\n\nNoi umblăm a colinda, pe la casa altuia,\nNoi umblăm a colinda, pe la casa altuia,\nSă trăiți, să-ntineriți, flori de măr,\nÎn mulți ani să-mbătrâniți, flori de măr,\nSă trăiți, să-ntineriți, flori de măr,\nÎn mulți ani să-mbătrâniți, flori de măr.\n\n\nȘi la anul om veni, numai dacă ni-ți pofti\nȘi la anul om veni, numai dacă ni-ți pofti\nȘi mai multe vom ura, flori de măr,\nUn cocuț dacă ni-ți da, flori de măr\nȘi mai multe vom ura, flori de măr,\nUn cocuț dacă ni-ți da, flori de măr.\n\n\nG                                             D                          \nȘi colinda nu-i mai multă și colinda nu-i mai multă,\n                  G                         D                   \nSă trăiască cine-ascultă, să trăiască cine-ascultă\nG                                  D             \nȘi colinda-i atâta și colinda-i atâta,\n                   G                      D  G                                         \nCine-ascultă să trăia, cine-ascultă să trăia.\n",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 81,
    "title": "Deschide usa crestine",
    "slug": "deschide-usa-crestine-81",
    "content": "S. Hrusca totdeauna canta varianta asta. Succes\n\nE            A\nDeschide usa crestine\nE            B7\nDeschide usa crestine\nA           E\nCa venim si noi la tine\nB7                 E\nLa multi ani multi ani cu bine\n\nNoi la Viflaim am fost\nNoi la Viflaim am fost\nUnde s-a nascut Hristos\nLa multi ani multi ani cu bine\n\nSi am vazut si pe-a sa mama\nSi am vazut si pe-a sa mama\nPe care Maria o cheama \nLa multi ani multi ani cu bine\n\nCum umbla din casa-n casa\nCum umbla din casa-n casa\nCa pe fiul sau sa-l nasca \nLa multi ani multi ani cu bine\n\nUmbla-n jos si umbla-n sus\nUmbla-n jos si umbla-n sus\nCa sa-l nasca pe Iisus\nLa multi ani multi ani cu bine\n\nUmbla-n sus si umbla-n jos\nUmbla-n sus si umbla-n jos\nCa sa-l nasca pe Hristos\nLa multi ani multi ani cu bine\n\nTot umbland gasi apoi\nTot umbland gasi apoi\nUn staul mandru de oi \nLa multi ani multi ani cu bine\n\nIngerii din cer coboara\nIngerii din cer coboara\nStaulul de-l inconjoara \nLa multi ani multi ani cu bine\n\nIngerii cu flori in mana\nIngerii cu flori in mana \nImpletesc mandra cununa\nLa multi ani multi ani cu bine\n\nPa cununa-i scris frumos\nPa cununa-i scris frumos\nAstazi s-a nascut Hristos\nLa multi ani multi ani cu bine\n\nPe cununa-i scris asa\nPe cununa-i scris asa\nCa s-a nascut Mesia\nLa multi ani multi ani cu bine\n\nCare cu puterea sa\nCare cu puterea sa\nVa imparati lumea \nLa multi ani multi ani cu bine",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "E",
      "A",
      "B7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 82,
    "title": "Măruț mărgăritar",
    "slug": "marut-margaritar-82",
    "content": "Capo III\n\n\nIntro: D   x8\n\n\nD\nNoi umblăm să colindăm,\n\nMăruț mărgăritar,\n                   A\nNoi umblăm să colindăm\nD\nPă la curți de boieri mari,\n\nMăruț mărgăritar,\n                      A\nPă la curți de boieri mari,\nD\nDa’ boierii nu-s acas’,\n\nMăruț mărgăritar,\n                  A\nDa’ boierii nu-s acasă,\nD\nCă-s plecați la vânătoare,\n\nMăruț mărgăritar,\n                    A\nCă-s plecați la vânătoare,\nD\nSă vâneze căprioare,\n\nMăruț mărgăritar,\n               A\nSă vâneze căprioare,\nD\nCăprioare n-o’ aflat\n\nMăruț mărgăritar,\n                A\nCăprioare n-o’ aflat,\nD\nNuma-un pui de iepuraș,\n\nMăruț mărgăritar,\n                   A\nNuma-un pui de iepuraș,\n D\n’Tinsă pușca să-l împuște,\n\nMăruț mărgăritar\n                 A\nȘi săjata să-l săjete,\nD\nHop-hop-hop, nu mă țîntire,\n\nMăruț mărgăritar,\n                    A\nCă io nu-s ce par a fire,\nD\nCă-s Ionu’, Sânt’ Ion,\n\nMăruț mărgăritar,\n                   A\nCă-s Ionu,’ Sânt’ Ionu’,\nD\nNănașu’ lu’ Dumnezău,\n\nMăruț mărgăritar,\n                 A\nNănașu’ lu’ Dumnezău\nD\nȘi m-o blăstămat Maica,\n\nMăruț mărgăritar\n                    A\nȘi m-o blăstămat Maica\nD\nSă fiu fiară de pădure,\n\nMăruț mărgăritar,\n                  A\nSă fiu fiară de pădure,\nD\nNouă ani și nouă luni,\n\nMăruț mărgăritar\n                 A\nȘi p-atâtea săptămâni,\nD\nDac-acelea ’plini-le-oi\n\nMăruț mărgăritar,\n                   A\nJos, la țară, lăsa-m-oi,\nD\nBiserici deschide-mi-oi,\n\nMăruț mărgăritar,\n                   A\nSlujbe mândre face-voi,\nD\nSă fii, gazdă, sănătoasă,\n\nMăruț mărgăritar,\n                    A\nC-ai primit colinda noastră\nD\nȘi la anu’ când vinim,\n\nMăruț mărgăritar,\n                   A\nMai bogați să vă găsîm\nD\nȘi la anu’ când vinim,\n\nMăruț mărgăritar,\n                   A\nMai bogați să vă găsîm.\n\n\nOutro: D   x5",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 83,
    "title": "Steaua sus răsare",
    "slug": "steaua-sus-rasare-83",
    "content": "No Capo!!!\n\nAm\nSteaua sus răsare \nCa o taina mare\nDm             Am\nSteaua strălucește\nE              Am\nȘi lumii vestește\nE              Am \nȘi lumii vestește \n\nCa astăzi Curata \nPreanevinovata \nFecioara Maria \nNaște pe Mesia \nNaște pe Mesia \n\nMagii cum zăriră \nSteaua și porniră\nMergând după rază\nPe Hristos sa-l vază\nPe Hristos sa-l vază \n\nȘi dacă porniră \nÎndată-L găsiră\nLa Dânsul intrară\nȘi se închinară \nȘi se închinară \n\nCu daruri gătite \nLui Hristos menite \nDucând fiecare \nBucurie mare\nBucurie mare \n\nCare bucurie \nȘi aici sa fie \nDe la tinerețe \nPan-la bătrânețe \nPan-la bătrânețe",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 84,
    "title": "Scoala gazda din patut",
    "slug": "scoala-gazda-din-patut-84",
    "content": "Intro: Am E\n\nj  s j s s   j s j s s  <---- Bataia este aceeasi mereu.\n\nAm            G   Am        \nScoala gazda din patut\n  Am    G  Am\nFlorile dalbe,\n Am         G   Am\nSi ne da un colacut\n G       E       Am\nFlorile ,florile dalbe.\nAm         G   Am                    \nCa mamuca n-o facut\n  Am    G  Am                    \nFlorile dalbe,\nAm         G   Am                    \nSita rara n-o avut\n G       E       Am                   \nFlorile ,florile dalbe.",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "G",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 85,
    "title": "Flori de mar",
    "slug": "flori-de-mar-85",
    "content": "G                D                     G\nAm venit aici la voi, am venit aici la voi\n                D                    G\nCum e datina la noi, cum e datina la noi\nG             D7    G     C           D7    G\nSculati gazde nu durmiti, vremea e sa va treziti\nG             D7    G     C           D7    G\nSculati gazde nu durmiti, vremea e sa va treziti\nG                D7    C     D7 G\nCasa sa vi-o maturati, flori de mar\nG                 D7    C     D7 G\nMasa sa vi-o încarcati, flori de mar.\nG                D7    C     D7 G\nCasa sa vi-o maturati, flori de mar\nG                 D7    C     D7 G\nMasa sa vi-o încarcati, flori de mar.\n\nG            D7   G   C           D7   G\nNoi umblam a colinda, di l-o casa la alta\nG            D7   G   C           D7   G\nNoi umblam a colinda, di l-o casa la alta\nG                  D7   C     D7 G\nSi venim cu Domnul bun, flori de mar\nG               D7    C     D7 G\nCa e sara de Craciun, flori de mar.\nG                  D7   C     D7 G\nSi venim cu Domnul bun, flori de mar\nG               D7    C     D7 G\nCa e sara de Craciun, flori de mar.\n\nG          D7   G   C          D7    G\nSi la anul om zini, numai daca ni-ti pofti\nG          D7   G   C          D7    G\nSi la anul om zini, numai daca ni-ti pofti\nG                D7   C     D7 G\nSi mai multe vom ura, flori de mar\nG                   D7  C     D7 G\nUn pocut daca ni-ti da, flori de mar\nG                D7   C     D7 G\nSi mai multe vom ura, flori de mar\nG                   D7  C     D7 G\nUn pocut daca ni-ti da, flori de mar\n\nG                   D                          G\nSi colinda nu-i mai multa, si colinda nu-i mai multa\n                   D                         G\nSa traiasca cine-asculta, sa traiasca cine-asculta\nG               D                   G\nSi colinda-i atâta, si colinda-i atâta\n                   D                      G\nCine-asculta sa traia, cine-asculta sa traia.",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "D7",
      "C",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 86,
    "title": "Florile dalbe",
    "slug": "florile-dalbe-86",
    "content": "Intro: Em Am Em\n\nEm           Am         Em      Am\nScoala gazda din patut, florile dalbe\nEm          Am       Em       Am      Em\nSi ne da un colacut, florile, florile dalbe.\n\nEm        Am         Em      Am\nCa mamuca n-o facut, florile dalbe\nEm       Am        Em       Am      Em\nSita rara n-o avut, florile, florile dalbe.\n\nEm             Am       Em      Am\nPe când sât' o capatat, florile dalbe\nEm       Am          Em       Am      Em\nCovata i s-o crepat, florile, florile dalbe.\n\nEm         Am            Em      Am\nL-o sfadit mama pe tata, florile dalbe\nEm           Am          Em      Am      Em\nDi ce s-o crepat covata, florile florile dalbe.\n\nEm          Am       Em      Am\nCând covata o lipit, florile dalbe\nEm           Am         Em       Am      Em\nCuptorul l-i s-o urnit, florile, florile dalbe.\n\nEm            Am        Em      Am\nCând cuptorul a tomnit, florile dalbe\nEm         Am        Em       Am      Em\nAnul nou a si venit, florile, florile dalbe.",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 87,
    "title": "O lume minunată",
    "slug": "o-lume-minunata-87",
    "content": "Intro: C   x4\n\n\n              C\n      Refren: E-o lume minunată, în care veți găsi\n                      G\n              Numai copii,\n\n              O lume cu mult soare și mii de jucării\n              G7       C\n              Pentru copii.\n\n\n              În lumea cu povești și flori veți întâlni\n              Numai copii\n              Și-o lume-a inocenței, păstrați-o, orice ar fi,\n              Pentru copii!\n\n\nC\nIeri am fost și noi copii,\n    D\nDar timpul ne-a schimbat,\n   G\nÎn viață am pornit și vise-am împlinit\n C               G\nAșa, cum ne-am dorit!\n\n\nC\nGânduri bune câte-am strâns\n   D\nȘi tot ce-am învățat,\n  G\nCopiilor să dăm iubirea ce-o purtăm,\n     C            G\nCe-i bun să le arătăm!\n\n\n      Refren: E-o lume minunată, în care veți găsi\n              Numai copii,\n              O lume cu mult soare și mii de jucării\n              Pentru copii.\n\n\n              În lumea cu povești și flori veți întâlni\n              Numai copii\n              Și-o lume-a inocenței, păstrați-o, orice ar fi,\n              Pentru copii!\n\n\nIeri am fost și noi copii,\nDar timpul ne-a schimbat,\nÎn viață am pornit și vise-am împlinit\nAșa, cum ne-am dorit!\n\n\nGânduri bune câte-am strâns\nȘi tot ce-am învățat,\nCopiilor să dăm iubirea ce-o purtăm,\nCe-i bun să le arătăm!\n\n\n            E7\nInterludiu: Ce zâmbet poate fi \n                Am\n            Mai sincer, mai curat,\n            D7\n            Ce ochi știu a vorbi \n             G\n            Atât de-adevărat?\n\n\n      Refren: E-o lume minunată în care poți găsi\n              Numai copii,\n              O lume cu mult soare și mii de jucării\n              Pentru copii.\n\n\n              În lumea cu povești și flori veți întâlni\n              Numai copii\n              Și-o lume-a inocenței, păstrați-o, orice ar fi,\n              Pentru copii!\n\n\nInterludiu: C# G# G#7 C#\n\n\n              C#\n      Refren: La, la, la, la, la, la, la, la, la, la, la, la, la, \n                          G#\n              La, la, la, la,\n\n              La, la, la, la, la, la, la, la, la, la, la, la, la,\n              G#7         C#\n              La, la, la, la.\n\n\n              E-o lume minunată, în care veți găsi\n              Numai copii,\n              O lume cu mult soare și mii de jucării\n              Pentru copii.\n\n\n              În lumea cu povești și flori veți întâlni\n              Numai copii\n              Și-o lume-a inocenței, păstrați-o, orice ar fi,\n              Pentru copii!",
    "author": {
      "id": 36,
      "name": "Mihai Constantinescu",
      "slug": "mihai-constantinescu"
    },
    "author_id": 36,
    "categories": [
      {
        "id": 12,
        "name": "Cântece pentru copii",
        "slug": "cantece-pentru-copii",
        "description": ""
      },
      {
        "id": 16,
        "name": "Muzică ușoară",
        "slug": "muzica-usoara",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "G",
      "G7",
      "D",
      "E7",
      "Am",
      "D7",
      "G#7",
      "C#",
      "G#"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 88,
    "title": "Mă Dusei",
    "slug": "ma-dusei-88",
    "content": "Capo 5\n\nAm7 C Gsus4 D7sus4\n\nAm7   C    Gsus4    D7sus4\nMă dusei,        și mă dusei să\n\nAm7       C    Gsus4    D7sus4\ntrec la Olt\n\nAm7   C    Gsus4    D7sus4\nMă dusei,        și mă dusei să\n\nAm7       C    Gsus4    D7sus4\ntrec la Olt\n\nF         G         Am           C\nCu a mea, cu a mea, cu a mea mândră cu tot\nF            G                 Am\nTra-la-la-la-la-la-la-la-la-la-la\nF         G         Am           C\nCu a mea, cu a mea, cu a mea mândră cu tot\nF            G                 Am\nTra-la-la-la-la-la-la-la-la-la-la\n\n(și tot așa)\n\nȘi podarul, și podaru-mi cere un zlot\nȘi podarul, și podaru-mi cere un zlot\nȘi pe-a mea, și pe-a mea, și pe-a mea mândră de tot\nTra-la-la-la-la-la-la-la-la-la-la\nȘi pe-a mea, și pe-a mea, și pe-a mea mândră de tot\nTra-la-la-la-la-la-la-la-la-la-la\n\nDar decât, dar decât să-i dau un zlot\nDar decât, dar decât să-i dau un zlot\nMai bine, mai bine, mai bine îl trec înot\nTra-la-la-la-la-la-la-la-la-la-la\nMai bine, mai bine, mai bine trec Oltu' înot\nTra-la-la-la-la-la-la-la-la-la-la\n\nUnde-o fi, și unde-o fi Oltul mai mare\nUnde-o fi, și unde-o fi Oltul mai mare\nM-o trece, m-o trece, m-o trece mândra-n spinare\nTra-la-la-la-la-la-la-la-la-la-la\nM-o trece, m-o trece, m-o trece mândra-n spinare\nTra-la-la-la-la-la-la-la-la-la-la\n\nȘi unde-o fi, și unde-o fi mai mititel\nȘi unde-o fi, și unde-o fi mai mititel\nO trec eu, o trec eu, o trec eu că-s voinicel\nTra-la-la-la-la-la-la-la-la-la-la\nO trec eu, o trec eu, o trec eu că-s voinicel\nTra-la-la-la-la-la-la-la-la-la-la\n\nCu a mea, cu a mea, cu a mea mândră cu tot\nTra-la-la-la-la-la-la-la-la-la-la\nCu a mea, cu a mea, cu a mea mândră cu tot\nTra-la-la-la-la-la-la-la-la-la-la",
    "author": {
      "id": 37,
      "name": "Bulz Brotherz",
      "slug": "bulz-brotherz"
    },
    "author_id": 37,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      },
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "F",
      "G",
      "Am",
      "C",
      "Am7",
      "Gsus4",
      "D7sus4"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 89,
    "title": "Cântă mahalaua",
    "slug": "canta-mahalaua-89",
    "content": "Intro: Dm\n\n\nDm\nTrage-te încoa, vreau să-ți spun ceva:\n   A#\nDistracția și vinul sunt mai bune-n mahala,\nDm \nSufletul deschis, dansul mai încins\n   A#          A\nȘi cheful iese mult mai aprins,\nDm\nNoaptea mai cu viață și mai cu dulceață, \n    A#\nMai plină de păcate până-n zori de dimineață,\n  Dm\nFemeia mai femeie, plăcerea mai plăcere,\n    A#            A\nIar dragostea mai fără perdele! \n\n\n              Dm              Gm\n      Refren: Cântă mahalaua, tremură podeaua, \n              A#  A         Dm   A\n              E paranghelie grea, \n              Dm               Gm\n              Urcă-te pe masă, viața-i mai frumoasă, \n              A#     A            Dm A\n              Când petreci la mahala! \n\n\nDacă nu mă crezi, hai, vino și-ai să vezi, \nLa orice colț de stradă o să dai peste dovezi:\nPetreceri duium, grătar pe cărbuni\nȘi lăutarii cântă nebuni, \nHaide, că poți, fă cinste la toți, \nDecât să-mbătrânești cu averea la chiloți,\nBea-o cu noi, că banii-s nasoi,\nCând ții de ei, te bagă-n noroi! \n\n\n      Refren: Cântă mahalaua, tremură podeaua, \n              E paranghelie grea, \n              Urcă-te pe masă, viața-i mai frumoasă, \n              Când petreci la mahala! \n\n\nInterludiu: Dm\n\n\nSimți că iei foc, nu mai sta pe loc,\nBate din picioare și prinde-te la joc, \nOrice ar fi, nu te opri,\nNici dacă se crapă de zi,\nSimte-te bine, fără de rușine\nȘi lasă veselia să intre în tine,\nNu te lăsa, ține-o tot așa,\nCă lumea întreagă-i o mahala. \n\n\n              Dm              Gm\n      Refren: Cântă mahalaua, tremură podeaua, \n              A#  A         Dm   A\n              E paranghelie grea, \n              Dm               Gm\n              Urcă-te pe masă, viața-i mai frumoasă, \n              A#     A            Dm A\n              Când petreci la mahala! \n\n\n              Dm              Gm\n              Cântă mahalaua, tremură podeaua, \n              A#  A         Dm   A\n              E paranghelie grea, \n              Dm               Gm\n              Urcă-te pe masă, viața-i mai frumoasă, \n              A#     A            Dm \n              Când petreci la mahala! \n\n",
    "author": {
      "id": 38,
      "name": "White Mahala",
      "slug": "white-mahala"
    },
    "author_id": 38,
    "categories": [
      {
        "id": 19,
        "name": "Experimental",
        "slug": "experimental",
        "description": ""
      },
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A",
      "Gm",
      "A#",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 90,
    "title": "Atat de frageda",
    "slug": "atat-de-frageda-90",
    "content": "Intro:\n\nE A E B \nE A E B E\n\nN.C.                E      A E\nAbia atingi covorul moale,\n                  B     \nMatasa suna sub picior,\nA                        E   A\nSi de la crestet pâna-n poale\n B                 E\nPlutesti ca visul de usor.\nA                        E    A\nSi de la crestet pâna-n poale\n B                 E       A E B\nPlutesti ca visul de usor.\n\nDin încretirea lungii rochii\nRasai ca marmura în loc \nS-atârna sufletu-mi de ochii\nCei plini de patimi si noroc.\n\n        E\nO, vis ferice de iubire,\n         B        \nMireasa blânda din povesti,\n         E\nNu mai zâmbi! A ta zâmbire\n          G#\nMi-arata cât de dulce esti,\n               A\nCum poti cu-a farmecului noapte\n             B\nSa-ntuneci ochii mei pe veci,\n            A\nCu-a gurii tale calde soapte,\n        B\nCu-mbratisari de brate reci.\n\nDeodata trece-o cugetare,\nUn văl pe ochii tai fierbinti:\nE-ntunecoasa renuntare,\nE umbra dulcilor dorinti.\n\nTe duci, am înteles prea bine\nSa nu ma tin de pasul tau,\nPierduta vecinic pentru mine,\nMireasa sufletului meu!\nCa te-am privit e a mea vina\nSi vecinic n-o sa mi-o mai iert,\nSpasi-voi visul de lumina\nTinzându-mi dreapta în deşert.\n\nS-o sa-mi rasai ca o icoana\nA pururi verginei Marii,\nPe fruntea ta purtând coroana –\nUnde te duci? Când o sa vii?\n\n     A           E\nUnde te duci? Când o sa vii?\n     A            E\nUnde te duci? Când o sa vii?",
    "author": {
      "id": 39,
      "name": "Mondial",
      "slug": "mondial"
    },
    "author_id": 39,
    "categories": [
      {
        "id": 16,
        "name": "Muzică ușoară",
        "slug": "muzica-usoara",
        "description": ""
      },
      {
        "id": 20,
        "name": "Eminescu",
        "slug": "eminescu",
        "description": ""
      }
    ],
    "chords": [
      "E",
      "A",
      "B",
      "G#"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 91,
    "title": "Trenule, mașină mică",
    "slug": "trenule-masina-mica-91",
    "content": "Intro: G D G / G Am B7 Em\n\n\nEm\nFoaie verde și-o sipică,\n\nFoaie verde și-o sipică,\nG\nTrenule, mașină mică,\n\nUnde-l duci pe Ionică?\nD                     G\nMărioara lui nenicu’, măi-măi,\n\nTrenule, mașină mică,\nAm\nUnde-l duci pe Ionică?\nB7                    Em\nMărioara lui nenicu’, măi-măi!\n\n\nTu mi-l duci și-l ocolești,\nTu mi-l duci și-l ocolești\nDin Craiova la Pitești\nȘi-l dai jos la București,\nMărioara lui nenicu’, măi-măi,\nDin Craiova la Pitești\nȘi-l dai jos la București,\nMărioara lui nenicu’, măi-măi!\n\n\nInterludiu: G D G / G Am B7 Em\n\n\nTrenule, n-ai avea parte,\nTrenule, n-ai avea parte\nDe șuruburile toate\nȘi de șina de sub roate,\nMărioara lui nenicu’, măi-măi,\nC-ai dus pe neica departe,\nC-ai dus pe neica departe,\nMărioara lui nenicu’, măi-măi!\n\n\nTrenule, de când l-ai dus,\nTrenule, de când l-ai dus,\nEu întruna am tot plâns,\nEu întruna am tot plâns,\nMărioara lui nenicu’, măi-măi,\nTrenule, de când l-ai luat,\nEu întruna am oftat,\nMărioara lui nenicu’, măi-măi!\n\n\nInterludiu: G D G / G Am B7 Em\n\n\nȘi iar verde de-o sipică,\nTrenule, mașină mică,\nUnde-l duci pe Ionică,\nUnde-l duci pe Ionică?\nMărioara lui nenicu’, măi-măi,\nCă-l tot duci și-l ocolești\nDin Craiova la Pitești\nMărioara lui nenicu’, măi-măi!\n\n\nCă-l tot duci și-l ocolești\nDin Craiova la Pitești,\nMărioara lui nenicu’, măi-măi,\nȘi-l dai jos la București\nȘi-l dai jos la București\nMărioara lui nenicu’, măi-măi!",
    "author": {
      "id": 40,
      "name": "Maria Tănase",
      "slug": "maria-tanase"
    },
    "author_id": 40,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      },
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "D",
      "Am",
      "B7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 92,
    "title": "Când s-o-mpărțit norocu'",
    "slug": "cand-s-o-mpartit-norocu-92",
    "content": "(de pe albumul \"Cântece din Maramureș\")\n\nÎn original, Ducu Bertzi cântă această melodie cu capodastru pe III\n\nAm                E        Am  G\nMăicuța când m-o făcut, măi dorule\nC                  G\nMăicuța când m-o făcut\nAm                  Dm\nFoc în vatră n-o avut\nAm                    E      Am\nFoc în vatră n-o avut, măi dorule\n\nSo sculat și-o făcut foc, măi dorule\nSo sculat și-o făcut foc\nȘi mi-o ars al meu năroc\nȘi mi-o ars al meu năroc, măi dorule\n\nAşa-mi vine câteodată, dorule\nAsa-mi vine câteodată\nSă dau cu cuţitu-n piatră\nSă dau cu cuţitu-n piatră, dorule\n\nDin piatră să iasă foc, măi dorule\nDin piatră să iasă foc\nDacă-n viaţă n-am noroc\nDacă-n viaţă n-am noroc, măi dorule\n\nCând s-o-mpărţit norocu, măi dorule\nCând s-o-mpărţit norocu\nFost-am eu dus la lucru\nFost-am eu dus la lucru, măi dorule\n\nȘi la toţi le-o dat cu carul, dorule\nȘi la toţi le-o dat cu carul\nNumai mie cu păharul\nNumai mie cu păharul, dorule\n\nNici acela n-o fost plin, măi dorule\nNici acela n-o fost plin\nJumătate-o fost venin\nJumătate-o fost venin, măi dorule\n\nNici acela n-o fost ras, măi dorule\nNici acela n-o fost ras\nJumătate-o fost năcaz\nJumătate-o fost năcaz, măi dorule\n\nNalt îi ceriu şi senin, măi dorule\nNalt îi ceriu şi senin\nPe-a me parte norii vin\nPe-a me parte norii vin, măi dorule\n\nNalt îi ceriu şi-nstelat, măi dorule\nNalt îi ceriu şi-nstelat\nPe-a me parte norii bat\nPe-a me parte norii bat, măi dorule\n\nȘi-asa-mi vine câte-un gând, măi dorule\nȘi-asa-mi vine câte-un gând\nSă plec pe păduri cântând\nSă plec pe păduri cântând, măi dorule",
    "author": {
      "id": 19,
      "name": "Ducu Bertzi",
      "slug": "ducu-bertzi"
    },
    "author_id": 19,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "C",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 93,
    "title": "Sanie cu zurgălăi",
    "slug": "sanie-cu-zurgalai-93",
    "content": "Dm\nSanie cu zurgălăi,\n        E7             A   D7\nFrumoși sunt căluții tăi,\nGm       \nDar mai frumoși sunt ai mei,\nC\nCă le dau apă cu mei\nF            C        F    D7\nȘi zboară ca niște zmei,\nGm\nMai frumoasă-i mândra mea,\nEb\nDiseară mă duc la ea,\nEdim     A      Dm    D7 (pentru a intra in returnela)\nSanie cu zurgălăi.\n\nDe-o vrea mândra, de n-o vrea\nSă-mi deschidă portița,\nDiseară mă duc la ea,\nObosit cum oi putea,\nSanie cu zurgălăi,\nObosit și plin de apă,\nMă duc la ea că mi-e dragă,\nSanie cu zurgălăi.\n\nSăniuță, du-mă iară\nUnde-am fost și-alaltăseară,\nSanie cu zurgălăi,\nDu-mă la mândruța mea\nSă-i mai sărut gurița,\nSanie cu zurgălăi.\n\nCă e dulce gurița,\nNu mă mai satur de ea,\nCa de vin dulce toamna\nȘi de somn primăvara,\nSanie cu zurgălăi,\nNu mă mai satur de ea,\nCa de vin dulce toamna,\nSanie cu zurgălăi.",
    "author": {
      "id": 41,
      "name": "Maria Ciobanu",
      "slug": "maria-ciobanu"
    },
    "author_id": 41,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "E7",
      "A",
      "D7",
      "Gm",
      "C",
      "F",
      "Eb",
      "Edim"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 94,
    "title": "Constantine, Constantine",
    "slug": "constantine-constantine-94",
    "content": "Intro (x2): Dm      Gm / Dm      Dm    \n            \n Dm           A        Dm\n Constantine, Constantine\n Dm        A        Dm\n Mă mir şi mă uit la tine\n Gm            Dm\n Ziua, noaptea prin pădure\n Gm            A     Dm\n Plin de rouă, ca un câine \n Dm\n Şi dacă mă uit mai bine\n Constantine, Constantine\n Gm         A         Dm\n Neagră-i cămaşa pe tine.\n\n    Refren (x2): Dm            Gm\n                 La...............la\n                 Dm\n                 La...............la.\n\n Mărioară, Mărioară\n Ia o tale şi mi-o spală\n Cu săpun de tămâioară\n S-o usuci în sân desară\n Şi pentru atâta lucru\n Mărioară, Mărioară\n Nu ţi-ar mai putrezi trupu’.\n\n A cui eşti, Mărie, dragă?\n A lui cu mustaţa neagră\n Ăl mai mare vânător\n M-a prins noaptea la izvor\n Nu mi-e ciudă că mă prinse\n Constantine, Constantine\n Dar mi-e ciudă că mă-nchise.\n\n Mărie, privighetoare\n Ce cânţi noaptea pe răcoare\n Osândi-te-ar şi te-ar bate\n Pernioara de-astă noapte\n Căpătâiul de la spate\n Mărioară, Mărioară\n Şi vorbele voastre toate.\n\n Când eu te-aşteptam pe-afară,\n Mărioară, Mărioară\n Cântecel de primăvară.\n\n Nota:dupa fiecare strofa-refren(x2)+intro(x2).",
    "author": {
      "id": 42,
      "name": "Floarea Calotă",
      "slug": "floarea-calota"
    },
    "author_id": 42,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A",
      "Gm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 95,
    "title": "Asa beau oamenii buni",
    "slug": "asa-beau-oamenii-buni-95",
    "content": "C           G\nAşa beau oamenii buni\nF          G\nAşa beau oamenii buni\nF          C\nDe sâmbăta până luni\nC      G   C\nDe sambata pana luni.\n\nAşa beau oamenii fraţi\nAşa beau oamenii fraţi\nDe sâmbătă până marţi\nDe sâmbătă până marţi.\n\nAşa beau oameni cu cecuri\nAşa beau oameni cu cecuri\nDe sâmbătă până miercuri\nDe sâmbătă până miercuri.\n\nAşa beau oameni ca noi\nAşa beau oameni ca noi\nDe sâmbătă până joi\nDe sâmbătă până joi.\n\nAşa beau oamenii tineri\nAşa beau oamenii tineri\nDe sâmbătă până vineri\nDe sâmbătă până vineri.\n\nC-aşa beau şi eu şi tata\nC-aşa beau şi eu şi tata\nDintr-o sâmbătă intr-alta\nDintr-o sâmbătă intr-alta.\n\nDe n-ar fi horinca-n sat\nDe n-ar fi horinca-n sat\nNiciodată n-aş fi bat\nNiciodată n-aş fi bat.\n\nDar aşa horincă este\nDar aşa horincă este\nŞi-s la lume de poveste\nŞi-s la lume de poveste.\n\nCa mă povestesc in sat\nCa mă povestesc in sat\nC-am băut si iară-s bat\nC-am băut si iară-s bat.\n\n\nPe toate strofele sunt aceleasi acorduri, acordurile nu sunt puse de mine, eu doar am facut rost de ele.\nEste transpusa in C(DO), originalul de la Fratii Petreus e in A(LA).",
    "author": {
      "id": 43,
      "name": "Frații Petreuș",
      "slug": "fratii-petreus"
    },
    "author_id": 43,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "G",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 96,
    "title": "Dar-ar naiba-n tine, dragoste",
    "slug": "dar-ar-naiba-n-tine-dragoste-96",
    "content": "C                      Dm\nDar-ar naiba-n tine dragoste!\nG                         C    (merge pe coarda la trecerea do - si la)\nCe te tii mereu numai de mine?\nAm                       Dm\nTu esti pentru mine-o pacoste\nG                          c\nSi nu pot ca sa mai scap de tine.\n\nc                          Dm\nAi venit cand nici nu ma gandeam\nG                           c\nSi-ai aprins in suflet valvataie,  (la: do - si - la)\nAm                           Dm        \nNu mananc si noaptea somn nu am    (aici merge o trecere cu Em - F - G)\nG                        D\nPentru tine, dragoste balaie.\n\nTe-ai asezat la inimioara\nSi ai facut ca sa ma doara.\nMult mi-e necaz si mi-e rusine\nDar-ar naiba dragoste in tine!\n\nFir-ai tu sa fii de dragoste!\nSi mai rau sa te blestem imi vine.\nCand mai sunt atatea suflete\nCum de ma gasisi tocmai pe mine?\nSunt atatea alte fete-n sat\nMandre, frumoase din cale-afara,\nTocmai peste mine tu ai dat\nDragoste sa fii mereu de-ocara!\n\nGlumesc baietii si-au dreptate,\nIar fetele imi rad in spate.\nMult mi-e necaz si mi-e rusine\nDar-ar naiba dragoste in tine!\nIn drumul meu a fost odata\nO dragoste nevinovata.\nDe-atunci oftez si nu mi-e bine\nDar-ar naiba dragoste in tïne.",
    "author": {
      "id": 44,
      "name": "Ileana Sărăroiu",
      "slug": "ileana-sararoiu"
    },
    "author_id": 44,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "Dm",
      "Am",
      "G",
      "D",
      "Em",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 97,
    "title": "Pusca si cureaua lata",
    "slug": "pusca-si-cureaua-lata-97",
    "content": "D    F#           Bm D7\nCand eram tanar fecior,\nG     A7     D  F#\nEram fala muntilor,\nBm     B     Em  E\nUmblam ziua la vanat\nA          A7        D\nPrin codru verde de brad...\n\nD      E          A D7\nPusca si cureaua lata...\nG     A7      D    F#\nCe barbat eram odata!\nBm   B               Em E\nLa vanat prin munti si vai\nA   A7      D\nCu ortacii mei...\n\nPorneam cu roua-n picioare\nPe urma de caprioare...\nNe opream in poienita\nBeam apa din fantanita...\n\nPusca si cureaua lata...\nCe barbat eram odata!\nLa vanat prin munti si vai\nCu ortacii mei...\n\nDe-o fost vara, de-o fost toamna\nLuam mistretii la goana\nCu cetina verde-n clop\nSI nu oboseam deloc...\n\nPusca si cureaua lata...\nCe barbat eram odata!\nLa vanat prin munti si vai\nCu ortacii mei...\n\nIute vremea mi-o trecut,\nS-uite c-am imbatranit,\nSa mai merg, putere nu-i,\nSa iau urma cerbului!...\n\nPusca si cureaua lata...\nCe barbat eram odata!\nLa vanat prin munti si vai\nCu ortacii mei...\n\nCand a ninge si a-ngheta\nN-o sa-mi mai vedeti urma\nMi-oi trimite numa dorul\nCa sa-mi gaseasca zvorul...\n\nPusca si cureaua lata...\nCe barbat eram odata!\nLa vanat prin munti si vai\nCu ortacii mei...\n\nbox_bottom",
    "author": {
      "id": 45,
      "name": "Traian Ilea",
      "slug": "traian-ilea"
    },
    "author_id": 45,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "F",
      "Bm",
      "D7",
      "G",
      "A7",
      "B",
      "Em",
      "E",
      "A",
      "F#"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 98,
    "title": "Imnul golanilor",
    "slug": "imnul-golanilor-98",
    "content": "G          C               D         G\nA fost odata ca-n povesti, a fost în România\n  G          C                D          G\nO gasca mare de golani ce-au alungat sclavia\n    G              C               D          G\nNoi nu ne-am confundat nicicând cu oamenii de bine\n  G          C            D         G\nVeniti si neocomunisti si fara de rusine.\n\nRefren:\nG             C   D          G\nMai bine haimana, decât tradator\nG            C    D          G\nMai bine huligan, decât dictator\nG          C    D         G\nMai bine golan, decât activist\nG        C     D         G\nMai bine mort, decât comunist.\n\nG                    C         D                 G\nVrem libertate, nu comunism si nici schimbari de forma\n   G        C             D            G\nSi de aceea securisti, sa nu ne puneti norma.\n    G          C        D            G\nNoi nu vrem neocomunism nici neolibertate\n  G             C       D                  G\nDemocratii originale si nici minciuni sfruntate.\n\nRefren\n\n       G           C              D          G\nNe-ati întrebat ce vrem aici, dar stie toata tara\n    G        C         D         G\nNoi sustinem punctul 8 de la Timisoara.\n  G       C     D       G\nA cazut 473, ce tinea TVR\n  G            C            D           G\nLegata în lanturile ei, dar tot degeaba e.\n\nRefren\n\n   G         C          D            G\nAlegeri fara comunisti, fara nomenclatura\n   G               C      D          G\nSi nu va temeti de golani fara coloratura.\n    G             C            D             G\nDin cei care-au murit aici, ne-am reîntors naluci\n   G          C             D         G\nSa nu mai fie cum a fost, macelul de atunci.\n\nRefren",
    "author": {
      "id": 46,
      "name": "Cristian Pățurcă",
      "slug": "cristian-paturca"
    },
    "author_id": 46,
    "categories": [
      {
        "id": 11,
        "name": "Despre Patrie",
        "slug": "despre-patrie",
        "description": ""
      },
      {
        "id": 14,
        "name": "Imnuri",
        "slug": "imnuri",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 99,
    "title": "Bosquito",
    "slug": "bosquito-99",
    "content": "Melodia in cheia originala cu mici corectii pentru a suna ca inregistrarea.\n\nF#m                   E         F#m\nCând eram băiat acasa tare bine mai era\nF#m                  E         F#m\nAveam o gagică grasă care mă iubea\nBm             F#m         Bm         F#m\nDar când am plecat în lume ursitoarea m-a minţit\nBm             F#m       Bm     D   C#7\nC-o s-ajung un barosan bogat şi fericit\n\n       F#m   C#7       F#m\nÎnsă bănuţul nu s-a arătat\n       A     E            A\nşi fericirea iute s-a stricat\n       A           Bm       C#7 F#m\nAşa că beau, beau, golesc paharele\n        F#m   C#7       F#m\nCu pretenarii şi cu fetele\n\nCe-mi plăcea s-o facem lată, asta-mi era boala\nUnde n-ajungeam vreodată, asta era şcoala\nN-am nici bani, n-am nici maşină si de datorii sunt full\nAm o gaşcă şi-o chitară şi-asta mi-e destul\n \nÎnsă banuţul nu s-a arătat\nşi fericirea iute s-a stricat\nAşa că beau, beau, golesc paharele\nCu pretenarii şi cu fetele\n\nÎnsă banuţul nu s-a arătat\nşi fericirea iute s-a stricat\nAşa că beau, beau, şi-mi bag picioarele\nÎn tot ce ţine de tranziţie",
    "author": {
      "id": 47,
      "name": "Bosquito",
      "slug": "bosquito"
    },
    "author_id": 47,
    "categories": [
      {
        "id": 21,
        "name": "Latino",
        "slug": "latino",
        "description": ""
      }
    ],
    "chords": [
      "F#m",
      "E",
      "Bm",
      "D",
      "C#7",
      "A",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 100,
    "title": "Așa, și?",
    "slug": "asa-si-100",
    "content": "Capo: fret 4\n\nIntro : F C G Am x2 \n\nAsa, si? (2x)\n\nAm                      E\nCeva nu merge bine emotional\nF                         C\nAm sufletul plin de Extraveral, (Asa, si? )\nAm                     E\nNoi doi ne vedem de patru seri,\nF                         C\nFacem schimb de prea multe pareri,\nAm                        E \nRabdarea mi-am pierdut-o de ieri,\nD \nAsa am eu la doamne, \n                 G \nMulte milioane de ghinioane. (Asa, si? )\n\n\nF                       C\nAsa si ce daca stau la coada\nG                       Am                   \nPentru fericire o viata-ntreaga,\nF                       C \nO sa stau la rand si pentru tine\nG               Am\nSi-o sa-ti dau si tie.\n\nAsa si asa(4x)   F,C,G,Am x2 \n\n\nAm                      E\nCeva nu-i bine nici profesional,\nF                          C  \nAm multe locuri goale prin buzunar, \nAm                       E\nIar maine sigur mai apare ceva,\nF                          C \nNu mai conteaza, eu sunt bine si-asa,\nAm                     E \nPrietenii mei stiu asta deja\nD\nCa avem milioane de ghinioane, \n   G\nAjuta-ne Doamne! ! (Asa, si? )\n\n\n F                       C \nAsa si ce daca stau la coada\nG                        Am\nPentru fericire o viata-ntreaga,\nF                           C \nO sa stau la rand si pentru tine\nG                 Am\nSi-o sa-ti dau si tie.\n\nAsa si asa(7x)  F,C,G,Am x2 \n\n // Pana aici a fost versiunea acustica cea filmata in camera de hotel. \nDe aici aveti aceleasi acorduri Am,E,F,C numai cu un fret mai jos.\nIar la sfarsit aveti Am,E,E,Am.\n\nPai tu crezi ca ei n-au griji cu tona!? \nCei din Arizona si cei din Barcelona, \nBa au probleme cu gramada\nToti cei din Oradea si cei din Canada, \nPoate sa se umple iar paharul, \nSa se inunde barul, eu nu-i mai simt amarul, \nOrice-ar fi spun “ASA, SI?!”\n\n// Se reiau acordurile A,E,B,C#m\n\nAsa si ce daca stau la coada\nPentru fericire o viata-ntreaga, \nO sa stau la rand si pentru tine\nSi-o sa-ti dau si tie.\n\nAsa, si? \n\nAsa si ce daca stau la coada\nPentru fericire o viata-ntreaga, \nO sa stau la rand si pentru tine\nSi-o sa-ti dau si tie.\n\nAsa si asa(7x) F,C,G,Am x2 \n",
    "author": {
      "id": 48,
      "name": "Vunk",
      "slug": "vunk"
    },
    "author_id": 48,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "F",
      "C",
      "D",
      "G",
      "C#m"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 101,
    "title": "Perfect fara tine",
    "slug": "perfect-fara-tine-101",
    "content": "F\nNu mai urla \nDm\nSe aude in bloc\nBb\nAm inteles ideea \nBbm\t\t\t\t\tF\nAi risipit iubirea pe un dobitoc \n\nIesi naibii din casa \nEu asta astept iubito \nEsti libera sa cauti fraierul \n\nRefren:\nF\nPerfect (draga mea, draga mea)\nC\nFara tine (draga mea, draga mea)\nDm\nE mai bine (draga mea, draga mea)\nBb\nAm timp si pentru mine (draga mea, draga mea)\nPerfect (draga mea, draga mea) \n\nNu ma doare (draga mea, draga mea)\nPiesa asta (draga mea, draga mea)\nO cant in drum spre mare (draga mea, draga mea) \n\nTe-am inselat \nMa declar vinovat \nAm circumstante insa \nAm vrut si eu sa vad cum e sa fii barbat\nTe-ai transformat In instanta morala\nDar ai uitat Dansai prin vama goala si era\n\nPerfect (draga mea, draga mea)\nFara tine (draga mea, draga mea)\nE mai bine (draga mea, draga mea)\nAm timp si pentru mine (draga mea, draga mea) \nPerfect (draga mea, draga mea) \nNu ma doare (draga mea, draga mea)\nPiesa asta (draga mea, draga mea)\nO cant in drum spre mare (draga mea, draga mea)\n\nF\nTi-aduci aminte cand ne-am combinat\nC\nEra frumos, era perfect, era adevarat\nDm\nPe mese sau sub mese dar numai impreuna\nBb\nIubirea si distractia se cam tineau de mana\nApoi te-ai transformat usor, usor in profesoara\nSi-am inceput sa am restante in fiecare seara\nZiceai ceva de genul \"iubirea-i lupta grea\" \nDar o cam luasesi razna, luptai doar pentru ea\n\nG                          Dm               C     \nAcum sunt singur in masina dar nu e suparare\nGm                            Dm               \nDe cat premiant in inchisoare Mai bine repetent\nC           Bb\nIn drum spre mare Perfect (draga mea, draga mea)\n\nFara tine (draga mea, draga mea)\nE mai bine (draga mea, draga mea)\nAm timp si pentru mine (draga mea, draga mea)\nPerfect (draga mea, draga mea)\nNu ma doare (draga mea, draga mea)\nPiesa asta (draga mea, draga mea) \nO cant in drum spre mare (draga mea, draga mea)\nPerfect (draga mea, draga mea)\nFara tine (draga mea, draga mea)\nE mai bine (draga mea, draga mea)\nAm timp si pentru mine (draga mea, draga mea)\nPerfect (draga mea, draga mea)\nNu ma doare (draga mea, draga mea)\nPiesa asta (draga mea, draga mea)\nO cant in drum spre mare (draga mea, draga mea)",
    "author": {
      "id": 49,
      "name": "Vama",
      "slug": "vama"
    },
    "author_id": 49,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "F",
      "Dm",
      "Bb",
      "Bbm",
      "C",
      "G",
      "Gm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 102,
    "title": "Ochii tai",
    "slug": "ochii-tai-102",
    "content": "D    A                 E A\nNu e usor nu e nici greu \n      D            A              E  A\nSa incerci acum sa te intorci din drum\n         D A   E        A\nPoate ca eu cu sufletul meu \n     D          A             E   A\nAs avea atat de multe sa iti spun\n     D      A             E\nInsa ochii tai se vor pierde in noapte\n     G          D          A\nLasandu-ma pe mine in urma lor\n        D     A          E\nStiu ca ochii tai vor fi doua soapte \n        G               A           G A\nSi mi-e foarte dor,mi-e tare dor de ei\n\nVreau sa simt caldura ta cand noaptea va venii\nDoar stelele sa stie ca ai sosit\nParul tau va fi iar ud de roua -n zori de zi\nSi as vrea sa pot sa-ti spun bine-ai venit\nInsa ochii tai se vor pierde in noapte\nLasandu-ma pe mine in urma lor\nStiu ca ochii tai vor fi doua soapte \nSi mi-e foarte dor,mi-e tare dor de ei\nInsa ochii tai se vor pierde in noapte\nLasandu-ma pe mine in urma lor\nStiu ca ochii tai vor fi doua soapte\nSi mi-e foarte dor,mi-e taaaare dor de ei!!!!!!",
    "author": {
      "id": 50,
      "name": "Holograf",
      "slug": "holograf"
    },
    "author_id": 50,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "E",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 103,
    "title": "Nu am chef azi",
    "slug": "nu-am-chef-azi-103",
    "content": "Intro : A   A7+  A6   A  \n        D   D7+  D6   D\n \nStrofa:\n        A    A7+        A6     A \n  Nu am chef azi, nu am chef azi\n         D         D7+  D6  D\n  N-am chef de nimic\n  Nu am chef azi, nu am chef azi\n  De votca sau de gin, tequila rom sau vin\n           Bm                   E               E7            A  \n  Tigari nu mai vorbesc, iar pe tine, pe tine, pe tine, te urasc\n  \n  Nu te vreau azi\n\n  Nu ma vrei azi, nu ma vrei azi\n  S-a ridicat usor avea un umar gol\n  Si zambetul amar, baiete esti prost, iar eu nu sunt o c*rva pe-un trotuar\n  Nu ma vrei azi, nu ma vrei azi\n  Nu te vreau azi, nimic mai usor\n  Nu ma vrei azi, nu te vreau azi\n  Eu voi pleca-n curand, ramai cu mine-n gand\n  E lapte-n frigider, iar banii, ciorapii si sapca ta sunt pe calorifer\n  \n\n  Ne vedem joi, ne vedem joi\n  Am urlat dupa ea\n  Vreau sa vii joi, vreau sa vii joi, \n  Alerg descult pe hol, dar holul este gol\n  Un paharel de vin, ma uit cine e, vecinul meu Dan de la mezanin\n \n  Au trecut ani, au trecut ani,\n  si viata s-a schimbat, mi-am luat si eu nevasta,\n  urata si cam proasta, am doi copii cu ea \n  si ma feresc cat pot de mult de soacra mea.\n \n  Au trecut ani, au trecut ani\n  Si viata s-a schimbat\n  Au trecut ani, au trecut ani\n  Ma duc mereu pe hol, dar holul este gol\n  Nu-i lapte-n frigider, iar banii, ciorapii si sapca ta, nu-s pe calorifer\n \n  Au trecut ani\n  Nu-s pe calorifer\n  Au trecut ani, am fost un fraier\n  Au trecut ani, nu-s pe calorifer\n  Am fost un mare, mare fraier\n  Au trecut ani, dar au trecut ani",
    "author": {
      "id": 51,
      "name": "Vama Veche",
      "slug": "vama-veche"
    },
    "author_id": 51,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "D7",
      "D6",
      "A",
      "A7",
      "A6",
      "Bm",
      "E",
      "E7",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 104,
    "title": "Vama Veche",
    "slug": "vama-veche-104",
    "content": "intro:  ( este facut de pian - l-am adaptat pt chitara )                \n                                   \ne|------------------0------------------------0---|\nB|--------3----3------1-------1--3-----3-------1-|\nG|----0------0----0---------0--------0-----0-----|\nD|------------------------2----------------------|\nA|----3------------------------------------------|\nE|-----------------------------------------------|\n\ne|--------------0-------------------------------|\nB|-----3----3------1----------1---0-1-0-1-------|\nG|--0-----0---0-------------2--------------2----|\nD|------------------------2---------------------|\nA|--3-------------------0-----------------------|\nE|----------------------------------------------|\n\ne|-3--3-1-1-1-----3-1--3---5-3-3-3----5-3---3-|\nB|----3-3-3-3-------3------3-3-3-3------3-----|\nG|----2--------2-----------4--------4---------|\nD|----0--------------------5------------------|\nA|--------------------------------------------|\nE|--------------------------------------------|\n\ne|-3--1-1-1----3-1---3-5---3----1----0-----|\nB|-3--3-3-3------3-------------------------|\nG|-2---------2-----------4----4----2-------|\nD|-0-------------------5---5----3----2-----|\nA|-----------------------------------------|\nE|-----------------------------------------|\n\nTrenul accelerat Bucuresti-Mangalia pleaca in 5 minute de la linia 5\n \n C9             C \nSe poate sa fie zi\n Am  \nSe poate sa fie noapte...\n C9              C\nSe poate sa fie vara...\n Am               Am9\nLa fel cum iarna poate fi.\n \n Dm\nNisiul sa fie ud\n G\nIar marea un pic amara\n Dm\nNisipul sa zgarie lin\n G\nIar marea sa fie murdara.\n \n\nVrei soare, soare iti dau\nSau pielea ti-e ruda cu luna \nPe stanci daca vrei te sarut\nSau in apa imi e totuna.\n \n\nSa pot sa te-aleg dintr-o suta\nIn ochi sa ai inima mea\nSa-ncerc sa m-ascund de iubire\nDar sa nu te mai,              \nSa nu te mai pot uita.\n \n\nIar noaptea sa ai pielea uda\nInsetata sa tragi din tigara\nPe mare se-aude sirena\nAl tau san imi mangaie mana\n \nPovestea merge mai departe\nCa vantul din Vama Veche\nEu nu pot sa mai continui\n\nCaci eu mi-am gasit pereche        \nLa Vama Veche, pereche\n \nPovestea merge mai departe\nCa vantul din Vama Veche\nEu nu pot sa mai continui\nSaruta-ma in ureche.\nLa Vama Veche, in ureche\n \nAm plecat la Vama Veche \nCa sa imi gasesc pereche\nAm ajuns la Vama Veche\nSi sunt apucat de streche\nStau pe plaja-n Vama Veche\nSi am sarutul in ureche\nDoar pe plaja-n Vama Veche\nNoi toti vom avea pereche\n \nStau pe plaja-n Vama Veche    \nCa sa imi gasesc pereche",
    "author": {
      "id": 51,
      "name": "Vama Veche",
      "slug": "vama-veche"
    },
    "author_id": 51,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "C9",
      "C",
      "Am",
      "Dm",
      "G",
      "Am9"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 105,
    "title": "Calul din Marlboro",
    "slug": "calul-din-marlboro-105",
    "content": "D                               G\nCopile nu fi prost orasul e departe\nAsa-mi spunea razand cel ce vindea de toate\n     A                                     G\nTu nu ma pacalesti, am sa ajung acolo\nM-asteapta strada mea si calul din Marlboro\n \nCand am pornit la drum, am intalnit o proasta\nAm incercat sa fug, mi-a devenit nevasta\nDe-atuncea pan-acum in oras eu ratacesc\nE fum si este scrum si simt ca-nebunesc, dar\nCe pot sa fac\n                 \n      \nBatrane, m-a-ntrebat un pusti julit in coate\nMai e mult spre oras ca vad ca vinzi de toate\nAm vrut sa-l ratacesc sa n-apuce spre sosea\nBatrane esti fricos, gasesc eu si strada ta!\n\nL-am intrebat plangand dar calul din Marlboro\nEl mi-a raspuns razand, vedem noi mai incolo\nDe-atuncea pan-acum in oras eu ratacesc\nE fum si este scrum si simt ca-nebunesc\n \n     And everybody knows my feelings\n     Of a lonely, day",
    "author": {
      "id": 51,
      "name": "Vama Veche",
      "slug": "vama-veche"
    },
    "author_id": 51,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
      "A",
      "Am",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 106,
    "title": "Vine valul, imi ia calul",
    "slug": "vine-valul-imi-ia-calul-106",
    "content": "      Am       E          Am\nToată viaţa avere-am vrut să fac\n    G                    C\nAm pornit de la un biet căluţ\n        Dm    E          Am\nMi-am legat căluţul de copac\n        F      E       Am  E Am\nPentru apă am săpat un puţ\n\nPârâul din sat curgea-nspre mat\nUnde muzică-mi plăcea s-ascult\nÎntr-o zi pârăul s-a uflat\nEu ascultam refrene de demult\n\n\tRefren:\n\t\n\t                  Am\n\tVine valul, îmi ia calul\n                G            C\n\tÎmi ia scroafa din coteţ\n               Dm\n\tMi s-a dus averea toată\n               Am\n\tNumai soacra-n curte-noată\n                  F        Dm        E    F  E\n\tS-a dus casa şi fărâma de nutreţ\n\n\tVine valul, îmi ia calul\n\tMurgu-noată în aval\n\tSoacra-i bine ancorată\n\tDoamne cât de bine-noată\n               F           E          Am\n\tDe ce Doamne nu ai pus-o tu pe cal\n\nAm luat un împrumut de la Banccoop\nMă întorc în sat să torn ciment\nSă-mi refac căsuţa, am Casco\nDar f*cking Banccoop dă faliment\n\nMi-am luat alt căluţ de la Obor\nAm plătit pe el extrem de mult\nDar mi-l ia pârâul binişor\nEu stau şi-ascult refrene de demult\n\n\tRefren.\n\nIubesc ţara în care m-am născut\nPot să fac în ţara mea ce vreau\nPot să rabd, s-o iau de la-nceput\nMuzică s-ascult la max în timp ce beau\n\nLegea îmi dă dreptul colosal\nSă mai plec odată la Obor\nSpending money pe al treilea cal\nPutting bălegar pe legea lor\n\n\tRefren.\n\nIeri am împlinit 50 de ani\nViaţa încă nu mi-a pus capac\nChiar dacă n-am casă şi nici bani\nEste dreptul meu să spun ce.. fuck\n\nAm pierdut în viaţa mea trei cai\nN-am ştiut ca să-i mai ţin în frâu\nToţi îmi spun: \"O gloabă tot mai ai\"\n- Pe soacră-mea, privind către pârâu",
    "author": {
      "id": 52,
      "name": "Daniel Iancu",
      "slug": "daniel-iancu"
    },
    "author_id": 52,
    "categories": [
      {
        "id": 4,
        "name": "Satiră și umor",
        "slug": "satira-si-umor",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "C",
      "Dm",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 107,
    "title": "Dacă ploaia s-ar opri",
    "slug": "daca-ploaia-s-ar-opri-107",
    "content": "Intro:\n\nDm G\nDm Am\nDm G Am\n\n      Dm                   Am\nDacă pleci, uşa nu o mai închide\n         Dm                  Am\nSper să treci poate mâine pe aici\n    Dm\nTe petrec şi mă uit la tine\n   Am\nParcă pierd ceva din mine\n B         E\nZău, îmi e greu\n\n\n\tRefren:\n\n\tAm               Dm\n\tPoate dacă ploaia s-ar opri\n\tG                       C    E     \n\tşi din cer n-o să mai cadă lacrimi\n\tAm          Dm           G\n\tStele-ar răsări, tu ai veni\n\tAm             Dm \n\tSupărat sunt Doamne iar\n\tG                       C     E \n\tStau în cârciumă să-mi 'nec amarul\n\tAm            Dm         G  \n\tBeau şi te aştept până la zi\n \n \n       Dm      G \nPlouă încet, încet\n            Dm G Am\nPlouă şi-mi este dor\n         Dm    G         Am \nDe ochii tăi căprui îmi e dor\n\nPlouă încet, încet\nPlouă şi-mi este dor\nDe ochii tăi să mor îmi e dor\n\nTe aştept să te-ntorci din nou la mine\nChipul tău şi de ochii tăi mi-e dor\nPoza ta din sertar o scot\nNu mă uit la ea nu pot\nZău, îmi e greu\n\n\tRefren",
    "author": {
      "id": 53,
      "name": "Cargo",
      "slug": "cargo"
    },
    "author_id": 53,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "G",
      "Am",
      "B",
      "E",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 108,
    "title": "La fereastra ta",
    "slug": "la-fereastra-ta-108",
    "content": "Em            \nI.Vad,la fereastra ta tarziu\n                B7\nO lumina si nu stiu\n                     Em\nDe esti treaza sau visezi\n   \n   Em     \nII.Vad,in spectacolul nocturn\n                      B7      \nCavaleri din vechiul turn\n                     Em\nCe te-ndeamna sa-i urmezi\n       \n       G \nrefren:Si as dori sa pot intra\n                     D\nSa alung din preajma ta\n                            G\nTot ce-i trist si tot ce-i rau\n                    \nSi as dori sa fiu acum\n                 D\nO romanta cu parfum\n                     G    G D Em\nSa pot sta in parul tau\n\n     Em         \nIII.Vad, la fereastra ta tarziu\n                B7\nO lumina si nu stiu\n                      Em\nDaca razi sau daca plangi\n\n    Em  \nIV.Trec,si in drumu-mi nesfarsit\n                      B7\nMa primesc cu-n bun venit\n                      Em\nNumai plopii cei natangi\n\n         G                \nrefren ;Dar, am sa ma intorc candva\n                    D\nSa alung din preajma ta\n                           G\nTot ce-i trist si tot ce-i rau.\n                          \nSi as dori sa pot sa-tï spun\n                  D\nO poveste de pe drum\n                       G   G D Em \nCand visam sub geamul tau\n\n        A                  \nrefren:Si as dori sa pot intra\n                     E\nSa alung din preajma ta\n                            A\nTot ce-i trist si tot ce-i rau\n\nSi as dori sa fiu acum\n                 E\nO romanta cu parfum\n                     A\nSa pot sta in parul tau\n\nhave fun!",
    "author": {
      "id": 54,
      "name": "Semnal M",
      "slug": "semnal-m"
    },
    "author_id": 54,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "B7",
      "G",
      "D",
      "A",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 109,
    "title": "Aproape de voi",
    "slug": "aproape-de-voi-109",
    "content": "Am       C    G        Em\nIn seara asta vreau sa beau\nAm           C    G\nSa uit de-orice nevoi\nAm         C     G     Em\nSa sparg paharul si sa zic\nAm          G       Am\nSunt acum, aici, cu voi . . .\n\n\nNu stiu cat timp mi-a mai ramas\nDar vreau sa mi-l petrec\nCu voi care mi-ati fost alaturi \nLa bine si la greu\n\n         Am            C     G \nRefren:  Si de-o fi si eu sa mor\n                        Dm    Am\n         Nu vreau sa va intristati\n                       C    G\n         Sa cantati si sa jucati \n                Am\n         Pana-n zori . . . \n  \n                     C       G   \n         Si daca din cand in cand\n                    Dm      Am\n         O sa ma priviti in gand\n             C   G         Am\n         Voi fi aproape de voi . . .\n\n\nInchin paharul si va spun\nIi multumesc Celui de Sus\nCa mi va dat prieteni buni\nSi nu-s singur pe acest drum . . . \n\nRefren: ...\n\n\n\nPoate fi folosita orice ciupitura 4/4.\n\n*Nota: \nCantecul suna bine alternat de la ciupitura(pt. strofe) la bataie(pt. refren)\n\nSucces!",
    "author": {
      "id": 53,
      "name": "Cargo",
      "slug": "cargo"
    },
    "author_id": 53,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "G",
      "Em",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "-",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Fingerstyle"
      }
    ],
    "views": 0
  },
  {
    "id": 110,
    "title": "Fata verde",
    "slug": "fata-verde-110",
    "content": "Em            G     D\nFată verde cu părul pădure\nFată verde cu părul pădure\nSimţi cum privirea lor vrea să te fure\n \n        C        G   D    Em\n        Noaptea mieii ţese ie\n        Zburătorii ca să vie\n        Noaptea mieii ţese ie\n        Nimeni urma să le-o ştie\n \nFată verde ei te sărută\nCu privirea lor cea mută\nOchii negri, ochi de ţigan\n \n\tRefren.\n\n        D             G\n        Umezi sunt de dor\n          C     G      D\n        şi-al lor vis plin de zbor\n\tD               G\n        Noaptea-n ei se scaldă \n\t C      G          D\n        În sclipiri ca de salbă ...\n         C      G         D\n        În sclipiri de salbă ...\n\nFată verde cu părul pădure\nFată verde cu părul pădure\nSimţi cum privirea lor vrea să te fure\n\n\tRefren",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "D",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 111,
    "title": "In Umbra Marelui URSS",
    "slug": "in-umbra-marelui-urss-111",
    "content": "E o varianta modificata de mine pt cover la trupa mea.\n\n\nIntro:\n\nE|-3--2-3-2-5-0----------------------|\nB|-0--3-------0----------------------|\nG|-0--2-------0----------------------|\nD|-0--0-------2----------------------|\nA|-2--0-------2----0-2-3--3-2-0------|\nE|-3----------0--3--------------3-2-0|\n   G  D       Em\n\n------0-----------2-----------0-----------------------|  \n-------0-----------3-----------1-------1--------------|\n----0-----------2-----------2-----------0-------------|     \n---2-2---------0-0---------2-2------------------------|\n---------2-3-0-------3-2-0-------0-2-3-----3-2-0------|\n-------------------------------------------------3-2-0|\n  Em          D            Am          C\n\nStrofa I:\n\nEm          D\nStau singur si ma-ntreb\n   Am              C     B Em\nDe ce-am plecat de-acasa\n       D\nSa fie blestemul\n   Am            C     B Em\nDe veacuri ce ne-apasa\n             D        Am\nCaci n-am gresit cu nimic\n            C  D  Em\nDoar cat am patimit\n         D         Am\nHulit am fost fara rost\n          C    D Em\nDe cei ce i-am iubit\n\nIntro x3\n\n\nEm          D\nApus peste apus\n   Am         C     B  Em\nCe iute trece timpul\n       D\nSi zorile s-au dus\n   Am        C     B  Em\nCe rece bate vantul\n        D          Am\nAm asteptat infrigurat\n        C     D Em\nSa ma intorc 'napoi\n          D          Am\nM-ati judecat, condamnat\n          C  D       G  D  Em\nDar cine sunteti voi?\n\nRefren:\n\nEm                      G  D Em   \nCaci timpul nostru s-a scurs\n                 G  D Em\nIn umbra marelui urs\n                    C             A     A7\nDar ghearele v-au ramas in orice-mbratisare\n       Am      Em    G   D\nAstazi doare sarutul pe obraz\n                     G  D  Em\nDar dati-mi viata 'napoi\n                      G  D  Em\nCe-am risipit pentru voi\n                   C               A     A7\nUitand de dor si nevoi, ani de pribegie                              \n        Am  Em              D \nDintr-o mie multi n-au mai ramas\n\nIntro.\n\n\nEm       D                  \nCazut-au frunzele\n     Am         C B Em\nLe-a risipit furtuna\n          D\nUnde-s sperantele?                           \n    Am            C B Em\nN-a mai ramas niciuna\n          D         Am\nUn gand subit, nerostit                       \n         C  D     Em\nMa-ncremeneste-n loc\n           D            Am\nCe-am asteptat, ce-am visat\n         C   D       G D Em\nNimic nu s-a schimbat\n\n\n\nEm                  G D Em\nDar dati-mi viata 'napoi\n                     G D Em\nCe-am risipit pentru voi\n                    C\nUitand de tot si de voi\n           A     A7\nPrieteni de betie\n        Am  Em            D\nDintr-o mie cati au mai ramas\n                     G   D Em\nSi timpul vostru s-a scurs\n                 G  D  Em\nLa umbra marelui urs\n                    C\nDar ghearele v-au ramas\n              A     A7\nIn orice-mbratisare\n       Am      Em          D \nAstazi doare sarutul pe obraz.\n\nIntro+ Em",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "Em",
      "Am",
      "C",
      "B",
      "A",
      "A7",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 112,
    "title": "Baby",
    "slug": "baby-112",
    "content": "Strofa:\n    Am                        Em\n   Cat am fost de singur, tu nu ai stiut\n      F                            Dm\n   Ti-ai ferit mereu privirea, de la inceput\n     Am                   Em\n   Anii trec, si viata merge iar\n      F                     Fm                         C\n   Te caut zi si noapte, te caut, dar stiu ca e-n zadar\n   \n     \n   Baby stiu acum ca mergi sa intalnesti\n   Un strain ce te va duce, la casa din povesti\n\n\n     Am                Em\n   Ce noroc, ce mare nenoroc\n      F              G         C           \n   Ca timpul stinge totul, dar focul naste foc\n     F       G          C      \n   Mai da-i o zi din viata ta,\n     F                  G\n   Acelui om care-ti spunea\n \n           C   G            Am\nRef :   Baby, baby, baby, tu vei fi a mea\n          F               Am       Dm         G\n         Ca un rasarit de soare, dupa noaptea grea\n         C    G            Am\n         Baby, baby, baby, tu vei fi a mea\n          F                   Fm\n         Tu esti unica iubire, unica iubire\n  \n\n         \nBridge :\n Eb                                 F\n E toamna-n viata mea, totul este scrum\n Eb                                 F\n Stiam ca vei pleca dar lasa-ma sa-ti spun\n\n\n\nRef:",
    "author": {
      "id": 56,
      "name": "Iris",
      "slug": "iris"
    },
    "author_id": 56,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Em",
      "F",
      "Dm",
      "Fm",
      "C",
      "G",
      "Eb",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 113,
    "title": "Fata din vis",
    "slug": "fata-din-vis-113",
    "content": "D         A     G   A\nImi amintesc de tine\nD          A    G  A\nStateai in fata mea\nD          A          G\nA fost de-ajuns o privire\nA       D        A     G\nCe n-o pot, n-o pot uita\n \nCu bratele-amandoua\nIncerc sa te regasesc\nSa fim din nou impreuna\nE tot ce pot sa imi doresc\n \nCu gandul pret de o clipa\nSa te-nteleg as fi vrut\nAs fi ramas cu tine\nC-am sa te pierd nu am crezut\n \nAfara numai vantul\nGonind prin noapte spunea\nCa lasa-n urma timpul\nCe mult prea, prea iute-alerga\n \n[_refren_]\n \nBm         A         G    A\nPornesc la drum prin noapte\nD            A          G   A\nIn noaptea-n care ti-am zis\nBm       A         G\nCa numai tu dintre toate\nA       D      A      G\nDoar tu esti fata din vis\n \n[_sfarsit_de_refren_]\n \nPrivesc la trenul care\nDucea nepasator\nCaldura soaptei tale\nCe-avea s-o piarda pana-n zori.\n \nAfara numai vantul\nGonind prin ploaie spunea\nCa lasa-n urma timpul ce mult prea\nPrea iute-alerga\n \n[_pasaj_]\n \nD          A    G\nDaca vrei (daca vrei)           \n    A     D-A-G-A\nVoi fi cu tine\nD          A    G\nDaca vrei (daca vrei)\n    A         D-A-G\nVoi sta langa tine",
    "author": {
      "id": 57,
      "name": "Compact",
      "slug": "compact"
    },
    "author_id": 57,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "G",
      "Bm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 114,
    "title": "Flori de mai (simplificat)",
    "slug": "flori-de-mai-simplificat-114",
    "content": "(Originalul - Capo pe 3)\n\n\nintro: Dm  G  Am\n   \n  Dm\nLacata prinsa-n lemn, ascunde-ma ne-atins\n  Am\nPazeste-ma de ger, azi-noapte iar a nins\n     Dm          F\nCand tu visai \n                  Am\nAlbastre flori de mai\n    Dm\nCe flori în toiul iernei opreste-te-ti sopteam\n  Am\nAcum doar geru-n sticla picteaza flori la geam\n    Dm          F\nTu n-ascultai \n                   Am\nVisai doar flori de mai.\n\n           G     Dm\n     Mai stai\n                     Am\n     Si nu pleca de n-ai\n            G                        Dm\n     Sa-mi dai (nu ti-am cerut sa-mi dai)\n                       Am\n     Albastre flori de mai.\n\n   Dm \nDe ochi străini ma tem ce-n strada ard nestins\n   Am\nPrivind la ei te chem, tin minte tot ce-ai zis\n   Dm            F\nAtunci spuneai \n                     Am\n\"Plec dupa flori de mai\".\n   Dm\nVibrează pasii mei de parca merg pe clape\n   Am\nCu mine insumi cant refren-singuratate\n   Dm          F\nDe cand plecai \n              Am\nDupa flori de mai\n\n           G      Dm\n     Mai stai\n                      Am\n     Si nu pleca de n-ai\n             G                       Dm\n     Sa-mi dai (nu ti-am cerut sa-mi dai)\n                        Am\n     Albastre flori de mai.",
    "author": {
      "id": 58,
      "name": "Alternosfera",
      "slug": "alternosfera"
    },
    "author_id": 58,
    "categories": [
      {
        "id": 23,
        "name": "Din Republica Moldova",
        "slug": "din-republica-moldova",
        "description": ""
      },
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "Am",
      "F",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 115,
    "title": "Mica tiganiada",
    "slug": "mica-tiganiada-115",
    "content": "-are capodastru la tasta 4, deci e in C#m;\n-eu l-am scris in Am;\n\nintro:\n   Am    C    G      D           Am    \ne|----0----0---------2-----2p0------0-|\nB|----1----1------3--3---3-----3----1-|\nG|--------------0------2--------------|\nD|-------------------0----------------|\nA|--0----3------------------------0---|\nE|------------3-----------------------|\n\n   C      D      Am  C    G     D     C     E    Am\ne|--------2--------0---0--------3----|----0----0-----0---0-|\nB|-----1--3---3----1---1------3-2---3|----1----0----2-2----|\nG|---0------2---------------0-----2--|-------------2---2---|\nD|--------0---------------------0----|---------------------|\nA|-3-------------0---3---------------|--3----2----0--------|\nE|------------------------3----------|---------------------|\n\n\nHmmm hmmmm hmmmmmmm......\n\n    G       C           se repeta Am     \ne|--3---3---3------0------|----|\nB|--3-----3-----3----1----|----|\nG|----0-------0--------0--|----|\nD|------------------------|----|\nA|-----------------3------|----|\nE|--3---3---3-------------|----|\n\ne|--0---0---0-----0------0---0---0-----0------0-----|\nB|--1-1---1---1-----1------1---0-1-------1----------|\nG|--------------2-----2--------------2-----2--------|\nD|---------------------------------2----------------|\nA|--0---0---0-----0------3---2---0------------------|\nE|--------------------------------------------------|\n\nVers 1: \n\n   Am   C    G     D    Am   C          D\n   Trec tigani pe drum, drumu-i plin de fum\n   Am   C    G     D     C   E  Am\n   Fumu-i plin de scrum, foc ardea\n   Vai tigani, tigani, gipsy si gitani \n   Fara cer si ani, trec pe drum.\n\nVers 2:\n  \n   G       C    G         C\n   Tiganie rai, rai care erai\n   Am            C  E  Am\n   Caravan serai giacardea\n   Raiul meu beteag de pe alt meleag\n   Cat imi esti de drag, nu stiu cum.\n\nvers 1:\n   Trec tigani prin colb, colbul este orb\n   Orbul e un corb giacardea\n   Cade seara-n camp soarele-i scalamb\n   Cortul este stramb foc ardea.\n\nvers2:\n   Fac tiganii foc, focu-i la mijloc\n   Fete cu ghioc\n   Si cu carti de joc, hai noroc, noroc\n   Vino la soroc.\n\nvers 1\n   Vino sa-ti ghicesc cartile vorbesc\n   Si nu ne mintesc, giacardea\n   Fata de caro sub cer indigo\n   Sa-ti spun incotro foc ardea.\n\nvers 2\n   Ca multi ani s-au scurs de cand el s-a dus\n   Cu un pui de urs pe un drum\n   Cu belciug si lant fara nici un sfant \n   Spre un targ bizant foc ardea.\n\nvers 1\n   Zaiafet acum lautari duium\n   Numai tu nicicum, giacardea\n   Noaptea de-ar veni pe pamantul gri\n   De ne-ar adormi orisicum.\n\nvers2\n   O dar azi dar azi ceru-i de atlaz\n   Soarele-n extaz\n   Ei se duc la pas spre un alt popas\n   Satra de pripas\n   Pana nu-i mai vezi, pana nu-i mai crezi\n   Si din ochi ii pierzi\n   Printre ceturi verzi, ceturi de livezi\n   Vezi ca nu-i mai vezi.\n\nvers1\nGiacardea, cardea\nGialino mura\nGia mura mura\nCe misto ...",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "G",
      "D",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 116,
    "title": "Mugur de fluier",
    "slug": "mugur-de-fluier-116",
    "content": "G D Am C\nG D G D Dsus4 D5    x2\n\n\nG        D\nÎmi simt sufletul\nAm      C      G D G D Dsus4 D5\nMugur de fluier,\nG         D\nCe-a doinit\nAm        C   G D G D Dsus4 D5\nCântec cu șuier.\nG          D\nPentru zilele\nAm         C     G D G D Dsus4 D5\nCe-au fost trecute\nG           D\nPentru nopțile\nAm       C     G D G D Dsus4 D5\nNegre și slute.\n\nG D C A\nG D Am Em D    x2\n\nAm pornit\nCu roua-n picioare\nCa să cânt\nUn cântec de soare\nPentru zilele, zilele..\nCe au să vie..\nPentru nopțile, nopțile..\nCu iasomie..\n\nG         D C  A\nFreamătul a-pe-lor\nG           D  Am  Em   D\nȘi foșnetul co-dri-lor,\nG        D   C  A\nÎn el se În-tâl-nesc\nG             D  Am  Em   D\nȘi sufletu-mi în-căl-zesc.\n\nG    D    C       A\nHei, hei, verde e iarba,\nC         D       G   D\nSoarele-i sus pe cer!\nG    D    C       A\nHei, hei, dusă e iarna,\nC         D      G    D\nCu dinții ei de fier!.\n\nSolo:\nG D Am C\nG D G D Dsus4 D5    x2\n\nHei, hei, verde e iarba,\nSoarele-i sus pe cer!\nHei, hei, dusă e iarna,\nCu dinții ei de fier!",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "Am",
      "C",
      "Em"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 117,
    "title": "Strada ta",
    "slug": "strada-ta-117",
    "content": "INTRO: G D C D\n\n\nVERSURI:\n G     D      C    D    G   D C D \nIeri am trecut pe strada ta\nG   D   C    D      G  D  C  D\nSi soarele se tot juca\nG     D   C    D        G D C D\nCand aparea, cand disparea\nG     D    C   D     G D C D\nDin calea norilor fugea.\n\nEm        C   Em           D\nDoar o privire, atata asteptam\nEm        C            D\nDoar o privire, mai speram\n\n\nAi aparut la geam tarziu\nCe ora era nici nu mai stiu.\nO clipa doar tu m-ai zarit\nSi te-am strigat, dar n-ai venit.\n\nDoar o privire, atata asteptam\nDoar o privire, mai speram\n\n\nREFREN:\n          G  D C D              \nTe voi astepta, \n                G    D C D\nvoi veni pe strada ta\n        G      D C\nTe astept mereu, \nC               D\nfara tine mï-e greu\n\n.........\n\nOOOOUUAHHH!!!\n        A     E D E\nTe voi astepta, \n               A      E D E\nvoi veni pe strada ta\n     A         E D\nTe astept mereu, \nD               E\nfara tine mï-e greu\n\n\nZRANGA ZDRANGA......ne vedem in vama ;)",
    "author": {
      "id": 56,
      "name": "Iris",
      "slug": "iris"
    },
    "author_id": 56,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "C",
      "Em",
      "A",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 118,
    "title": "Ziua vrajitoarelor",
    "slug": "ziua-vrajitoarelor-118",
    "content": "Em \nIntr-o zi de joi\nG\nCa asa-i la noi\nD\nSeara se lasa\nEm D   Em\nFara folos\nEm\nPoate nu-i asa\nG\nSi e altceva\nD\nNorii se lasau\nEm D Em\nPana jos\nG\nAzi e ziua lor\nD\nZiua ielelor\n\nVrajitoarelor\nEm D   Em\nPana-n zori\nG\nIata se pornesc\nD\nSi se sfatuiesc\n\nOalele pocnesc\nEm D  Em\nCu licori\nEm\nBoabe si furnici\nG\nIerburi si urzici\nD\nTot ce e aici\nEm D Em\nMana lor\nEm\nDragoste si vis\nG\nIad si paradis\nD\nIn palma ti-au scris\nEm D Em\nSoarta ta\n\n\nEm  G       D       Em\nO,o,o ai un mare noroc\nEm  G      D      Em\nO,o,o ghinioane deloc\nEm     G          D\nTot ce vezi sa nu crezi\n\nCa asa ti-e Soarta\nEm       G          D\nPoti sa-ntrebi,daca vrei\nEm\nVRAJITOARELE",
    "author": {
      "id": 53,
      "name": "Cargo",
      "slug": "cargo"
    },
    "author_id": 53,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 119,
    "title": "Strunga",
    "slug": "strunga-119",
    "content": "Em    G     F      Dm    Em\nÎn pădurea de la strungă\nSunt de cei cu puşca lungă\nCare dau chiorâş la pungă\n\n\nEm    G       F       Em\nSunt de cei ce-mpuşcă-n lună\nCare noaptea-n frunze sună\nFeciori de lele nebună\n\n\nFă-te-n lături măi creştine, măi\nDacă vrei să treci cu bine\nSă rămâi cu viaţă-n tine\n\n\nOpt voinici cu spete late\nşi cu mâneci suflecate\nStau cu puştile-ncărcate\n\n\nOleleu, ciocoi bogate, hei\nIci te-i trece din păcate, hei\nSă-ţi arunc doi glonţi în spate, hei\n\n\nCă mi-e puşca hultuită \nşi mi-i ghioaga tintuită\nşi mi-e inima-ncoltită",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "F",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 120,
    "title": "Vremuri",
    "slug": "vremuri-120",
    "content": "Tonalitate originala F#\n\n G     C           D             G\nHei, tramvai, cu etaj şi tras de cai\nHei, joben, ce umblai la mon jardin\nHei, bunic, cu monoclu erai şic\nHei, can-can, cu picioarele-n tavan.\n\n        \t\tEm\nToate-au fost la timpul lor\n      C         D\nCeva exagerat\nAnii au trecut în zbor\nşi lumea le-a uitat.\n\nHei, pletoşi, cu pantaloni strâmţi şi soioşi\nChitarişti, zgomotoşi şi fantezişti\nMini-jupe, foarte scurt şi strâns pe trup\nHei, to shake, îndrăcit ca un berbec.\n\nToate sunt la modă acum\nCeva exagerat\nTimpul trece ca un fum\nşi tot va fi uitat.\n\nPrima strofa inca o data",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "Em",
      "F#"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 121,
    "title": "Floare de iris",
    "slug": "floare-de-iris-121",
    "content": "Am         Dm      E           E7  E\nFloare de iris....floare de colt,\nAm         Dm       E          E7  E\nNe-ai ocrotit , ne-ai dat un rost\n             F           G\nIar cand noi nu vom mai fi\nDm        Am         C     G    Am\nVa veti aminti ca a fost odata Iris\n\n           F             G\nIar cand noi nu vom mai fi\nDm          Am        C     G    Am\nVa veti aminti ca a fost odata Iris \n\nla fel peste tot....;)\n\n\nPe strazile viselor am alergat\nSi v-am iubit si v-am cantat\nIar cand noi nu vom mai fi\nIar noaptea va fi zi\nVa veti aminti ca-a fost odata Iris\n\nIar cand noi nu vom mai fi\nVa veti aminti ca a fost odata Iris x2\nCa a fost odata Iris\n\n have fun! ne vedem la vama veche :D:D:D:D:D",
    "author": {
      "id": 56,
      "name": "Iris",
      "slug": "iris"
    },
    "author_id": 56,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E",
      "E7",
      "F",
      "G",
      "C",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 122,
    "title": "Singur",
    "slug": "singur-122",
    "content": "[1]\n  Am\nO vad tremurand cu ochii inchisi\n                              G\nCu poze in jur, genunchii stransi\n                                 Am \nSlabita si trista, cu cearcani adanci\n\n\n[2]\n    Am\nSi vrea sa-i promit ca n-o sa uit\n                         G\nImagini si locuri din trecut\n                          Am\nSi visele-n care noi am crezut\n\n\n\nAnterefren:\nF\nSunt nopti intregi cand palng\n    C\nSi-adorm cu tine-n gand\n  Dm\nPleacta esti ep veci\n    E\nDeparte-n umbre reci\n\n\nRefren:\n   C-G    Dm     C    \nSingur, atat de singur\n   Am           F \nSimt dureri pe care\n        C          G\nNu mai pot sa le-ndur\nC     G   Dm      Am  \nLacrimi, nopti in lacrimi\n   C        G             Am\nSi-n inima mea, doar lacrimi\n\n\n[3]\n  Am\nSi sta in genunchi la piept tinant\n                         G\nO veche scrisoare si plangand\n\nSi-mi spune prin lacrimi \n                  Am\nCe mult i-a palcut\n\n\n[4]\n Am\nMa roaga sa jur ca n-am mintit\n                                G   \nIn tot ce i-am scris si mi-a soptit\n\nCa pleaca cu gandul\n                Am \nCa noi ne'am iubit\n\n\nAnterefren + Refren\n\n\n[5]\n\nRevad ochii tai cum s-au stins\n\nCum tamplele reci le-am cuprins\n\nDestinul pe ne-a invins.\n\nSpor la zdranganit!",
    "author": {
      "id": 59,
      "name": "Talisman",
      "slug": "talisman"
    },
    "author_id": 59,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "G",
      "F",
      "C",
      "Dm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 123,
    "title": "Doina haiducului",
    "slug": "doina-haiducului-123",
    "content": "Dm                     F \nFreamătă frunza în vânt\nGm            C\nMurmură apa în râu\nBb                 Gm\nSpicul plecat la pământ\n  C \nVălura lanul de grâu.\nF\nFiul codrului sunt,\nGm                C\nLiber ca pasărea-n zbor\nBb                Gm\nDoina haiducului cânt\nBb       Gm       Dm\nPlină de jale si dor\n\nPuşca-i logodnica mea,\nMurgul e fratele meu\nViaţa în codru e grea\nTraiul haiducului greu\nPune-ţi pistoalele-n brâu\nBoierul la târg a pornit\nSloboade armăsarul din frâu\nRăsplata prin noi a venit\n\n\tF                   C\n\tşi cum îmi place să dorm\n\tGm                   Dm  C\n\tNoaptea-n pădure la foc\n\tF                C\n\tStăm împreună cu toţi\n\tGm          Bb  Dm\n\tVisul, lângă izvor.\n \nSeara la rug, obositi\nCântă haiducii de dor\nLaşii au fost pedepsiti\nDe bogătiile lor\nDrumul omului - greu\nPână la ultima stea\nLiber e sufletul meu,\nLiberă-i inima mea.\n\n\tRefren",
    "author": {
      "id": 60,
      "name": "Zdob și Zdub",
      "slug": "zdob-si-zdub"
    },
    "author_id": 60,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "F",
      "Gm",
      "C",
      "Bb"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 124,
    "title": "Adio, deci pe curand",
    "slug": "adio-deci-pe-curand-124",
    "content": "D             G        D    G D\nIubito, poti fugi cât vrei,\nD             G         D   G D\nÎn gând vei auzi pasii mei.\nD                  G        D  \nPoti spune vorbe multe în vânt,\n   A\nEu n-am sa ascult,\nOh! N-am sa le-ascult!\n\nIubito, poti în lume umbla\nDe mine nu mai poti scapa.\nVoi trece zilnic prin gândul tau\nPrin ochii tai.\nPrin ochii tai.\n\nRefren:\n              G             D\nDar spune-mi cine te-a mai purtat prin nori?\n              G             D\nSi spune-mi cine te-a mai visat în culori?\n             G              D\nSi stii tu cine de toate a uitat,\n             G               A\nDe când cu tine, prin ploaie   s-a plimblat?\n\nNu uiti tu zilele de mister\nNici clipa când stele pier\nNu uiti ziua aceea de mai\nCând îmi spuneai:\nMai stai, mai stai!\n\nNu uiti tu zilele de mister\nNici clipa când stele pier\nCând timpul pentru noi disparea\nSi inima ta\nBatea, batea!\n\nRefren\n\nTe vad acum grabita sa pleci\nCum cauti doar cuvinte mai reci\nLe spui, dar în spatele lor\nMai simt cum te dor.\nMai simt cum te dor.\n\nTe vad cum mai încerci sa zâmbesti\nDar ochii tai fug de povesti\nSi nu te uiti la mine plecând\nDeci, pe curând!\nDa, pe curând!",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 125,
    "title": "Canarul",
    "slug": "canarul-125",
    "content": "E                         C#m\nCanarul galben ca un galbenus\nE        B  A           E\nCu pene moi  si ochii dusi\n                           C#m\nCanta de dupa sarmele de-argint\nE            B A            E\nSi viersu-i se  pierdea in vant\n                               C#m\nDeodata ochii tristi din cap tresar\nE           A   F#m          E\nSi da din aripi,   dar in zadar\n                               C#m\nLovind cu pieptul sarmele de argint\nB        A  F#m              E\nCade in jos     cu pieptul frant\n  A      B             E\nSarman canar, ti s-a parut\n    A  B              E\nCa zarile ti s-au deschis\n     A        B             C#m\nDar n-a fost doar, decat un vis\nA             E\nRanit tu ai cazut\n\nE                         C#m\nCanarul galben ca un galbenus\nE        B  A           E\nCu pene moi  si ochii dusi\n                          C#m\nCanta de dupa sarmele de-argint\n            A  B               E\nSi viersu-i se     pierdea in vant\nSi viersu-i se pierdea in vant\nSi viersu-i se pierdea in vant",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "E",
      "C#m",
      "B",
      "A",
      "F#m"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 126,
    "title": "Cantec soptit",
    "slug": "cantec-soptit-126",
    "content": "Intro pian: D Em C Am D Em C Am G D G D G A Am C Bm G D\nD             G    D\nOdata am ucis   o vrabie.\n                                A\nAm tras cu prastia in ea si-am lovit-o.\nG          D   G                D\n Pe urma o zi   si o noapte intreaga  |\nG        A                   D        |  x2\n Am tot plans-o si am tot jelit-o.    |\n\nPian:\nD Em C Am D Em C Am\n\nNu m-a batut mama, nu m-a certat.\nIn mana tineam o bucata de paine.\nDegeaba mi-a spus, degeaba mai plangi,\nCe-ai omorat, omorat ramane.\n\nMai tarziu am crescut flacaiandru,\nM-am indragostit nebuneste de-o fata.\nNu stiu de ce, intr-o zi a murit\nSi-n alta zi a fost ingropata.\n\nDe mult nu mai trag cu prastia-n vrabii,\nDe mult nu mai merg la nici o-ngropare.\nSoarele apune dupa niste maguri\nSi rasare in flacari din mare.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Em",
      "C",
      "Am",
      "G",
      "A",
      "Bm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 127,
    "title": "Daca ai ghici",
    "slug": "daca-ai-ghici-127",
    "content": "Intro: C Am F C G   C Am F G C\n\nC\nDaca ai ghici\n               Am\nTot ce-ti pot dori,\nEu ti-as prinde-n par\n            F\nCununa de sori,\n            C    G \nStopita cu floooori.\n\nC\nIncearca sa zambesti\n             Am\nFar'sa te-amagesti\nSi sa iti doresti\n           F  G\nUn lucru usor\n              C        \nFiindca-i trecator.\n\nA||---0--2----|\nAm                     \nDaca iei un strop de ploaie\n     Em\nIn palma ai sa vezi\nDm                      C\nCa nu-i atat de greu sa speri.\n\nA||---0--2----|\nAm\nFur-o raza de lumina,\nEm\nIncearca-n ea sa crezi\nDm                         G\nSi ridica-ti fruntea spre cer.\n\nC\nDaca ai ghici\n               Am\nTot ce-ti pot dori,\nEu ti-as prinde-n par\n            F\nCununa de sori,\n            C    G \nStopita cu floooori.\n\nC\nIncearca sa zambesti\n             Am\nFar'sa te-amagesti\nSi sa iti doresti\n           F  G\nUn lucru usor\n              C        \nFiindca-i trecator.\n\nIa un strop de fericire\nDintr-un colt de cer,\nOchii oglindeste-i in el.\nIa un fluture din soare,\nPuneti-l in par,\nLanga o cununa de mar.\n\n\nDaca ai ghici\nTot ce-ti pot dori,\nEu ti-as prinde-n par\nCununa de sori,\nStopita cu flori.\n\nIncearca sa zambesti\nFar'sa te-amagesti\nSi sa iti doresti\nUn lucru usor\nFiindca-i trecator.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "Am",
      "F",
      "G",
      "Em",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 128,
    "title": "Esarfa in dar",
    "slug": "esarfa-in-dar-128",
    "content": "Capo pe II\n \nD\nCu ape de rosu-n ochi,\nBm\nValuri largi de alb,\nF#m\nMov si verde zboara cald\n              Em   A\nPe chipul tau drag,\n            D  G A\nEsarfa in dar.\n\nD\nTin minte si-acum\nBm\nNe-am oprit din drum\nF#m\nCe bine-mi amintesc, ce clar,\n          Em    A\nTi-am infasurat\n           G\nEsarfa in dar.\n\nPasaj: B E B E B \n\nD\nCulorile alergau,\nBm\nIn vant se certau\nF#m\nFata toata-ti lumina\n            Em   A\nCu albul de var,\n           D  G\nEsarfa in dar.\n\nAveam optsprezece ani,\nEram Beatles fani\nSi umblam in tenisi albi.\nPrimavara-n par\nSi miros de mar.\n\nRefren:\nBm         F#m\nAaaaaaaaaa mai trecut de-atunci ceva,\nBm           F#m\nAaaaaaaalbul de var nu-i chiar la fel\n      G\nTu gandesti altceva\nD           Bm\nSi mai e si el.\nEm\nEu, aici, tu, acolo,\nE          A\nNiciodata noi.\n\n\nTe mai vad, cand si cand,\nEl in stanga ta,\nSi nu pot sa-ti spun ce gandesc\nCand la gatu-i vad\nEsarfa in dar.\n\nCu ape de rosu-n ochi,\nValuri largi de alb,\nMov si verde zboara cald\nPe chipul tau drag,\nEsarfa in dar.\nPe chipul tau drag,\nEsarfa in dar...\nPe chipul tau drag...\nEsarfa in dar...\n \n\n\n\n\nE\nCu ape de rosu-n ochi,\nC#m\nValuri largi de alb,\nG#m\nMov si verde zboara cald\n              F#m  B\nPe chipul tau drag,\n            E  A B\nEsarfa in dar.\n\nE\nTin minte si-acum\nC#m\nNe-am oprit din drum\nG#m\nCe bine-mi amintesc, ce clar,\n          F#m   B\nTi-am infasurat\n           A\nEsarfa in dar.\n\nPasaj: B E B E B \n\nE\nCulorile alergau,\nC#m\nIn vant se certau\nG#m\nFata toata-ti lumina\n            F#m  B\nCu albul de var,\n           E  A\nEsarfa in dar.\n\nAveam optsprezece ani,\nEram Beatles fani\nSi umblam in tenisi albi.\nPrimavara-n par\nSi miros de mar.\n\nRefren:\nC#m        G#m\nAaaaaaaaaa mai trecut de-atunci ceva,\nC#m          G#m \nAaaaaaaalbul de var nu-i chiar la fel\n      A\nTu gandesti altceva\nE           C#m\nSi mai e si el.\nF#m\nEu, aici, tu, acolo,\nF#         B\nNiciodata noi.\n\n\nTe mai vad, cand si cand,\nEl in stanga ta,\nSi nu pot sa-ti spun ce gandesc\nCand la gatu-i vad\nEsarfa in dar.\n\nCu ape de rosu-n ochi,\nValuri largi de alb,\nMov si verde zboara cald\nPe chipul tau drag,\nEsarfa in dar.\nPe chipul tau drag,\nEsarfa in dar...\nPe chipul tau drag...\nEsarfa in dar...",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Bm",
      "F#m",
      "Em",
      "A",
      "G",
      "E",
      "C#m",
      "G#m",
      "B",
      "F",
      "F#"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 129,
    "title": "Hanul lui Manuc",
    "slug": "hanul-lui-manuc-129",
    "content": "C              F\nFata frumoasa, fata straina,\nC                G\nDiseara am sa te duc\n    C                 F\nPentru convorbiri pentru cina\n   C     G     C\nLa Hanul lui Manuc,\n   F     G     C\nLa Hanul lui Manuc.\n\nRefren:\nC          F\nNu sînt trasuri,\n   G       C\nNu poti sa pleci,\nF       G     C\nSecolul e douazeci.\nC          F\nNu sînt trasuri,\n     G      C\nN-ai cum sa pleci,\nF       G     C\nSecolul e douazeci.\n\nC             F\nDiseara sa fi pregatita,\n  C              G\nDiseara am sa te duc\n         C               F\nPentru o cafea turceasca si-o clatita,\n   C     G     C\nLa Hanul lui Manuc,\n   F     G     C\nLa Hanul lui Manuc.\n\nRefren\n\nC                F\nNu vin haiducii, sînt ospatarii\nC                G\nDulce iubito, eu sînt\n       C             F\nGândul meu afla-l tu si tîlharii,\n   C     G     C\nLa Hanul lui Manuc,\n   F     G     C\nLa Hanul lui Manuc.\n\nRefren\n\nC               F\nHaide frumoaso, haide straino,\nC                  G\nDragostea mea fara leac\nC               F\nVino cu mine, surâzi si vino,\n   C     G      C\nLa Hanul lui Nalbea,\n   F     G      C\nLa Hanul lui Nalbea.\n\nC          F\nSînt si trasuri,\nG          C\nPoti si sa pleci,\nF          C     G       C\nMai e un mileniu pâna sa fie\nF       G     C\nSecolul e douazeci.\nC          F\nSînt si trasuri,\nG          C\nPoti si sa pleci,\nF          C     G       C\nMai e un mileniu pâna sa fie\nF       G     C\nSecolul e douazeci.\nF          C     G       C\nMai e un mileniu pâna sa fie\nF       G     C\nSecolul e douazeci.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "F",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 130,
    "title": "Intoarcera la Orient",
    "slug": "intoarcera-la-orient-130",
    "content": "Intro: Va jucati pe Re si nota C (fretul 3)\n\nD                     C   \nSe intoarce iar acasa Fat Frumos din pribegie \nG                  D\nLa batranii sai parinti \n\nLa batranii sai parinti \nD                           C   \nSi cu gand sa-si ia mireasa ca un fir de papadie \nG                   D\nNumai bun de rupt in dinti \n\nNumai bun de rupt in dinti \n\nDar obloanele-s lasate pe o lipsa de mirese \nSi-asta inca nu-i destul \nSi-asta inca nu-i destul \nUmbla zvonul ca-s plecate sa devina-mparatese \nUndeva prin Istambul \nUndeva prin Istambul \n\nPrin dughene si tramvaie cu confort sporit de cusca \nTatal zvon e imparat \nTatal zvon e imparat \nSi se-arata ades pe ploaie zvon de mite goale pusca \nPrin Orient dupa vanat \nPrin Orient dupa vanat \n\nG            C         G            D    G\nRadeti voi, radeti voi vechi amici din Bizant \nG            C          G         D  \nRadeti voi dar priviti diligenta zace-n sant \nG         C         G        D        G\nChiar si calul abia mai respira de-un sfant \nG             C        G         D\nIar sub noi, ce belea, bicicleta n-are lant \n\nAlte zvonuri vand comploturi cu savante tevi de pusca \nSlugi marunte si mai mari \nSlugi marunte si mai mari \nUnele cu doua poturi ca sa-l afle in timp ce musca \nBiata lume de salvari \nBiata lume de salvari \nSub escorta din savana cic-ar fi sosit aseara \nIntr-un tren accelerat \nIntr-un tren accelerat \nChipul zeului banana ce va fi expus in gara \nSi apoi sanctificat \nSi apoi sanctificat \n\nRadeti voi, radeti voi, vechi amici din Bizant \nRadeti voi dar priviti diligenta zace-n sant \nChiar si calul abia mai respira de-un sfant \nIar sub noi, ce belea, bicicleta n-are lant \n\nPoate nu-i exact decorul, poate-mparatia-i trista \nInsa plina de umor \nInsa plina de umor \nHai sa tragem zdrang zavorul realitatea nu exista \nNoapte buna tuturor \nDoamnelor si domnilor.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "C",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 131,
    "title": "Laptaria lui Enache",
    "slug": "laptaria-lui-enache-131",
    "content": "D\nIti amintesti, se inserase,\n                    Em \nUmblam pe starzi intortocheate,\n                       G\nMergeam firesc pana la urma\n                   D\nLa Laptaria lui Enache.\n\nD\nIubito, hai, prin poarta noptii,\n                             Em\nSa trecem si-o sa-mi dai dreptate,\n                           G\nSa stam macar un ceas sau doua,\n                  D\nLa Laptaria lui Enache.\n\nF#m          G\n   Habar nu am, habar nu ai,\n        D                     A\n   Ca timpul trece, se prea poate,\nF#m         G\n   Pana la ziua sa ramanem,\n          D                    A\n   Deci iarasi suntem pusi pe fapte.\n\nIti mai spuneam din cand in cand,\nC-o sa ma pierd cu tine-n noapte,\nDar tot ne-oprim sa bem o bere,\nLa Laptaria lui Enache.\n\nErai usor infiorata,\nE-adevarat, trecuse anu',\nO, Doamne, cat de mult doreai\nSa cante Johnny Raducanu.\n\nHabar nu am, habar nu ai,\nCa timpul trece, se prea poate,\nPana la ziua sa ramanem,\nDeci iarasi suntem pusi pe fapte.\n\n(solo )\n\nHabar nu am, habar nu ai,\nCa timpul trece, se prea poate,\nPana la ziua sa ramanem,\nDeci iarasi suntem pusi pe fapte.\n                      E\nLa umbra ochilor tai mari,\n                        F#m\nSa stau s-ascult e-o sarbatoare,\n                     A\nAm reusit s-avem un loc\n                  E\nSi asta este de mirare.\n\nE\nSi fiindca te doresc prea mult\n                        F#m\nSi casa mea nu-i prea departe,\n                      A\nTe iau de mana si te duc\n                  E\nDin Laptaria lui Enache.\n\nE        A \nLaptaria  lui Enache (x5 & fade out)",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Em",
      "G",
      "F#m",
      "A",
      "E",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 132,
    "title": "Mica Tiganiada",
    "slug": "mica-tiganiada-132",
    "content": "Pasarea Colibri-Mica tiganiada\n\nINTRO: Am\n\nAm      C      G\nTrec tigani pe drum,\nAm       C      G\nDrumu-i plin de fum,\nAm     C       G\nFumu-i plin de scrum,\nE     Am\nFoc ardea!\n\nVai tigani, tigani,\nGipsies si gitani,\nFara cer si ani,\nTrec pe drum!\n\nG        C\nTiganie, rai\nG         C\nRai care erai\nG   C   G\nCaravan serai\nE     Am\nGiacardea.\n\nRaiul meu beteag,\nDe pe alt meleag\nCat imi esti de drag,\nNu stiu cum.\n\n\nTrec tigani prin colb\nColbul este orb,\nOrbul e un corb,\nGiacardea.\nCade seara-n camp,\nSoarele-i scalamb,\nCortul este stramb,\nFoc ardea.\n\nFac tiganii foc,\nFocu-i la mijloc,\nFete cu ghioc.\nSi cu carti de joc,\nHai, noroc, noroc,\nVino la soroc.\n\nVino sa-ti ghicesc,\nCartile vorbesc\nSi nu ne mintesc,\nGiacardea.\nFata de caro,\nSub cer indigo,\nSa-ti spun incotro\nFoc ardea.\n\nCa multi ani s-au scurs\nDe cand el s-a dus\nCu un pui de urs\nPe un drum.\nCu belciug si lant,\nFara nici un sfant,\nSpre un targ bizant,\nFoc ardea.\n\nZaiafet acum,\nLautari duium,\nNumai tu nicicum,\nGiacardea.\nNoaptea de-ar veni,\nPe pamantul gri,\nDe ne-ar adormi,\nOrisicum.\n\nO, dar azi, dar azi,\nCeru-i de atlaz,\nSoarele-n extaz.\nEi se duc la pas\nSpre un alt popas,\nSatra de pripas.\nPana nu-i mai vezi,\nPana nu-i mai crezi\nSi din ochi ii pierzi.\nPrintre ceturi verzi,\nCeturi de livezi,\nVezi ca nu-i mai vezi.\n\nGiacardea, cardea,\nGialino mura,\nGia mura, mura,\nCe misto...\nGiacardea, cardea,\nGialino mura,\nGia mura, mura,\nCe misto...\nGiacardea, cardea,\nGialino mura,\nGia mura, mura,\nCe misto...\nGiacardea, cardea,\nGialino mura,\nGia mura, mura,\nCe misto...\n\nFoarte simplu si foarte corect asa. Nu inteleg de ce se compica toata lumea \ncu o gramada de acorduri la melodia asta :-?\nOricat de mult v-ati chinui, n-o sa va iasa niciodata ca lui Baniciu :))\n(Capodastru pe tasta 4 daca vreti sa sune ca originalul)\n\nzdranga-zdranga, fun fun fun :)",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "G",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 133,
    "title": "Miruna",
    "slug": "miruna-133",
    "content": "Suna bine din D, cu capo pe III (originalul e in F)\n\nD\nDragă Miruna îţi spun printre şoapte\n    G\nÎmi place cămaşa ta de noapte\n    A\nDar mai ales vreau să-ţi dau de ştire\n        G        A\nSă mi-o laşi ca amintire,\n        G         A\nSă mi-o laşi ca amintire\n\nNespus de frumos dormeai o noapte blândă\nZâmbeai prin somn iau eu stăteam la pândă\nSă nu te trezesc, să tulbur visele tale\nDar vreau să-ţi iau şi costumul de baie\nSă te-admir cu şi fără costumul de baie\n\n     Bm                       G\nÎn Grădina Botanică, într-o duminică\n      D        A\nEa se plimbă\n          Bm                   G\nNe-am fotografiat cu un vechi aparat\n   D       A\nAutomat\n\nUn celebru şi bun coleg de facultate\nSpunea c-aveai blugii rupţi la spate\nVeneai spre casă când afară plouă\nCu troleibuzul 89\nBlondă şi tristă cum ne-ai plăcut nouă\n\nCu pălăria de paie cu panglică mov\nIeşeai din clădirea de pe strada Snagov\nUşor te-ndreptai spre calea Moşilor\nSă-ţi iei bluză pepit de la Bucur Obor\nBluză pepit de la Bucur Obor\n\nVenind din practică poşetă galbenă\nEa îşi luă\nÎn magazine-a intrat, fustă şi-a cumpărat\nMaxi-nflorat\n\nDragă Miruna, ce rost are să-ţi cumperi toate lucrurile acestea – cheltuieşti o... \nsumă prea mare de bani. De fapt, ştii foarte bine ce-ţi spuneam in seara aceea, \nprintre şoapte...\n\n...Îmi place cămaşa ta de noapte\nDar mai ales vreau să-ţi dau de ştire\nSă mi-o laşi ca amintire\nSă mi-o laşi ca amintire\n\nAcum mă priveşti dintr-o poză cu zimţi \nAtunci aveai nervi dar şi buze fierbinţi\nşi te auzeam cum strigai printre şoapte\nUnde-i cămaşa mea de noapte\nUnde-i cămaşa mea de noapte\nLa mine-i cămaşa ta de noapte\nLa mine-i cămaşa ta de noapte\nPlâng pe cămaşa ta de noapte\nPlâng pe cămaşa ta de noapte",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
      "A",
      "Bm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 134,
    "title": "Ploaia care va veni",
    "slug": "ploaia-care-va-veni-134",
    "content": "(adaptare de Dorin Liviu Zaharia dupa\no piesa a grupului \"ECHIPA '84\", Dorin Liviu Zaharia)\n\nD                          F#m\nSunt un frate tanar, care crede in dreptate,\n         A                    D\nAm ochi negri dar am mainile curate.\nD                            F#m\nIubesc pletele si ploaia si camasile-nflorate,\n      A                               D\nNu raspund cand mi se-arunca vorbe-n spate.\n\nEm                 D\nUn fapt fara importanta\nEm                D\nma poate face sa sper,\nEm                  D\nMa-nclin si pun in balanta\nEm                   D\nce-i sfant cu ce-i efemer.\n                  Em\nPeste tot atarna greu\nA                D\n Teama de sinceritate...\n\nDar de cate ori, prieteni, n-am suras cu intristare\nCand sperantele pareau inselatoare.\nCand necinstea si prostia\nsi-ascundeau prin gropi norocul,\nStiti de cate ori, prieteni, le-am prins jocul.\n\nNe-am saturat de palavre,\nde carti si filme de soc,\nCu vampe, regi si cadavre,\ncu stele de iarmaroc.\nPloaia care va veni\nLe va potopi pe toate.\n\nNi-e lehamite de marsuri,\nde tromboane si plocoane,\nDe blazoane, de canoane si fasoane.\nFiindca banul si prostia\nsunt pericole morale\nCircul vietii ne-a impus salturi mortale.\n\nDeasupra florilor noastre\nciuperca cheama a pustiu,\nDin cer cad pasari albastre\nsi totusi nu e prea tarziu.\n\nPloaia care va veni\nLe va potopi pe toate.\nSa-ncercam sa facem noi\nUn oras fara pacate.\n4*| Ploaia care va veni\n| Le va potopi pe toate.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "F#m",
      "A",
      "Em",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 135,
    "title": "Sfarsitul nu-i aici",
    "slug": "sfarsitul-nu-i-aici-135",
    "content": "(original: \"Death is not the end\") \nAutor muzica: Bob Dylan \nAutor versuri: Bob Dylan, trad. Florian Pittis\n\nA\nCand necazuri te doboara\nSi prieteni n-ai sa-i strigi,\n      E\nTine minte\n                A\nsfarsitul nu-i aici.\n\nA\nSi ce slaveai in taina\nE-asa cum nu-ti explici,\n       E\nTine minte\n                A\nsfarsitul nu-i aici.\n\nRefren\nA\nNu-i aici, (nu, nu)\nNu-i aici, (nu, nu)\n      E\nTine minte\n D       E     A\nsfarsitul nu-i aici. (nu, nu)\n\nCand oprit la o rascruce,\nDrumul nu stii sa-l prezici,\nTine minte\nsfarsitul nu-i aici.\n\nCand nu mai ai nici vise\nSi nu stii cum sa te ridici,\nTine minte\nsfarsitul nu-i aici.\n\nRefren\n\nCand se-aduna norii negri,\nPloaia cade ca un brici,\nTine minte\nsfarsitul nu-i aici.\n\nMangaiere n-ai, nu vezi acum\nMaini intinse de amici\nTine minte\nsfarsitul nu-i aici.\n\nRefren\n\nBridge\n        D\nPomul vietii creste mandru\n       A\nUnde spiritul e viu,\n     D\nLumineaza ea, salvarea,\n       A           E\nCerul gol si cenusiu.\n\n\nCand orasele-s in flacari,\nMusuroaie de furnici,\nTine minte\nsfarsitul nu-i aici.\n\nSi cand cauti in zadar un om\nPrintre-atatea mii de venetici,\nTine minte\nsfarsitul nu-i aici.\n\nRefren & fade out",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "A",
      "E",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 136,
    "title": "Vanare de vant",
    "slug": "vanare-de-vant-136",
    "content": "C               F     G7      C\nCate drumuri un om ar avea de facut \nC               F      G7\nPana ei sa-l considere om?\nCate mari pescarusii mai au de batut\nPan-ajung pe nisip pentru somn?\nCate bombe vor mai sfarteca vieti intregi\nPan'sa le interzicem pe veci?\n\n            F          G7         C       Am\nRefren : Raspunsul, prieteni, e vanare de vant\n            F          G7      C\n         Raspunsul e vanare de vant\n         Raspunsul, prieteni, e vanare de vant\n         Raspunsul e vanare de vant.\n\n\nCati ani poate-un munte in lume trai\nPana marea sa-l spele-ntr-o zi?\nSi cati ani si oamenii pot vietui\nPana liberi permis li-i a fi?\nDe cate ori omul vede un rau\nSi tace intorcand capul sau?\n\n\nRefren: ...\n\n\nDe cate ori omul in sus va privi\nPana cerul sa-l vada de-ajuns?\nCat de multe urechi necesare ii sunt\nCa s-auda al gurilor plans?\nCati mai au de murit ca s-aflam in sfarsit\nca oameni prea multi au pierit?\n\n\nRefren: ...\n\n\n\n*Nota: Cantec folk de referinta.\n\nSucces!",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "F",
      "G7",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 137,
    "title": "Viata la tara",
    "slug": "viata-la-tara-137",
    "content": "              \n  G\n| La, ra-ra-ru, la-p-ta,\n\n| La, ri-ra-ra-ra,\n  C\n| La, ri-li-lu-li-p-ti\n\n| La-la-ri-lu-la-la,\n  D\n| Lu, li-li-lu-li-p-ti,\n   \n| Lu-lu-lu-li-lu, \n                             G C G\n| Li-lu-lu, li-lu-lu, li-lu-lu !\n\nG    \nLocuinta mea de vara \nC\nE la tara ...\nD               G C G\nAcolo era sa mor \nG      \nDe urat si de-ntristare\nC\nBeat de soare\nD                 G C G              \nSi parlit ingrozitor!\n\n\nAcolo, cand n-are treaba, \nOrice baba\nEste medic comunal. (medic!)\nViata ce aci palpita\nE lipsita\nDe confort occidental.\n\nNu exista berarie, (au!)\nNici regie ...\nDoar un hot de carciumar (hot de carciumar! ha-ha!)\nCare are marfa proasta\nSi-o nevasta \nCe se tine c-un jandar'.\n\n| La, ra-ra-ru, la-p-ta,\n| La, ri-ra-ra-ra,\n| La, ri-li-lu-li-p-ti\n2* | La-la-ri-lu-la-la,\n| Lu, li-li-lu-li-p-ti,\n| Lu-lu-lu-li-lu, \n| Li-lu-lu, li-lu-lu, li-lu-lu !\n\nCand te duci pe drumul mare\nLa plimbare\nEste praf de nu te vezi: \nTrec, miscand domol din coada,\nSpre livada\nAle satului cirezi. (mmmmmmuu!)\n\nSi te poarta sub escorta\nO cohorta\nDe tantari subtiri la glas, (sss! tz-tz-tz-tz!)\nInzestrati la cap c-o scula\nMinuscula,\nCu pretentie de nas... (o-ho-hopa!)\n\n| La, ra-ra-ru, la-p-ta,\n| La, ri-ra-ra-ra,\n| La, ri-li-lu-li-p-ti\n2* | La-la-ri-lu-la-la,\n| Lu, li-li-lu-li-p-ti,\n| Lu-lu-lu-li-lu, \n| Li-lu-lu, li-lu-lu, li-lu-lu !\n\nCand se ia cate-o masura,\nLumea-njura\nPe agentul sanitar\nSi-l intreaba fara noima:\n\"CE-AI CU NOI, MA ?\nPENTRU CE SA DAM CU VAR ?\"\n\nAle satului mari fete\nFara ghete\nIes la garduri pe-nserat... (aaah!)\n(Am vazut aici-ntr-o noapte\nNiste fapte\nCare m-au scandalizat !)\n\n        A       \nDar in zori incep cocosii\nD\nPacatosii,\nE                   A D A\nCa sa faca iar scandal, (cucurigu!)\nA          \nSa te saturi de viata\nD\nSi dulceata\nE                 A D A\nTraiului patriarhal !\n\n\nD-aia zic eu, prin urmare,\nVorba mare:\nCa de-acuma, sa ma tai,\nNu-mi mai trebuie alta cura (nu!)\nIn natura\nSa ma duceti cu alai !\n\n| La, ra-ra-ru, la-p-ta,\n| La, ri-ra-ra-ra,\n| La, ri-li-lu-li-p-ti\n2* | La-la-ri-lu-la-la,\n| Lu, li-li-lu-li-p-ti,\n| Lu-lu-lu-li-lu, \n| Li-lu-lu, li-lu-lu, li-lu-lu !\n\nMearga pictorii la tara (da!)\nCa sa piara\nDe caldura si de praf ! (asa le trebuie!)\nMie dati-mi strazi pavate, (se-aude, primaria?)\nMaturate, (da!)\nDati-mi cinematograf ! (SI BINGO!)\n\nDati-mi, dati-mi strada-ngusta\nUnde gusta\nOmul viata mai din plin,\nCu trasuri, femei cochete (ee!)\nSi cu fete (EEE!)\nIncaltate cel putin ! (hei!)\n\n| La, ra-ra-ru, la-p-ta,\n| La, ri-ra-ra-ra,\n| La, ri-li-lu-li-p-ti\n2* | La-la-ri-lu-la-la,\n| Lu, li-li-lu-li-p-ti,\n| Lu-lu-lu-li-lu, \n| Li-lu-lu, li-lu-lu, lï-lu-lu !\n\n\nThis one is really easy ;););)    zdranga-zdranga :D:D:D",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "A",
      "E",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 138,
    "title": "Vinovatii fara vina",
    "slug": "vinovatii-fara-vina-138",
    "content": "D \nSunt curat la trup, curat la suflet,\n                             Em\nVreau sa-i inteleg si sa-i iubesc.\n                           D\nNu conteaza cat de lung am parul,\nA                           D\nImportant e cat de mult gandesc.\n\nSimt in trup pletosii daci, comati,\nFirea mea e saltul omenesc.\nNu conteaza cat de lung am parul,\nImportant e cat si cum gandesc.\n\nG           C    G\nLume, lume, sora lume,\nG           C    G\nLume, lume, sora lume,\nC               G      \nDe ce esti rea, rea de gura,\nD                     G\nDe ce ne privesti cu ura?\nC               G\nVinovatii fara vina\nD                  G\nCer sa se faca lumina.\n\nVrea sa-nalt castele de gandire,\nVreau sa fiu lasat sa simt cum cresc.\nNu conteaza cat de lung am parul,\nImportant e cat si cum gandesc.\n\nNu e loc de noi in lumea voastra,\nNu-s din noi acei ce ne muncesc\nSi tin cont de cat de lung am parul,\nNu de cum si cat de mult gandesc.\n\nLume, lume, sora lume,\nLume, lume, sora lume,\nDe ce esti rea, rea de gura,\nDe ce ne privesti cu ura?\nVinovatii fara vina\nCer sa se faca lumina.\n\nE    \nHei, voi, neatenti la soarta noastra\n                               F#m\nHei, voi, ce ne credeti pui de drac!\n                          E\nGandurile voastr-s si-ale noastre,\nB                     E\nGusturile insa nu ne plac.\n\n\nHei, voi, care-ati fost odata tineri,\nHei, voi, care stiti ce-i omenesc!\nNu conteaza cat de lung am parul,\nMai presus e cat si cum gandesc.\n\nLume, lume, sora lume,\nLume, lume, sora lume,\nDe ce esti rea, rea de gura,\nDe ce ne privesti cu ura?\nVinovatii fara vina\nCer sa se faca lumïna.\n\nACORDURILE SUNT SIMPLE, VEDETI VOI CUM VA DESCURCATI KU RITMUL :)",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Em",
      "A",
      "G",
      "C",
      "E",
      "F#m",
      "B"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 139,
    "title": "Pleaca",
    "slug": "pleaca-139",
    "content": "INTRO:\n\nEm  C  D  G  B   x2\n\nEm                  C\n  Era miercuri spre joi\nD                   G      B  Em\n  Ma iubeai pan' la cer si inapoi\n                    C\n  Doua nopti mai tarziu\nF#                 B\n  Nu puteam sa zbor sau sa mai fiu...\n\nEm             C\n  Poza ta la minut\nD                 G      B       Em\n  O scrisoare si-atat, nimic mai mult\n                 C\n  Scria negru pe alb\nF#             B\n  Adiooo! exclamat la final...\n\n  Em                    C\n  Pleaca! maine o sa-mi treaca\n     D                G      B      Em\n  Ce daca durerea a venit si nu mai pleaca\n             C      D\n  Lasa-ma sa mor de dor\n            G       B\n  Fericirea mea, la naiba!\n  Em\n  Pleaca!\n\nAm ramas ca un orb\nNu te mai vad la mine-n viitor\nAm ramas ca un mut\nNici n-am mai apucat sa te sarut...\n\nPleaca! maine o sa-mi treaca\nCe daca durerea a venit si nu mai pleaca\nLasa-ma sa mor de dor\nFericirea mea, la naiba!\n\nPleaca! maine o sa-mi treaca\nCe daca durerea a venit si nu mai pleaca\nLasa-ma sa mor de dor\nFericirea mea, la naiba!\n\nLacrimi nu mai incap\nNumai tu mi-ai dat lumea peste cap\nIn loc sa ne iubim\nNe purtam ca doi anonimi\n\nPleaca! maine o sa-mi treaca\nCe daca durerea a venit si nu mai pleaca\nLasa-ma sa mor de dor\nFericirea mea, la naiba!\n\nEm                    C\nPleaca! Maine o sa-mi treaca\nD\nPleaca!\n\nPleaca! Maine o sa-mi treaca\nPleaca!\nPleaca! Maine o sa-mi treaca\nPleaca!\nPleaca! Maine o sa-mï treaca\nPleaca!\nPleaca",
    "author": {
      "id": 48,
      "name": "Vunk",
      "slug": "vunk"
    },
    "author_id": 48,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "C",
      "D",
      "G",
      "B",
      "F",
      "F#",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 140,
    "title": "Fie sa renasca",
    "slug": "fie-sa-renasca-140",
    "content": "Intro: \n  \nEm D x4\n\nEm        G    D            Em\nFie sa renasca numai cel ce har\nEm          G    D            Em\nAre de-a renaste curatit prin jar\nEm         G       D               Em\nDin cenusa proprie si din propriul scrum\nEm         G        D         Em\nAsctazi ca si maine pururi si acum\n\n   Am           D              Em\n   Cat am asteptat sa vina vara\n   Am            D                 G\n   Mugurii sa se preschimbe-n flori\n   Am                D        G                   Em\n   Am trait doar cu speranta, scump platitam cutezanta\n   Am                D           Bm\n   De-a ravni un cer fara de nori\n   Am                   D      G                       Em\n   Stai de veghe si i-a seama, sa nu-ti fure altul vama\n   Am                   D            Em D\n   Cum s-a intamplat de-atatea ori",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "D",
      "Am",
      "Bm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 141,
    "title": "Sa nu crezi nimic",
    "slug": "sa-nu-crezi-nimic-141",
    "content": "intro:\n             repeta\ne|-----------|---|----/12--/12---12p10p8---7---10b12--10--8--7---10b12~~-|\nB|--<12>--0--|---|-------------------------------------------------------|\nG|-----------|---|-------------------------------------------------------|\nD|-----------|---|-------------------------------------------------------|\nA|-----------|---|-------------------------------------------------------|\nE|-----------|---|-------------------------------------------------------|\n\nStrofa:\n                  Am\n Sa nu crezi ce-ti spun acum\n                  Dm        G\n Vorbele-mi sunt vant nebun\n Am       G           F  \n Sa nu crezi ce-ti spun acum\n  F  \n Chiar de eu iti spun\n     Dm             G\n    vei fi a mea oricum\n\n Sa nu crezi ce-auzi acum\n E un cantec scris pe drum\n Pentru ea, doar pentru ea\n    il voi canta oricum\n\nRef:\n                Em \n Sa nu crezi nimic\n                Dm\n Vorbele-s doar fum\n                Dm\n Iar ce simti tu lasi in drum\n                Am\n In praf de amintire\n\n\nsolo:\n\ne|------5-7-8------------------------------------5-|\nB|-----5------5---6p5\\3-5----/5p3------------5h8--|\nG|----5---------------------------5-5p3--5/7-------|\nD|---7---------------------------------------------|\nA|-------------------------------------------------|\nE|-------------------------------------------------|\n\ne|---8-10-8-7----5-7-7/8-7-5--8/10-8-7--|\nB|--------------------------------------|\nG|--------------------------------------|\nD|--------------------------------------|\nA|--------------------------------------|\nE|--------------------------------------|\n\n\ne|--10/12-10-8-7-------10-10-10--8-8-8--7-7-7-|\nB|--------------------------------------------|\nG|--------------------------------------------|\nD|--------------------------------------------|\nA|--------------------------------------------|\nE|--------------------------------------------|\n\ne|-----------------------8-------------------|\nB|-10-9~~-----------/10----10----------------|\nG|----------10-9-10--------------------------|\nD|-------------------------------------------|\nA|-------------------------------------------|\nE|-------------------------------------------|\n\n\ne|------------------------8-7------7--------|\nB|----/5-------------8h10-------10----8-8-8-|\nG|-------7-5---5-7/9------------------9-9-9-|\nD|-----------7------------------------------|\nA|------------------------------------------|\nE|------------------------------------------|\n\ne|---------------------------------------------|\nB|-6-6-6--5-5-5-------------5-6-8/10-9---------|\nG|-7-7-7--5-5-5-0h2-4-5/7----------------------|\nD|---------------------------------------------|\nA|---------------------------------------------|\nE|---------------------------------------------|\n\n\nRef:",
    "author": {
      "id": 56,
      "name": "Iris",
      "slug": "iris"
    },
    "author_id": 56,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "G",
      "F",
      "Em",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 142,
    "title": "Adeline",
    "slug": "adeline-142",
    "content": "-toata melodia e numai pe F#m, cu o bataie de manele\n\nStrofa:\n   \n   F#m\n    Te-ai uitat ca un tolin\n                               Adeline,Adeline\n    Din minutul cel mai fin\n                               Adeline,Adeline\n    Scoate cu un gest de lin \n                               Adeline,Adeline\n    Geaca ei din vinilin\n                               Geaca ei din vinilin\n\n Ref :   solo\n\nE l---------------------------------------------------------------------l\nB l---------------------------------------------------------------------l\nG l---------------------------------------------------------------------l\nD l-----------------------------2---------------------------------------l\nA l--------------------2--2---------4---------4p2------2--2-------------l\nE l----2--2----5--5-------------------------------5--------------5--5---l\n\n\n               Adeline,Adelina\n         Solo\n               Adeline,Adelina\n\n   Aaa,aai,aai,aaai,aaa\n                              La da di da di di da\n\nII  Adeline chiar daca termini\n    Sunt vascularizat pe deplin\n    Însa tin sa te previn\n    Ai pus prea mult revulsin\n                          Ai pus prea mult revulsin\n\n  Ref :   solo 2\n                                 Se repeta\nE l-------------------------------l----l-------------------0---------l\nB l-----------2---------------2---l----l------2---------------2------l\nG l--------------4---------4------l----l---------4-------------------l \nD l------4-------------4----------l----l--4-----------4--------------l\nA l-------------------------------l----l-----------------------------l\nE l-------------------------------l----l-----------------------------l\n (se repeta)\n\nIII  Adeline de lin e lin\n     Unduitul din bazin \n     Bântui iar cu-n carpatin\n     Prin talazul Bizantin\n                          Prin talazul Bizantin\n \n  Ref",
    "author": {
      "id": 62,
      "name": "Timpuri Noi",
      "slug": "timpuri-noi"
    },
    "author_id": 62,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "F#m",
      "E",
      "B",
      "G",
      "D",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 143,
    "title": "Nunta",
    "slug": "nunta-143",
    "content": "Am         C\nBine-i mirelui\nF                G          Am\nCa nu-i nimeni-n lume ca mireasa lui\nAm         C\nUita-te la ea\nF            G            Am\nRupta e din cer si mandra ca o stea.\n\nRefren:\nAm             C \nMai, ce-om mai juca\nF            G         Am\nLai, la, lai, la, la, lai\nSi ce-om mai canta,\nLai, la, lai, la, la, lai\n\nAm          F  G    Am  \nCe-om mai rupe la opinci\nF          G        E\nSi-om face gropi adanci\nDara nu ne vom opri\nPana in zori de zi.\n\n2.\nNasii mirelui,\nLe duc fraga, grana campului, la, la\nIara nasii ei\nRoua norilor si florile de teï.",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "F",
      "G",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 144,
    "title": "Mila 2 de langa 3",
    "slug": "mila-2-de-langa-3-144",
    "content": "      G C D         G  C D    G   C D       G  C  D\nO ghitara     si un cort,  si o mare  si un port.\n     G   C D       G  C D\nGeamandura, e pe nisip,\n       G  C D      G  C D      \nNorul are,  n-are slip.\n\nC        D          G\nHai sa vedem un Tarantino,\nC        D          Em\nIn delta lunii cand vrei\nC            D       G     C     D       G\nHai, fie-ti mila si vino, la mila 2 de langa 3\n\nD     G     D   C\nLa un semn delicat,\n      D         G\nNe-apucam de piratat,\nD        G  D    C\nSpargem banca de stuff,\n       D            Em\nCa in cel mai mare bluff.\n\n\nO sirena si-un calcan,\nBarca-i beata, baru-i van.\nHidro-fete, solduri gay,\nGhiata-i moale, ele-s ei.\nHai sa vedem un Tarantino,\nIn delta lunii cand vrei.\nHai, fie-ti mila si vino, la mila 2 de langa 3.\n\nLa un semn delicat,\nNe-apucam de piratat,\nSpargem banca de stuff,\nCa in cel mai mare bluff.\n\nHai sa vedem un Tarantino,\nIn delta lunii cand vrei.\nHai, fie-ti mila si vino, la mila 2 de langa 3.\n\nLa un semn delicat,\nNe-apucam de piratat,\nSpargem banca de stuff,\nCa in cel mai mare bluff.\n\nLa un semn delicat,\nNe-apucam de piratat,\nPiratam doar pirati,\nC-un pachet de mega-watti\n\nNumai crema, numai ruj,\nIasiul doarme langa Cluj\nJeepuri triste, Rolls-uri roi,\nIn reviste plin de ploi.\n\n\nthis song rulezzzzzzz....:D:D:D have fun!",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "Em"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 145,
    "title": "Ești frumoasă",
    "slug": "esti-frumoasa-145",
    "content": "G          D                     C\nEl avea ciocate, blugi originali și geacă\nG            D                   C\nEa avea cosiță până-n brâu și costum tradițional\nG                D                          C\nȘi zi de vară până-n seară făcând febră musculară la margine de codru s-au iubit\nG                        D\nDar când soarele era la asfințit\n         C\nEl ridicându-și pantalonii, exact așa-i spunea:\n \n\tG             D             C\n\tFă, ești frumoasă, dar ești proastă\n\n\tDar ești proastă, oo\n\tG            D\n\tFă, ești frumoasă,\n\t  C         G\n\tProasta dracului\n\t(2 ori)\n\nSeara când a ajuns acasă, taică-su' se antrena cu furca-n poartă\nUnde-ai fost fetița mea, ea că așa și-așa o tot scălda\nȘi zi de vară până-n seară făcând febră musculară mătura curtea cu eaiaiaiaiaa\nDar când soarele era la asfințit,\nEl aninându-și furca-n cui, părintește îi spunea:\n \n\tRefren.",
    "author": {
      "id": 63,
      "name": "Antract",
      "slug": "antract"
    },
    "author_id": 63,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      },
      {
        "id": 4,
        "name": "Satiră și umor",
        "slug": "satira-si-umor",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 146,
    "title": "Doi pasi in urma ta",
    "slug": "doi-pasi-in-urma-ta-146",
    "content": "  C            F                      C\n1. Stau in urma trenului cu care vei pleca\n         G\nSi-mi pare rau.\nC                F\nCred ca-i semnul raului,\nC                               G\nNici nu te-am sarutat. Tare mi-e greu...\n\n         C      \n       R. Doi pasi nu sunt departe,\n          Bb     F         G\n      Doi pasi, doi pasi in urma ta.\n         C\n      Doi pasi nu sunt departe,\n          Bb\n      Doi pasi\n \n C                   F\n3. Stai sa mai vorbim putin\n C                      G\nSi sa ne amintim de prima zi.\nC                      F\nVreau ochii sa ti-i zaresc,\n C                           G\nSa pot sa iti soptesc ca te iubesc.\n \n F                              C\n4. Vad cum la geam iti aprinzi o tigara,\nF                          G\nTragi doar un fum si-o strivesti.\nF                                C\nMana prin par ti-o petreci intr-o doara,\nF                   G\nMa uit la ceas si oftez...\n \n             C       \n      R. Doi pasi nu sunt departe,\n      Bb        F            G\n      Doi pasi, doi pasi in urma ta.\n         C\n      Doi pasi nu sunt departe,\n         Bb\n      Doi pasi",
    "author": {
      "id": 53,
      "name": "Cargo",
      "slug": "cargo"
    },
    "author_id": 53,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "F",
      "G",
      "Bb"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 147,
    "title": "1000 de pahare",
    "slug": "1000-de-pahare-147",
    "content": "Am             E\nBună, dar şi nebună-i viaţa mea,\n Am              E\nÎmi dă, din când în când, câte-o belea,\n Dm                Am\nDar, niciodată, nu sparg şi nu dau foc\n E           Am  E Am\nCând e să n-am noroc.\n\nFemei am tot iubit şi-am să iubesc,\nNormal că unele mă părăsesc,\nDar, niciodată, nu plâng şi nu turbez\nCând e să divorţez.\n\n          Dm\nRefren: Şi iar beau tare\n          Am\n1000 dă pahare,\n          E\nSă uit de supărare,\n          Am  A7\nSă râd şi să petreeec,   x2\n          Dm\nViaţa-i zbanghie,\n          Am\nO iau în băşcălie,\n          E\nO dau pă veselie\n          Am   E Am\nŞi toate trec.\n\nPrieteni în viaţa mea grămadă sunt,\nŢeapă îmi trag şi ei, din când în când,\nDar, niciodată, nu mă apuc să-njur\nCând, relaxat, mi-o fur.\n\nRefren:   x2\n\nMereu prin viaţă vesel am să trec,\nChiar şi când pierd toţi banii, de zevzec,\nDar, niciodată, privirea nu mi-e rea\nCând n-am nicio para.\n\nRefren:   x2\n\nOutro (pe acordurile de la refren): Ta-ra-ra-ra, ta-ra-ra-ra...   x2",
    "author": {
      "id": 38,
      "name": "White Mahala",
      "slug": "white-mahala"
    },
    "author_id": 38,
    "categories": [
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "Dm",
      "A7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  }
],
  {
    "id": 148,
    "title": "Alcool",
    "slug": "alcool-148",
    "content": "Am\nE-o poveste c-o cadere\nA cuiva ce-avea putere\n                               E\nIntr-o viata prea bogata in pozitii.\nDar cu stress-l de la slujba,\nCu-obligatii sociale \n                         Am\nSi-o sotie cu fanatice ambitii.\nA\nS-a pus pe bautura,\nS-a-ncurcat c-o taratura\n                                          Dm\nCe l-a dus spre-un trai lipsit de interdictii.\n           Am\nDar tarfa banii i-a tocat\nSi in mocirla l-a lasat \n                                  E    Am\nUn alt betiv in zdrente, ca toti prapaditii.\nE\nVai, ce pacat!\n\nRefren:\nAm            Dm\nOh, demon alcool,\nG                    C\nN-am amintiri, mi-e capul gol.\nAm       Dm\n  Cine-ar fi crezut\nE          Am\nCa din om ajung ne-om.\nOh, demon alcool,\nN-am amintiri, mi-e capul gol.\nLipsit de control,\nSclav la demonul alcool.\nN-am amintiri, mi-e capul gol.\nLipsit de control,\nSclav la demonul alcool.\n\nInc-un vin ori gin,\nEl bea ce putea,\nSpirt, tuica, sus paharul,\nRom, scotch, vodca din import,\nAtata timp cat isi ineaca-n ele-amarul.\nDar era un om pierdut, cand nevasta si-a batut,\nTarfa a plecat si si-a gasit un altul.\nEa-l indemna mereu sa bea,\nEa spre ruina il ducea,\nDar banii cand s-au dus,\nL-a si lasat prin santuri.\nVai, ce pacat!\n\nOh, demon alcool,\nN-am amintiri, mi-e capul gol.\nCine-ar fi crezut\nCa din om ajung ne-om.\nN-am amintiri, mi-e capul gol.\nLipsit de control,\nSclav la demonul alcool.",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["Am", "E", "A", "Dm", "G", "C"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 149,
    "title": "Andrii Popa",
    "slug": "andrii-popa-149",
    "content": "D Dsus4 \nD Dsus2\n\nD          \nCine trece-n valea Seaca\nG            D\nCu hamgerul fara teaca\nD\nSi cu pieptul dezgolit\nG      A    D\nAndrii Popa cel vestit\nG      A    D\nAndrii Popa cel vestit\n\nSaptea ani cu voinicie\nSi-a batut joc de domnie\nSi tot prada ne'ncetat\nAndrii Popa hoţ barbat\nAndrii Popa hoţ barbat\n \n   D     G\nR: E haiduc\n      A     D\n   Şi e vestit\n   G      A    D   A  D    G D\n   Andrii Popa cel voinic\n\nZi și noapte tot călare\nTrage bir din drumul mare\nȘi din țară peste tot\nFug neferii cât ce pot\nFug neferii cât ce pot\n\nCăci el are-o pușcă plină\nCu trei glonți la rădăcină\nȘi-are-un murg de patru ani\nCare mușcă din dușmani\nCare mușcă din dușmani\n\nR::\n\nȘi-are frați de cruce șapte\nCe-au supt sângele cu lapte\nȘi nu-i pasă de nimic\nAndrii popa cel voinic\n\nR::",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 4, "name": "Rock", "slug": "rock", "description": ""}],
    "chords": ["D", "Dsus4", "Dsus2", "G", "A"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 150,
    "title": "Canadiana",
    "slug": "canadiana-150",
    "content": "G                Em\nAm zarit-o intr-o seara \nC                D\nMa plimbam linistit\n        G            Em\nNu-mi venea sa cred deloc\n     C       D\nAm ramas aiurit.\n      G              Em\nUn parfum din tari franceze\n     C        D\nSe tinea dupa ea\n        G               Em\nM-am gandit sa-i cer un numar\n       C           D\nAltfel nu se mai putea.\n       Refren: \n  G - Em C    D  G\n   Alo, alo...alooo,\n  G - Em C     D\n   Alo, alo...alo\n  G             Em\nFata asta mi-a intors \nC              D\nMetafizicul pe dos.\n       G             Em\nEu credeam ca frumusetea \n     C           D\nNu mai circula pe jos.\n    G              Em\nS-a pierdut ca o naluca\n   C          D\nA pierit uite asa\n     G             Em\nFara adresa, fara numar\n      C          D\nN-am s-o pot revedea.\n       Refren: \n  G - Em C    D  G\n   Alo, alo...alooo,\n  G - Em C     D\n   Alo, alo...alo\n    Em                       B7\nNici rasaritul nu-mi mai spune ceva,\n       G                     A\nNici dupa-amiaza nu mai e cum era.\nEm                      B7\nPe strada am vedenii, o vad pe ea,\nC                           D\nO sa-mi pierd mintile si tra la la la..\nEm                     B7\nAr fi mai buna acum o sticla de vin,\nG                             A\nAr fi mai bine sa incerc sa-mi revin.\nEm                       B7\nLa urma-urmei eu cu ce-s vinovat\nC                       D\nEa e o naluca, eu sunt adevarat.\nIntr-o noapte am visat-o\nEra-n rochie sifon\nMi-a zambit si mi-a intins\nNumarul de telefon\nDimineata am gasit \nLanga pat un biletel\nCu prefix de la Canada\nSi trei vorbe....\"-Plec la el\".",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["G", "D", "C", "Am"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 151,
    "title": "Dragostea e o salata",
    "slug": "dragostea-e-o-salata-151",
    "content": "C                      G        C\nMaladia ce-aveam se tragea din amor\n   Em                F        C\nSi sufeream seara destul de nasol,\nF                      C         Am\nCate am luat, toate-au fost în zadar,\nF          Fm     C\nDar m-a salvat un biet bucatar,\nG\nTot mormaind iar si iar:\n\n\n               C         G     C     G\n      Refren: \"Dragostea e o salata, cu ceva sare în plus,\n              Am               D        C             Dm     \n              Ea se ia pe farfurie, iar fetele, draga fetele,\n              F   Em        G      C\n              Ah, fetele se iau pe sus!                           \n\n              Dragostea e ca o supa, cu patrunjel si marar,\n              Supa se pune pe masă, iar fetele, draga fetele,\n              Ah, fetele se pun pe jar,\n              Da, fetele se pun pe jar\". \n\n\nIntro: La-la la la-la la-la-la, la-la-la-la-la la-la-la,\n\n       La-la la la-la la-la-la, la-la-la-la-la la-la-la.\n\n\nEu, de marea durere, caderam la pat,\nSe parea ca destinul mi s-a blocat,\nDar ingerul meu din paranormal\nSe întrupase-ntr-un biet bucatar\nSi îmi zicea iar si iar:\n\n\n      Refren: \"Dragostea e o salata, cu ceva sare în plus,\n              Ea se ia pe farfurie, iar fetele, draga fetele,\n              Ah, fetele se iau pe sus!                           \n\n              Dragostea e ca o supa, cu patrunjel si marar,\n              Supa se pune pe masă, iar fetele, draga fetele,\n              Ah, fetele se pun pe jar,\n              Da, fetele se pun pe jar\". \n\n\nIntro: La-la la la-la la-la-la, la-la-la-la-la la-la-la,\n\n       La-la la la-la la-la-la, la-la-la-la-la la-la-la.",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["C", "F", "G", "Em", "Am"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 152,
    "title": "Frunza",
    "slug": "frunza-152",
    "content": "Intro: Em A Dm Gm A# A Dm\n\nRefren:\n\nGm   C      F     Dm\nHai frunza galbena,\nGm    C      F\nCeas desfrunzit\nGm  A       Dm     Gm\n  De ce vrei tu sa cred\n    A#       A    Dm\nCa toamna a si venit.\n\nDm                    Am\nIeri iubita mea mi-a spus tarziu:\nDm                    Am\n  Vezi tu codrul cel vesnic viu,\nGm      C          F     Dm\n  vara noastra se va sfarsi\n       Em       A      Dm\nCand galben de tot va fi.\n\nCodrul verde si adanc era\nSi-avea umbra de catifea\nSi-n tot codrul sub cerul clar,\nO galbena frunza doar.\n\nHai frunza galbena,\nAi glasul tau,\nHai frunza galbena,\nCa visul rau.\n\nPentru galbenul ei noroc\nNu vazu pe pamant alt loc\nDecat inima mea razand\nSi-n ea ma lovi cazand.",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["Am", "G", "F", "E", "Gm", "C", "Dm"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 153,
    "title": "Hanul ulciorului nesecat",
    "slug": "hanul-ulciorului-nesecat-153",
    "content": "INTRO: G D G  G D G Em x 2  A D\n\n  G                    D G\n  Vin din zarea-ndepartata,\n  Em                A\n  Vin ca norii fara pata,\n  D                G  D\n  Bucurosi de cale lunga,\n  Em                D\n  Abia asteptand s-ajunga.\n\n  Cu pieptare inflorate\n  Si cu straie colorate,\n  Peste zi si peste noapte\n  Au trecut, fructele-s coapte.\n\n  A             D  \n  Incotro se grabesc ei,\n  A           D\n  Aprigi, insetatii zmei?\n  A                  D\n  Colb prin barbi si praf prin plete,\n  A          D\n  Hohote vin pe-ndelete.\n\n\n  Hei,\n  G            D G\n  Ei se duc la hanul,\n  D       G        Em D  G        \n  Hanul ulciorului ne-se-cat,\n\n  Hei,\n  G              D G \n  Ca s-a-mplinit a-nul\n  D           G    Em   D   G\n  De cand pe-acasa n-au mai dat.\n                 D        G\n  Mese-astern, ulcioarele curg,\n  D     G       Em     D G        \n  Aspre canturi pana-n a-murg.\n                       D       G\n  Piepturi rosii ce mustesc de vin,\n  D       G      D          Em   A D\n  Rasete, glume, nici un suspin.\n\n\nSoarele din nou rasare\nPeste han si peste-ogoare\nSi-n lumina diminetii\nIsi iau zborul iar, baietii.\n\nInc-un an de pribegie\nIn goana timpului, pustie,\nBand cu gandul insetat\nDin ulciorul nesecat.\n\nDe-unde vin, pe unde-au fost ei,\nAprigi insetatii zmei?\nColb prin barbi si praf prin plete,\nHohote vin sa ne-mbete.\n\nHei,\nEi se duc la hanul,\nHanul ulciorului nesecat,\nHei,\nCa s-a-mplinit anul\nDe cand pe-acasa n-au mai dat.\nMese-astern, ulcioarele curg,\nAspre canturi pana-n amurg.\nPiepturi rosii ce mustesc de vin,\nRasete, glume, nici un suspin.\n \nHAVE FUN!!!",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["G", "D", "Em", "A"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 154,
    "title": "Intelegere",
    "slug": "intelegere-154",
    "content": "Muzica-Mircea Baniciu\nVersuri-Mihail Lermontov\n\nC Am     G Em     C   D  G\nTuuu-u-u-uuu  tanana tanana\n\nG               C\nLas lumea sa dispretuiasca\nAm      D     G\nAscunsa taina dintre noi,\nC      Am   G        Em\nPrejudecata omeneasca\nC        D       G\nArunce-n cale-ti cu noroi.\nC      Am   G        Em\nPrejudecata omeneasca\nC        D       G\nArunce-n cale-ti cu noroi.\n\nIn fata idolilor lumii\nNu plec genunchii,nu cersesc.\nLa fel cu tine gandul nu mi-i\nNici sa iubesc, nici sa urasc\nLa fel cu tine gandul nu mi-i\nNici sa urasc, nici sa iubesc.\n\nUhhhh tuuutu tanana tanana\n\nM-afund fara sa caut rostul\nIn chefuri nici voios nici trist,\nVorbesc cu prostul cu neprostul\nDar pentru sufletu-mi exist.\nVorbesc cu prostul cu neprostul,\nDar pentru sufletu-mi exist.\n\nIn larma lumii neintalniram\nO zi ca orice alta zi.\nFara de bucurii iubiram, \nFara tristeti ne-om desparti.\nFara de bucurii iubiram,\nFara tristeti ne-om desparti.\n\nTuuuutuuu tanana tanana\n\nSi pretuim in viata toata \nDoar oamenii atata tot,\nNu ne-om minti noi niciodata,\nNici altii-a ne minti nu pot.\nNu ne-om mintii noi niciodata,\nNici altii-a ne minti nu pot.",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["C", "Am", "G", "Em", "D"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 155,
    "title": "Lordul John",
    "slug": "lordul-john-155",
    "content": "Intro: D G A D\n\nD          G\nSe zvonise prin ziare\nA              D\nCa-n Irlanda-i într-un sat\nG            D            AD\nUn barbat grozav de tare.\nD               G\nLordul John prinzând de veste\nA         D\nCine e si unde este\nG            D      A    D\nVrea sa stie daca e adevarat\nD                 G\nCa multi lorzi de vita veche\nA          D5\nDin îndepartatul nord\nG                   D      AD\nLordul John e-ntr-o ureche\nD          G\nFluiera pe drum si cânta\nA           D\nSi e cel dintâi la trînta\nG            D         AD\nSi e cel mai tare lord\nD           G\nA gasit în urma satul\nA           D\nPe taran el l-a gasit\nG         D         AD\nOcupat cu maturatul\nD            G\nSi asa, ochindu-l bine,\nA                 D\nLordul drept spre dânsul vine,\nG             D            A   D\nFar-a-i zice, far-a-i zice bun gasit.\nD            G\nSi-apoi gata de bataie\nA              D\nEl se-ndreapta spre taran\n G               D           AD\n-Spui ca esti grozav de tare\nD              G\nDe ti-a mers cuvânt prin lume\nA             D\nEu din Londra vin anume\nG      D       A    D\nTrânta deci cu tine vreau.\nD           G\nDar taranul se cruceste,\nA        D\nSimte palmele ca-i ard\nG            D              AD\nLenes târnul si-l propteste\nD              G\nScuipa-n palme si se-ntinde\nA                 D\nSi pe lord de brâu îl prinde\nG             D            A     D\nSi-l azvârle, si-l azvârle peste gard.\n D          G\n-O sa stau acum cu tine\nA               D\nSa ma lupt. Mai vrei ceva?\nG          D             AD\nAuzi tu cu ce gând vine!\nD              G\nLordul John privind cu jale\nA          D\nSi tinându-se de sale\nG           D            A        D\nSpune sa-i azvârle calul sa poata pleca.\nG           D            A        D\nSpune sa-i azvârle calul sa poata pleca.",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["D", "G", "A7", "Dsus4"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 156,
    "title": "Mr. Tambourine Man",
    "slug": "mr-tambourine-man-156",
    "content": "Intro: G D G\n\nRefren:\nG       A              D                G\nHei Mr. Tambourine Man cânta-mi sa te ascult,\n        D              G       Em     A     \nNu mi-e somn, spre nicaieri ma poarta pasii mei.\nG       A              D                G\nHei Mr. Tambourine Man cânta-mi sa te ascult,\n     D               G        Em  A     D \nDupa tine-n zori voi merge pe-ale tale alei.\n\nA    G           A        D             G\nSi desi castelul serii în nisip se întorcea,\n   D             G\nCernut prin mâna mea,\n       D             G      Em      A   \nOri priveam cum disparea în zari promise.\n    G              A           D         G\nIar plictiseala ma-nvingea, calcâiele ma frig,\n   D               G\nPrieteni n-am sa-i strig,\n     D             G     Em    A   \nAcum strazile sunt vii fara de vise.\n\nRefren\n\nA  G        A              D           G\nDu-ma si ma plimba pe-a ta arca lin valsând,\n   D               G            D        G       D           G\nÎn simturi sunt flamând, daca mâinile apucând, picioarele calcând,\n     D         G       Em     A       A\nDoar ghetele astept sa ma mai poarte.\n     G            A              D          G       D           G\nSunt gata sa plec unde vrei sunt gata sa m-afund în fala mea de plumb,\n   D               G        Em         A      A\nDansul meu de e profund, ma va purta departe.\n\n\nA    G         A              D         G\nSi desi auzi, auzi sub soare atâtea nebunii,\n     D          G              D         G\nSpre mine morti vii sunt doar atât copilarii.\n      D          G      Em   A     \nSi pe ceruri ele nu-s deloc ofense\n     G         A                D        G\nSi desi auzi, auzi ecoul vag de rime de efect\n     D             G       D               G\nLa ritmul tau perfect, e doar un clown abject\n   D              G              D            G     Em    A   \nCe nu-i de bun respect, el numai umbre doar vâneaza prea imense.\n\nRefren\n\nA    G           A            D         G\nDeci ia-ma si ma pierde prin inelele de fum,\n        D             G      D          G          D             G\nÎntr-un timp ce nu-i acum, departe de copaci, prea goi si prea saraci.\n  D                 G      D           G     Em       A    \nBatuti de-un vânt semet, departe de tristeti în negre halei.\n   G              A               D           G\nCa sa plutesc sub cerul liber cât timp nu-i nebun.\n   D           G      D            G\nÎn marea sa m-adun, nisip jur împrejur\n   D               G       D          G\nCu sperante si-amintiri înecate de-amagiri\n          D            G        Em   A      \nSi sa mai uit putin de azi doar pâna mâine.\n\nRefren",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["G", "A", "D", "Em"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 157,
    "title": "Nebunul cu ochii inchisi",
    "slug": "nebunul-cu-ochii-inchisi-157",
    "content": "Intro: F#m E F#m E C#\n\nF#m                       G#\nPe un munte intr-o tara foarte indepartata\nD             Bm              F#m\nSta un om cu ochii-nchisi si spune ce ne asteapta.\n                        G#\nLumea nu-l asculta, il crede un nebun\n      D           Bm             C#m        F#m\nCaci vorbele lui sunt ca niste lovituri de tun.\n\nRefren:\n\n\nBm      E         A  F#m\nEl sta singur si linistit\nBm      E     A   F#m\nDar in ochii lui inchisi\nBm      E     A  F#m\nVede a lumii asfintit\n   G#                   C#\nNebunul cu ochii lui inchisi.\n\nZilele trec una dupa alta sus pe munte\nSi vocea lui se aude clar spunand foarte multe.\nLumea cea intreaga se opreste sa-l asculte\nIl crede un nebun ce-ndruga multe vorbe absurde.",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["F#m", "E", "C#", "G#", "D", "Bm"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 158,
    "title": "Nu-i nimic, asta e",
    "slug": "nu-i-nimic-asta-e-158",
    "content": "Intro: G D Em C\n\nG - D - Em - C - A - Am\n\nEi si la ce bun sa întrebi de ce, iubito\n  F                  G\n  Daca n-ai aflat deja\n  Ei si la ce bun sa întrebi de ce, iubito\n  Dm                     G\n  Acum tot n-ar mai conta.\n           C\n  Cand cocosii tai vor cinta în zori\n                  F\n   Pe geam te uita eu sunt calator\n     C         G         Am               F\n   Tu esti de vina ca ma pierd din nou în nori\n     C         G       C\n   Dar nu-i nimic asta e!",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["G", "D", "Em", "C", "A", "Am"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 159,
    "title": "Oameni buni",
    "slug": "oameni-buni-159",
    "content": "(Capo pe fretul 1)\n\nG           F               C        G\nSe naste un maine dintr un ieri blestemat\nG        F         C       G\nVine el vine ca un accelerat\nG         F          C        G\nNu nu ma plang prin cate-am trecut\n    G            F      C       G\nSe putea si mai rau dar cine-a stiut\n\nRefren:\n\nG       F        C          G\nOameni buni, oricat dati in dar\nG           F         C       G\nO inima de piatra nu mai bate iar\nG       F         C          G\nOameni buni , de n-oi mai fi viu\nG        F             C       G\nAflu eu taina ce doar mortii o stiu.\n\nSincer , cinstit, dar si treaz si destept\nCand la usa iti bat nu pomana astept\nSunt un suflet hai hui cautand adapost\nZi de nu-ti e pe plac imi gasesc eu un rost\n\nPloaie v-aduc oricand veti dori\nSi soarele-l scot din norii cei gri\nIn trupuri torn vlaga si adio dureri\nIar visele tale nu mai sunt doar pareri\n\nOameni buni, oricat dati in dar\nO inima de piatra nu mai bate iar\nOameni buni , de n-oi mai fi viu\nAflu eu taina ce doar mortii o stiu.\n\nAm dat ce am primit pan n-am ma-vut ce\nAm luat ce mi-ati dat si n-am spus de ce\nStii te iubesc si etcetera\nDar deschisa ti-e usa de spui voi pleca\n\nO spun cu frumosul pot sa si strig\nIti vine si plata dupa orice castig\nCum orice placere se termina prost\nPlateste cat face sa plangi n-are rost\n\nOameni buni, oricat dati in dar\nO inima de piatra nu mai bate iar\nOameni buni , de n-oi mai fi viu\nAflu eu taina ce doar mortii o stiu.\n\nAstazi sau maine foarte curand\nMa duc intr-o vale un cantec sa-ti cant\nO sa-l cant o sa-l strig asculta l si tu\nEcou-mi va spune de-am dreptate sau nu\n\n3X Oameni buni, oricat dati in dar\nO inima de piatra nu mai bate iar\nOameni buni , de n-oi mai fi viu\nAflu eu taina ce doar mortii o stiu.",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["G", "F", "C"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 160,
    "title": "Peste randari",
    "slug": "peste-randari-160",
    "content": "G           C  D         G\nAtunci când ai promis ca vii,\nG           D         G\nMi-am pus camasa de nylon,\nG     C  D     G\nAceea cu pasmanterii,\nG           D          G\nSi-n suflet înca un zorzon\n\nRefren:\nG              D\nMa lustruisem, ma lustruisem\nC             G\nMa lustruisem pe bombeu\nG             D\nPaseam atent, paseam atent\nC               G\nPaseam atent sa nu ma sfarm\nG            D\nMiscându-ma, miscându-ma\nC              G\nMiscându-ma destul de greu\nG                D\nÎnfipt în blugi, înfipt în blugi\nC                G\nÎnfipt în blugii bleu-jandarm\n\nG        C    D          G\nPeste rabdari te-am asteptat\nG         D         G\nÎncins de-un patos urias,\nG           C      D    G\nSa-ti darui moftul preferat\nG         D        G\nSi-o trotineta cu atas.\n\nG          C   D         G\nDar n-ai sosit nici mai apoi\nG           D         G\nÎncât, de-a binelea posac,\nG          C   D         G\nMi-am procurat tigari de foi\nG          D          G\nSi le-am topit pe basamac\n\nRefren\n\nG        C   D         G\nVezi tu acum la mine-n piept\nG          D          G\nSe zbat suspinele fierbinti\nG         C   D        G\nSi n-am habar ce mai astept\nG          D          G\nÎn lumea-n care tu ma minti",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["G", "C", "D"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 161,
    "title": "Pisica neagra",
    "slug": "pisica-neagra-161",
    "content": "A\nCautand in aer prada, \nD\nO pisica trece strada\nA                   E\nSi e neagra, vai de noi,\nA\nChiar si veacul se opreste\nD\nSi privind-o se gandeste \nA               E  A\nCum s-o stearga inapoi! \nA\nCa un om fara de minte,\nD\nNumai eu merg inainte,\nA                       E\nToti imi striga \"esti nebun?!\"\nA\nDar de ce imi este draga \nD\nSi iubesc pisica neagra,\nA             E       A  \nAsta n-am cum sa le-o spun.\n\nD\nNu te speria iubito,\n\nA\nChiar de spune lumea-ntreaga \n\nE\nC-ai avea pe inserate \n\nA\nOchii de pisica neagra,\n\nD\nDaca tu provoci dezastre,\n\nA\nDoar dezastrul meu sa fii,\n\nB\nTaie-mi calea viata-ntreaga,\n\nE           \nSi de zece ori pe zi.\n\nUite o pisica neagra\nLumea inapoi alearga\nDand cu pietre dupa ea\nCand o vad cum schiopateaza\nInima imi sangereaza\nSi-ii fac loc in viata mea. \n\n\nToti asteapta acum dezastrul \nSi sa-mi cada-n cap albastrul\nCerului asa, pe loc\nEi nu pot sa inteleaga\nCum, de ce, pisica neagra \nMie-mi poarta doar noroc.",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["A", "D", "E", "B"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 162,
    "title": "Scrisoare de ramas bun",
    "slug": "scrisoare-de-ramas-bun-162",
    "content": "D\n  Iubito câta lume-i între noi\nBm              \n  Numaratori de ploi din doi în doi\nD\n  Si dintr-un nor de dor necunoscut\nBm\n  Câte zapezi pe buze ne-au crescut\nEm                           A\n  Asculta-ma si lasa-ma sa strig\nD                                  Bm\n  Mi-e frica de-ntâmplare si mi-e frig\nEm                             A\n  Si nu mai vreau sa stiu pân' la sfârsit\n    Bm                          Em\n   Cine-a iubit frumos cine-a gresit,\n     G               A     Bm\n   Cine a iubit,cine a gresit.\n\n   Cine-a facut în noapte primul pas\n   Cine-a plecat din joc cine-a ramas\n   Si cine-a adus peretii rând pe rând\n   Cine s-a-ntors mereu cu ziua-n gând\n   Cine-a pierdut si cine-a câstigat\n   De toate mântuit sa dezlegat\n   Cine-a crezut mai mult în celalalt\n   Sub cerul prea strain sau prea înalt.\n\n   Iubito câta lume-i între noi\n   Numaratori de ploi din doi în doi\n   Si dintr-un nor de dor necunoscut\n   Câte zapezi pe buze ne-au crescut\n   Cum n-am sa uit cum suna glasul tau\n   Decât tacerea ce-mi vafi mai rau\n   Si tu sa poti sub stele înnopta\n   Când nu mai stiu ce-nseamna umbra ta.",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["D", "Bm", "Em", "A", "G", "F#"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 163,
    "title": "Strada Popa Nan",
    "slug": "strada-popa-nan-163",
    "content": "Intro: Gm A# D\n\nD\nUn om pe niste scari\nC                         G\nStatea si se gandea la ce va fi\nD                              C        G\nIar lumea-i spunea ca-i nebun pentru ca\nD                               C\nDoar sta si se uita în gol\n                         G\nLa ce o sa fie\nD\nUn om pe niste scari\n\nC                              G\nStatea si astepta un raspuns\nD                          C           G\nDin ceruri care n-au mai venit\nD                              C\nPoate-un semn, poate-un gand\n                         G\nPoate-un martor\nD\nUn om pe niste scari\n\nC                                    G\nStatea între a fi si a nu mai fi\nD                                    C              G\nSi-atunci a cazut în gol, iar lumea-a zis:\n    D                    C                         G\n\"Uite, ce ti-am zis, e nebun, a cazut,\n    D                         C                         G\n  Uite, ce ti-am zis, nu-i normal,\n    D                    C                         G\nUite, ce ti-am zis, ce ti-am zis\"\nD\nUn om pe niste scari",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["F", "Bb", "C", "Gm", "G"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 164,
    "title": "Toti suntem putin luati",
    "slug": "toti-suntem-putin-luati-164",
    "content": "Intro: E A7 B E\n\nE\nTe iau când crezi ca esti si tu mai bun,\nTe iau c-asa ar trebui, îti spun,\n    A7\nTe iau când vrei s-ajungi si tu acas',\n    E\nTe iau când numai tu ti-ai mai ramas!\n\nRefren:\n     B\nDar hai sa ne avem ca frati,\nE\nToti sîntem putin luati!\n\nTe iau când iesi si tu putin pe strazi,\nTe iau când locu-ncerci sa ti-l pastrezi,\nTe iau când pe pamânt calci în sfârsit,\nTe iau când spre iesire mergi grabit!\n\nRefren\n\nTe iau chiar de la ceai când te trezesti,\nTe iau când tânar si capabil esti,\nTe iau când banii, banii nu stii ce's,\nTe iau si-apoi îti zic zâmbind: Succes!\n\nRefren\n\nTe iau si-apoi îti spun ca s-a sfârsit,\nTe iau si-apoi apar din nou uimit,\nTe iau când cu masina mergi hai-hui,\nTe iau când pe ghitara mâna pui!\n\nRefren\n\nTe iau când numai tu ti-ai mai ramas,\nTe iau si-atunci când mergi si tu acas',\nTe iau si-apoi îti spun ca esti barbat,\nTe iau când în mormânt te-ai asezat!\n\nRefren",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["E", "A7", "B"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 165,
    "title": "Tristeti provinciale",
    "slug": "tristeti-provinciale-165",
    "content": "Versuri: George Topârceanu\n\nCapodastru pe III\n\nIntro:\n\n     D            Asus4    D           Asus4 D    Asus4 D     \n     ^            v        v  ^  v     ^     ^    ^     ^     \nE||--2----x-------5--------2--2--2--|--5-----2----5-----2----|\nB||--3----x-------3--------3--3--3--|--3-----3----3-----3----|\nG||--2------------2--------2--2--2--|--2-----2----2-----2----|\nD||--0------------0--------0--------|--0-----0----0-----0----|\nA||---------------------------------|------------------------|\nE||---------------------------------|------------------------|\n\n\n  G            A                D    A    D            \n  ^            v    ^  v  ^     ^    v    ^            \n--3----x-------0----0--0--0--|--2----0----2----L-----|\n--0----x-------2----2--2--2--|--3----2----3----L-----|\n--0----x-------2----2--2--2--|--2----2----2----L-----|\n--0------------2----2--2--2--|--0----2----0----L-----|\n--2------------0-------------|-------0---------------|\n--3--------------------------|-----------------------|\n\nD\nLali-lali-lulu\nA\nLili-lili-lula\nG           D\nLala-lala-lululu\nA              D\nLalala-lili-lilula\nG          D\nEeeei-lalalululu\nA           D  A  D\nLilu-lalulu-lu\n\nD\nTristeţi de după-amezi ploiase\nA\nşi de nostalgice obsesii\nG                       D\nCând stai cu storurile trase\nA                     D\nşi-aştepţi să vie ora mesii\nG            A         D    A  D\nşi-aştepţi să vie ora mesii\n\nTristeţi de străzi pustii şi mute\nDe ziduri vechi şi cu faţade\nDe edificii cunoscute\nÎn care nu ştii cine şade\nÎn care nu ştii cine şade\n\nDe domicilii spaţioase\nCu flori la geam şi cu salon\nDin care pe la ceasul şase\nAuzi urlând un gramofon\nAuzi urlând un gramofon\n\n\nLali-lali-lulu\nLili-lili-lula\nLala-lala-lululu\nLalala-lili-lilula\nEeeei-lalalululu\nLilu-lalulu-lu\n\nBm                    F#m\nTristeţi de goarnă funerară\n       G    A    D\nMelancolii de căţeluş\nBm                  F#\nUitat de cineva pe-afară\nG                     A\nSă scheaune pe lângă uşi\n\nBm                    F#m\nTristeţi romantice de fată\n          G   A     D\nCu nasul lung şi demodat\nBm              F#\nşi de odaie mobilată\nG                    A\nÎn care-a stat un magistra-at\n\nLali-lali-lulu\nLili-lili-lula\nLala-lala-lululu\nLalala-lili-lilula\nEeeei-lalalululu\nLilu-lalulu-lu\n\nTristeţi pustii, molipsitoare\nDe ce mă urmăriţi mereu\nşi fie ploaie ori ninsoare\nVă ţineţi scai de capul meu\nVă ţineţi scai de capul meu\n\nA||---0--2--4---|\n\nLali-lali-lulu\nLili-lili-lula\nLala-lala-lululu\nLalala-lili-lilula\nEeeei-lalalululu\nLilu-lalulu-lu\nLilu-lalulu-lu\nLilu-lalulu-lu\nLilu-lalulu-lu\nLilu-lalulu-lu...",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["D", "Asus4", "G", "A", "Bm", "F#m"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 166,
    "title": "Un om pe niste scari",
    "slug": "un-om-pe-niste-scari-166",
    "content": "Intro: Em G D Em\n\nEm               Am\nUn om pe niste scari\n                         D\nStatea si se gandea la ce va fi\nEm                              Am       D\nIar lumea-i spunea ca-i nebun pentru ca\nEm                               Am\nDoar sta si se uita în gol\n                         D\nLa ce o sa fie\nEm\nUn om pe niste scari\n\nAm                              D\nStatea si astepta un raspuns\nEm                          Am          D\nDin ceruri care n-au mai venit\nEm                              Am\nPoate-un semn, poate-un gand\n                         D\nPoate-un martor\nEm\nUn om pe niste scari\n\nAm                                    D\nStatea între a fi si a nu mai fi\nEm                                    Am              D\nSi-atunci a cazut în gol, iar lumea-a zis:\n    Em                    Am                         D\n\"Uite, ce ti-am zis, e nebun, a cazut,\n    Em                         Am                         D\n  Uite, ce ti-am zis, nu-i normal,\n    Em                    Am                         D\nUite, ce ti-am zis, ce ti-am zis\"\nEm\nUn om pe niste scari",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["C", "G", "Am", "F"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 167,
    "title": "Un zvon",
    "slug": "un-zvon-167",
    "content": "Intro: G D C  C D G *2\n\n   G             D      C   G\nIubita mea, cand tocmai ne iubeam\n   C               D    G\nCu voia celor de la Primarie,\n   G        D      C     G\nAm auzit ca veacul n-are geam\n   C                D     G\nSi unde sunt geamgii nu se stie.\n\nAbia de s-a zvonit prin telegraf\nO adiere ca o intamplare\nSi iata cum, duminica in praf\nIsi frange coastele pe strada mare.\n\nVazand ca ne iubim cu-adevarat\nSub cuibul vechi cu pui de randunica,\nE, poate, cineva care-a aflat\nMotiv sa tremuram si noi de frica.\n\nPrin geamuri sparte mai cazura ploi\nSi-n alte veacuri, mult mai efemere,\nDar daca sufla crivatul in noi,\nAdio, lumanare de-nviere.\n\nRefren:\nC       \nPoate zvonu-i fara rost,\nG\nGeamuri sparte au mai fost,\nD\nDar de nu, e bine-a sti\nG\nCe ne facem de geamgii?\n\nC       \nPoate zvonu-i fara rost,\nG\nGeamuri sparte au mai fost,\nA\nDar de nu, e bine-a sti\nD\nCe ne facem de geamgii?\n\nIntro *2\n\nSa nu te smulga vantul intr-o zi\nDin viata mea cu toate ale tale,\nDe-acum, iubito, stiu, va trebui\nSa te pazesc cu garzi imperiale.\n\nDin veacu-acesta sa iesim cumva\nPrin geamuri sparte-asa cum fac copiii\nSi poate-n celalalt, de ziua ta,\nDe nicaieri se vor ivi geamgii.\n\nPoate zvonu-i fara rost,\nGeamuri sparte au mai fost,\nDar de nu, e bine-a sti\nCe ne facem de geamgii?\nHei!...",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["G", "D", "C", "A"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 168,
    "title": "Vremuri",
    "slug": "vremuri-168",
    "content": "Intro: G D G\n\n G      C\nHei, tramvai,\n D                  G\nCu etaj si tras de cai,\n G     C\nHei, joben,\n D                 G\nCe umblai la Mon Jardin.\n G     C\nHei, bunic,\n D               G\nCu monoclu erai sic,\n G       C\nHei, can-can,\n D                G\nCu picioarele-n tavan ! \n \n C                       G\nToate-au fost la timpul lor\n C         D\nCeva exagerat,\n C                  G \nAnii au trecut în zbor\n C              D\nSi lumea le-a uitat.\n   D\nDa, da.\n   D\nNu, nu.\n\n G       C\nHei, pletosi,\n D                         G\nCu pantaloni strâmti si soioşi,\n G     C\nChitaristi,\n D                  G\nZgomotoşi si fantazisti,\n G     C\nMini-jupe,\n D                         G\nFoarte scurt si strâns pe trup,\n G         C\nHei, tu, break,\n D               G\nÎndrăcit ca un berbec !\n\n\n C                 G\nToate sunt la mod-acum\n C          D\nSi tot exagerat,\n C                  G\nTimpul trece ca un fum\n C             D\nSi tot va fi uitat,\n   D\nDa, da,\n   D\nNu, nu…",
    "author": {"id": 61, "name": "Pasarea Colibri", "slug": "pasarea-colibri"},
    "author_id": 61,
    "categories": [{"id": 3, "name": "Folk", "slug": "folk", "description": ""}],
    "chords": ["G", "C", "D"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  },
  {
    "id": 169,
    "title": "Zori de zi",
    "slug": "zori-de-zi-169",
    "content": "A            E      F#m\nE dimineata zori de zi\nD     A     E      A\nUite pleaca dracii mii,\nA            E      F#m\nE dimineata zori de zi\nD    A      E    A\nSe coboara ingerii\n\n\nA              D   A E   F#m   D A E A\nHei, hei, hei zei peste zei\nA              D  A   E  F#m   D A E A\nHei, hei , hei soare scantei\n\n\nE dimineata adevarat\nSufletul fara pacat,\nE dimineata in viata mea\nRazele scalda inima.\n\nHai, hai, hai Rai langa Rai,\nHai, hai , hai , hai sus pe cai.\n\nE            A\nCaii mei cei albi,\nE           A\nCai inaripati,\nE            A      D A E A\nLanga mine frati.\n\n\nCaii mei usori,\nLiberi zburatori,\nSe ridica-n zori.\n\n\n\nE dimineata zori de zi,\nOamenii vad oamenii\nRoua pe dealuri, peste flori,\nFericit deasupra zbori.\n\n\nHei, hei, hei zei peste zei,\nHei, hei , hei Soare scantei.\n\nHai, hai , hai , hai sus pe cai.",
    "author": {"id": 62, "name": "Phoenix", "slug": "phoenix"},
    "author_id": 62,
    "categories": [{"id": 4, "name": "Rock", "slug": "rock", "description": ""}],
    "chords": ["A", "E", "F#m", "D"],
    "strumming": [{"pattern": ["D", "-", "D", "U", "-", "U", "D", "U"], "timeSignature": "4/4", "name": "Bază"}],
    "views": 0
  }
];

export const authorsData: Author[] = [
  {
    "id": 1,
    "name": "Azur",
    "slug": "azur",
    "song_count": 2
  },
  {
    "id": 2,
    "name": "Mihai Mărgineanu",
    "slug": "mihai-margineanu",
    "song_count": 10
  },
  {
    "id": 3,
    "name": "Anonim",
    "slug": "anonim",
    "song_count": 7
  },
  {
    "id": 4,
    "name": "Aurel Moldoveanu",
    "slug": "aurel-moldoveanu",
    "song_count": 2
  },
  {
    "id": 5,
    "name": "Șatra",
    "slug": "satra",
    "song_count": 3
  },
  {
    "id": 6,
    "name": "Gică Petrescu",
    "slug": "gica-petrescu",
    "song_count": 2
  },
  {
    "id": 7,
    "name": "Necunoscut",
    "slug": "necunoscut",
    "song_count": 1
  },
  {
    "id": 8,
    "name": "Folclor",
    "slug": "folclor",
    "song_count": 2
  },
  {
    "id": 9,
    "name": "Atlantic",
    "slug": "atlantic",
    "song_count": 1
  },
  {
    "id": 10,
    "name": "Ștefan Hrușcă",
    "slug": "stefan-hrusca",
    "song_count": 9
  },
  {
    "id": 11,
    "name": "Emeric Imre",
    "slug": "emeric-imre",
    "song_count": 1
  },
  {
    "id": 12,
    "name": "Ecoul",
    "slug": "ecoul",
    "song_count": 3
  },
  {
    "id": 13,
    "name": "Tatiana Stepa",
    "slug": "tatiana-stepa",
    "song_count": 2
  },
  {
    "id": 14,
    "name": "2 și jumătate",
    "slug": "2-si-jumatate",
    "song_count": 1
  },
  {
    "id": 15,
    "name": "Mayai Gyozo",
    "slug": "mayai-gyozo",
    "song_count": 1
  },
  {
    "id": 16,
    "name": "Andrei Păunescu",
    "slug": "andrei-paunescu",
    "song_count": 1
  },
  {
    "id": 17,
    "name": "Victor Socaciu",
    "slug": "victor-socaciu",
    "song_count": 1
  },
  {
    "id": 18,
    "name": "Nicu Alifantis",
    "slug": "nicu-alifantis",
    "song_count": 2
  },
  {
    "id": 19,
    "name": "Ducu Bertzi",
    "slug": "ducu-bertzi",
    "song_count": 3
  },
  {
    "id": 20,
    "name": "Valeriu Sterian",
    "slug": "valeriu-sterian",
    "song_count": 1
  },
  {
    "id": 21,
    "name": "Radu Gheorghe",
    "slug": "radu-gheorghe",
    "song_count": 1
  },
  {
    "id": 22,
    "name": "Trupa Şanţ",
    "slug": "trupa-sant",
    "song_count": 1
  },
  {
    "id": 23,
    "name": "Nae Berechet",
    "slug": "nae-berechet",
    "song_count": 1
  },
  {
    "id": 24,
    "name": "Cântece de munte",
    "slug": "cantece-de-munte",
    "song_count": 13
  },
  {
    "id": 25,
    "name": "Puiu Cazan",
    "slug": "puiu-cazan",
    "song_count": 1
  },
  {
    "id": 26,
    "name": "Karma",
    "slug": "karma",
    "song_count": 1
  },
  {
    "id": 27,
    "name": "Carmen Ciocolata",
    "slug": "carmen-ciocolata",
    "song_count": 1
  },
  {
    "id": 28,
    "name": "Vârf Carpatin",
    "slug": "varf-carpatin",
    "song_count": 1
  },
  {
    "id": 29,
    "name": "Mircea Rusu Band",
    "slug": "mircea-rusu-band",
    "song_count": 1
  },
  {
    "id": 30,
    "name": "Amurg",
    "slug": "amurg",
    "song_count": 1
  },
  {
    "id": 31,
    "name": "Magda Pușcaș",
    "slug": "magda-puscas",
    "song_count": 1
  },
  {
    "id": 32,
    "name": "Ursul Trubadur",
    "slug": "ursul-trubadur",
    "song_count": 1
  },
  {
    "id": 33,
    "name": "Roza Vânturilor",
    "slug": "roza-vanturilor",
    "song_count": 1
  },
  {
    "id": 34,
    "name": "Dida Drăgan",
    "slug": "dida-dragan",
    "song_count": 1
  },
  {
    "id": 35,
    "name": "Colinde",
    "slug": "colinde",
    "song_count": 6
  },
  {
    "id": 36,
    "name": "Mihai Constantinescu",
    "slug": "mihai-constantinescu",
    "song_count": 1
  },
  {
    "id": 37,
    "name": "Bulz Brotherz",
    "slug": "bulz-brotherz",
    "song_count": 1
  },
  {
    "id": 38,
    "name": "White Mahala",
    "slug": "white-mahala",
    "song_count": 2
  },
  {
    "id": 39,
    "name": "Mondial",
    "slug": "mondial",
    "song_count": 1
  },
  {
    "id": 40,
    "name": "Maria Tănase",
    "slug": "maria-tanase",
    "song_count": 1
  },
  {
    "id": 41,
    "name": "Maria Ciobanu",
    "slug": "maria-ciobanu",
    "song_count": 1
  },
  {
    "id": 42,
    "name": "Floarea Calotă",
    "slug": "floarea-calota",
    "song_count": 1
  },
  {
    "id": 43,
    "name": "Frații Petreuș",
    "slug": "fratii-petreus",
    "song_count": 1
  },
  {
    "id": 44,
    "name": "Ileana Sărăroiu",
    "slug": "ileana-sararoiu",
    "song_count": 1
  },
  {
    "id": 45,
    "name": "Traian Ilea",
    "slug": "traian-ilea",
    "song_count": 1
  },
  {
    "id": 46,
    "name": "Cristian Pățurcă",
    "slug": "cristian-paturca",
    "song_count": 1
  },
  {
    "id": 47,
    "name": "Bosquito",
    "slug": "bosquito",
    "song_count": 1
  },
  {
    "id": 48,
    "name": "Vunk",
    "slug": "vunk",
    "song_count": 2
  },
  {
    "id": 49,
    "name": "Vama",
    "slug": "vama",
    "song_count": 1
  },
  {
    "id": 50,
    "name": "Holograf",
    "slug": "holograf",
    "song_count": 1
  },
  {
    "id": 51,
    "name": "Vama Veche",
    "slug": "vama-veche",
    "song_count": 3
  },
  {
    "id": 52,
    "name": "Daniel Iancu",
    "slug": "daniel-iancu",
    "song_count": 1
  },
  {
    "id": 53,
    "name": "Cargo",
    "slug": "cargo",
    "song_count": 4
  },
  {
    "id": 54,
    "name": "Semnal M",
    "slug": "semnal-m",
    "song_count": 1
  },
  {
    "id": 55,
    "name": "Phoenix",
    "slug": "phoenix",
    "song_count": 9
  },
  {
    "id": 56,
    "name": "Iris",
    "slug": "iris",
    "song_count": 4
  },
  {
    "id": 57,
    "name": "Compact",
    "slug": "compact",
    "song_count": 1
  },
  {
    "id": 58,
    "name": "Alternosfera",
    "slug": "alternosfera",
    "song_count": 1
  },
  {
    "id": 59,
    "name": "Talisman",
    "slug": "talisman",
    "song_count": 1
  },
  {
    "id": 60,
    "name": "Zdob și Zdub",
    "slug": "zdob-si-zdub",
    "song_count": 1
  },
  {
    "id": 61,
    "name": "Pasărea Colibri",
    "slug": "pasarea-colibri",
    "song_count": 15
  },
  {
    "id": 62,
    "name": "Timpuri Noi",
    "slug": "timpuri-noi",
    "song_count": 1
  },
  {
    "id": 63,
    "name": "Antract",
    "slug": "antract",
    "song_count": 1
  }
];

export const categoriesData: Category[] = [
  {
    "id": 1,
    "name": "Cântece de mahala",
    "slug": "cantece-de-mahala",
    "description": "",
    "song_count": 13
  },
  {
    "id": 2,
    "name": "Lăutărești",
    "slug": "lautaresti",
    "description": "",
    "song_count": 8
  },
  {
    "id": 3,
    "name": "Folk",
    "slug": "folk",
    "description": "",
    "song_count": 33
  },
  {
    "id": 4,
    "name": "Satiră și umor",
    "slug": "satira-si-umor",
    "description": "",
    "song_count": 4
  },
  {
    "id": 5,
    "name": "Cântece de munte",
    "slug": "cantece-de-munte",
    "description": "",
    "song_count": 35
  },
  {
    "id": 6,
    "name": "Cântece țigănești",
    "slug": "cantece-tiganesti",
    "description": "",
    "song_count": 5
  },
  {
    "id": 7,
    "name": "Aniversări",
    "slug": "aniversari",
    "description": "",
    "song_count": 7
  },
  {
    "id": 8,
    "name": "Romanțe",
    "slug": "romante",
    "description": "",
    "song_count": 1
  },
  {
    "id": 9,
    "name": "Școala și profesorii",
    "slug": "scoala-si-profesorii",
    "description": "",
    "song_count": 1
  },
  {
    "id": 10,
    "name": "Cenaclul 'Flacăra'",
    "slug": "cenaclul-flacara",
    "description": "",
    "song_count": 18
  },
  {
    "id": 11,
    "name": "Despre Patrie",
    "slug": "despre-patrie",
    "description": "",
    "song_count": 3
  },
  {
    "id": 12,
    "name": "Cântece pentru copii",
    "slug": "cantece-pentru-copii",
    "description": "",
    "song_count": 2
  },
  {
    "id": 13,
    "name": "De iarnă",
    "slug": "de-iarna",
    "description": "",
    "song_count": 1
  },
  {
    "id": 14,
    "name": "Imnuri",
    "slug": "imnuri",
    "description": "",
    "song_count": 5
  },
  {
    "id": 15,
    "name": "Colinde",
    "slug": "colinde",
    "description": "",
    "song_count": 13
  },
  {
    "id": 16,
    "name": "Muzică ușoară",
    "slug": "muzica-usoara",
    "description": "",
    "song_count": 2
  },
  {
    "id": 17,
    "name": "Etno / Folclor",
    "slug": "etno-folclor",
    "description": "",
    "song_count": 9
  },
  {
    "id": 18,
    "name": "Rock",
    "slug": "rock",
    "description": "",
    "song_count": 26
  },
  {
    "id": 19,
    "name": "Experimental",
    "slug": "experimental",
    "description": "",
    "song_count": 1
  },
  {
    "id": 20,
    "name": "Eminescu",
    "slug": "eminescu",
    "description": "",
    "song_count": 1
  },
  {
    "id": 21,
    "name": "Latino",
    "slug": "latino",
    "description": "",
    "song_count": 1
  },
  {
    "id": 22,
    "name": "Pop-Rock",
    "slug": "pop-rock",
    "description": "",
    "song_count": 6
  },
  {
    "id": 23,
    "name": "Din Republica Moldova",
    "slug": "din-republica-moldova",
    "description": "",
    "song_count": 1
  }
];
