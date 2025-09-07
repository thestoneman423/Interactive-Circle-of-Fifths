
import type { KeyData } from '../types';

export const musicData: KeyData[] = [
  // C Major (0 sharps/flats)
  {
    name: 'C Major',
    relativeMinor: 'A Minor',
    keySignature: [],
    scaleNotes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    diatonicChords: {
      I: { name: 'C', notes: ['C', 'E', 'G'] },
      ii: { name: 'Dm', notes: ['D', 'F', 'A'] },
      iii: { name: 'Em', notes: ['E', 'G', 'B'] },
      IV: { name: 'F', notes: ['F', 'A', 'C'] },
      V: { name: 'G', notes: ['G', 'B', 'D'] },
      vi: { name: 'Am', notes: ['A', 'C', 'E'] },
      'vii°': { name: 'Bdim', notes: ['B', 'D', 'F'] },
    },
  },
  // G Major (1 sharp)
  {
    name: 'G Major',
    relativeMinor: 'E Minor',
    keySignature: ['F#'],
    scaleNotes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    diatonicChords: {
      I: { name: 'G', notes: ['G', 'B', 'D'] },
      ii: { name: 'Am', notes: ['A', 'C', 'E'] },
      iii: { name: 'Bm', notes: ['B', 'D', 'F#'] },
      IV: { name: 'C', notes: ['C', 'E', 'G'] },
      V: { name: 'D', notes: ['D', 'F#', 'A'] },
      vi: { name: 'Em', notes: ['E', 'G', 'B'] },
      'vii°': { name: 'F#dim', notes: ['F#', 'A', 'C'] },
    },
  },
  // D Major (2 sharps)
  {
    name: 'D Major',
    relativeMinor: 'B Minor',
    keySignature: ['F#', 'C#'],
    scaleNotes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    diatonicChords: {
      I: { name: 'D', notes: ['D', 'F#', 'A'] },
      ii: { name: 'Em', notes: ['E', 'G', 'B'] },
      iii: { name: 'F#m', notes: ['F#', 'A', 'C#'] },
      IV: { name: 'G', notes: ['G', 'B', 'D'] },
      V: { name: 'A', notes: ['A', 'C#', 'E'] },
      vi: { name: 'Bm', notes: ['B', 'D', 'F#'] },
      'vii°': { name: 'C#dim', notes: ['C#', 'E', 'G'] },
    },
  },
  // A Major (3 sharps)
  {
    name: 'A Major',
    relativeMinor: 'F# Minor',
    keySignature: ['F#', 'C#', 'G#'],
    scaleNotes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    diatonicChords: {
      I: { name: 'A', notes: ['A', 'C#', 'E'] },
      ii: { name: 'Bm', notes: ['B', 'D', 'F#'] },
      iii: { name: 'C#m', notes: ['C#', 'E', 'G#'] },
      IV: { name: 'D', notes: ['D', 'F#', 'A'] },
      V: { name: 'E', notes: ['E', 'G#', 'B'] },
      vi: { name: 'F#m', notes: ['F#', 'A', 'C#'] },
      'vii°': { name: 'G#dim', notes: ['G#', 'B', 'D'] },
    },
  },
  // E Major (4 sharps)
  {
    name: 'E Major',
    relativeMinor: 'C# Minor',
    keySignature: ['F#', 'C#', 'G#', 'D#'],
    scaleNotes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    diatonicChords: {
      I: { name: 'E', notes: ['E', 'G#', 'B'] },
      ii: { name: 'F#m', notes: ['F#', 'A', 'C#'] },
      iii: { name: 'G#m', notes: ['G#', 'B', 'D#'] },
      IV: { name: 'A', notes: ['A', 'C#', 'E'] },
      V: { name: 'B', notes: ['B', 'D#', 'F#'] },
      vi: { name: 'C#m', notes: ['C#', 'E', 'G#'] },
      'vii°': { name: 'D#dim', notes: ['D#', 'F#', 'A'] },
    },
  },
  // B Major (5 sharps)
  {
    name: 'B Major',
    relativeMinor: 'G# Minor',
    keySignature: ['F#', 'C#', 'G#', 'D#', 'A#'],
    scaleNotes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    diatonicChords: {
      I: { name: 'B', notes: ['B', 'D#', 'F#'] },
      ii: { name: 'C#m', notes: ['C#', 'E', 'G#'] },
      iii: { name: 'D#m', notes: ['D#', 'F#', 'A#'] },
      IV: { name: 'E', notes: ['E', 'G#', 'B'] },
      V: { name: 'F#', notes: ['F#', 'A#', 'C#'] },
      vi: { name: 'G#m', notes: ['G#', 'B', 'D#'] },
      'vii°': { name: 'A#dim', notes: ['A#', 'C#', 'E'] },
    },
  },
  // F# Major (6 sharps)
  {
    name: 'F# Major',
    relativeMinor: 'D# Minor',
    keySignature: ['F#', 'C#', 'G#', 'D#', 'A#', 'E#'],
    scaleNotes: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    diatonicChords: {
      I: { name: 'F#', notes: ['F#', 'A#', 'C#'] },
      ii: { name: 'G#m', notes: ['G#', 'B', 'D#'] },
      iii: { name: 'A#m', notes: ['A#', 'C#', 'E#'] },
      IV: { name: 'B', notes: ['B', 'D#', 'F#'] },
      V: { name: 'C#', notes: ['C#', 'E#', 'G#'] },
      vi: { name: 'D#m', notes: ['D#', 'F#', 'A#'] },
      'vii°': { name: 'E#dim', notes: ['E#', 'G#', 'B'] },
    },
  },
  // Db Major (5 flats)
  {
    name: 'Db Major',
    relativeMinor: 'Bb Minor',
    keySignature: ['Bb', 'Eb', 'Ab', 'Db', 'Gb'],
    scaleNotes: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    diatonicChords: {
      I: { name: 'Db', notes: ['Db', 'F', 'Ab'] },
      ii: { name: 'Ebm', notes: ['Eb', 'Gb', 'Bb'] },
      iii: { name: 'Fm', notes: ['F', 'Ab', 'C'] },
      IV: { name: 'Gb', notes: ['Gb', 'Bb', 'Db'] },
      V: { name: 'Ab', notes: ['Ab', 'C', 'Eb'] },
      vi: { name: 'Bbm', notes: ['Bb', 'Db', 'F'] },
      'vii°': { name: 'Cdim', notes: ['C', 'Eb', 'Gb'] },
    },
  },
  // Ab Major (4 flats)
  {
    name: 'Ab Major',
    relativeMinor: 'F Minor',
    keySignature: ['Bb', 'Eb', 'Ab', 'Db'],
    scaleNotes: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    diatonicChords: {
      I: { name: 'Ab', notes: ['Ab', 'C', 'Eb'] },
      ii: { name: 'Bbm', notes: ['Bb', 'Db', 'F'] },
      iii: { name: 'Cm', notes: ['C', 'Eb', 'G'] },
      IV: { name: 'Db', notes: ['Db', 'F', 'Ab'] },
      V: { name: 'Eb', notes: ['Eb', 'G', 'Bb'] },
      vi: { name: 'Fm', notes: ['F', 'Ab', 'C'] },
      'vii°': { name: 'Gdim', notes: ['G', 'Bb', 'Db'] },
    },
  },
  // Eb Major (3 flats)
  {
    name: 'Eb Major',
    relativeMinor: 'C Minor',
    keySignature: ['Bb', 'Eb', 'Ab'],
    scaleNotes: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    diatonicChords: {
      I: { name: 'Eb', notes: ['Eb', 'G', 'Bb'] },
      ii: { name: 'Fm', notes: ['F', 'Ab', 'C'] },
      iii: { name: 'Gm', notes: ['G', 'Bb', 'D'] },
      IV: { name: 'Ab', notes: ['Ab', 'C', 'Eb'] },
      V: { name: 'Bb', notes: ['Bb', 'D', 'F'] },
      vi: { name: 'Cm', notes: ['C', 'Eb', 'G'] },
      'vii°': { name: 'Ddim', notes: ['D', 'F', 'Ab'] },
    },
  },
  // Bb Major (2 flats)
  {
    name: 'Bb Major',
    relativeMinor: 'G Minor',
    keySignature: ['Bb', 'Eb'],
    scaleNotes: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    diatonicChords: {
      I: { name: 'Bb', notes: ['Bb', 'D', 'F'] },
      ii: { name: 'Cm', notes: ['C', 'Eb', 'G'] },
      iii: { name: 'Dm', notes: ['D', 'F', 'A'] },
      IV: { name: 'Eb', notes: ['Eb', 'G', 'Bb'] },
      V: { name: 'F', notes: ['F', 'A', 'C'] },
      vi: { name: 'Gm', notes: ['G', 'Bb', 'D'] },
      'vii°': { name: 'Adim', notes: ['A', 'C', 'Eb'] },
    },
  },
  // F Major (1 flat)
  {
    name: 'F Major',
    relativeMinor: 'D Minor',
    keySignature: ['Bb'],
    scaleNotes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    diatonicChords: {
      I: { name: 'F', notes: ['F', 'A', 'C'] },
      ii: { name: 'Gm', notes: ['G', 'Bb', 'D'] },
      iii: { name: 'Am', notes: ['A', 'C', 'E'] },
      IV: { name: 'Bb', notes: ['Bb', 'D', 'F'] },
      V: { name: 'C', notes: ['C', 'E', 'G'] },
      vi: { name: 'Dm', notes: ['D', 'F', 'A'] },
      'vii°': { name: 'Edim', notes: ['E', 'G', 'Bb'] },
    },
  },
  // A Minor
  {
    name: 'A Minor',
    relativeMajor: 'C Major',
    keySignature: [],
    scaleNotes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    diatonicChords: {
      i: { name: 'Am', notes: ['A', 'C', 'E'] },
      'ii°': { name: 'Bdim', notes: ['B', 'D', 'F'] },
      III: { name: 'C', notes: ['C', 'E', 'G'] },
      iv: { name: 'Dm', notes: ['D', 'F', 'A'] },
      v: { name: 'Em', notes: ['E', 'G', 'B'] },
      VI: { name: 'F', notes: ['F', 'A', 'C'] },
      VII: { name: 'G', notes: ['G', 'B', 'D'] },
    },
  },
  // E Minor
  {
    name: 'E Minor',
    relativeMajor: 'G Major',
    keySignature: ['F#'],
    scaleNotes: ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
    diatonicChords: {
      i: { name: 'Em', notes: ['E', 'G', 'B'] },
      'ii°': { name: 'F#dim', notes: ['F#', 'A', 'C'] },
      III: { name: 'G', notes: ['G', 'B', 'D'] },
      iv: { name: 'Am', notes: ['A', 'C', 'E'] },
      v: { name: 'Bm', notes: ['B', 'D', 'F#'] },
      VI: { name: 'C', notes: ['C', 'E', 'G'] },
      VII: { name: 'D', notes: ['D', 'F#', 'A'] },
    },
  },
  // B Minor
  {
    name: 'B Minor',
    relativeMajor: 'D Major',
    keySignature: ['F#', 'C#'],
    scaleNotes: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
    diatonicChords: {
      i: { name: 'Bm', notes: ['B', 'D', 'F#'] },
      'ii°': { name: 'C#dim', notes: ['C#', 'E', 'G'] },
      III: { name: 'D', notes: ['D', 'F#', 'A'] },
      iv: { name: 'Em', notes: ['E', 'G', 'B'] },
      v: { name: 'F#m', notes: ['F#', 'A', 'C#'] },
      VI: { name: 'G', notes: ['G', 'B', 'D'] },
      VII: { name: 'A', notes: ['A', 'C#', 'E'] },
    },
  },
  // F# Minor
  {
    name: 'F# Minor',
    relativeMajor: 'A Major',
    keySignature: ['F#', 'C#', 'G#'],
    scaleNotes: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
    diatonicChords: {
      i: { name: 'F#m', notes: ['F#', 'A', 'C#'] },
      'ii°': { name: 'G#dim', notes: ['G#', 'B', 'D'] },
      III: { name: 'A', notes: ['A', 'C#', 'E'] },
      iv: { name: 'Bm', notes: ['B', 'D', 'F#'] },
      v: { name: 'C#m', notes: ['C#', 'E', 'G#'] },
      VI: { name: 'D', notes: ['D', 'F#', 'A'] },
      VII: { name: 'E', notes: ['E', 'G#', 'B'] },
    },
  },
  // C# Minor
  {
    name: 'C# Minor',
    relativeMajor: 'E Major',
    keySignature: ['F#', 'C#', 'G#', 'D#'],
    scaleNotes: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
    diatonicChords: {
      i: { name: 'C#m', notes: ['C#', 'E', 'G#'] },
      'ii°': { name: 'D#dim', notes: ['D#', 'F#', 'A'] },
      III: { name: 'E', notes: ['E', 'G#', 'B'] },
      iv: { name: 'F#m', notes: ['F#', 'A', 'C#'] },
      v: { name: 'G#m', notes: ['G#', 'B', 'D#'] },
      VI: { name: 'A', notes: ['A', 'C#', 'E'] },
      VII: { name: 'B', notes: ['B', 'D#', 'F#'] },
    },
  },
  // G# Minor
  {
    name: 'G# Minor',
    relativeMajor: 'B Major',
    keySignature: ['F#', 'C#', 'G#', 'D#', 'A#'],
    scaleNotes: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
    diatonicChords: {
      i: { name: 'G#m', notes: ['G#', 'B', 'D#'] },
      'ii°': { name: 'A#dim', notes: ['A#', 'C#', 'E'] },
      III: { name: 'B', notes: ['B', 'D#', 'F#'] },
      iv: { name: 'C#m', notes: ['C#', 'E', 'G#'] },
      v: { name: 'D#m', notes: ['D#', 'F#', 'A#'] },
      VI: { name: 'E', notes: ['E', 'G#', 'B'] },
      VII: { name: 'F#', notes: ['F#', 'A#', 'C#'] },
    },
  },
  // D# Minor
  {
    name: 'D# Minor',
    relativeMajor: 'F# Major',
    keySignature: ['F#', 'C#', 'G#', 'D#', 'A#', 'E#'],
    scaleNotes: ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#'],
    diatonicChords: {
      i: { name: 'D#m', notes: ['D#', 'F#', 'A#'] },
      'ii°': { name: 'E#dim', notes: ['E#', 'G#', 'B'] },
      III: { name: 'F#', notes: ['F#', 'A#', 'C#'] },
      iv: { name: 'G#m', notes: ['G#', 'B', 'D#'] },
      v: { name: 'A#m', notes: ['A#', 'C#', 'E#'] },
      VI: { name: 'B', notes: ['B', 'D#', 'F#'] },
      VII: { name: 'C#', notes: ['C#', 'E#', 'G#'] },
    },
  },
  // Bb Minor
  {
    name: 'Bb Minor',
    relativeMajor: 'Db Major',
    keySignature: ['Bb', 'Eb', 'Ab', 'Db', 'Gb'],
    scaleNotes: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
    diatonicChords: {
      i: { name: 'Bbm', notes: ['Bb', 'Db', 'F'] },
      'ii°': { name: 'Cdim', notes: ['C', 'Eb', 'Gb'] },
      III: { name: 'Db', notes: ['Db', 'F', 'Ab'] },
      iv: { name: 'Ebm', notes: ['Eb', 'Gb', 'Bb'] },
      v: { name: 'Fm', notes: ['F', 'Ab', 'C'] },
      VI: { name: 'Gb', notes: ['Gb', 'Bb', 'Db'] },
      VII: { name: 'Ab', notes: ['Ab', 'C', 'Eb'] },
    },
  },
  // F Minor
  {
    name: 'F Minor',
    relativeMajor: 'Ab Major',
    keySignature: ['Bb', 'Eb', 'Ab', 'Db'],
    scaleNotes: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
    diatonicChords: {
      i: { name: 'Fm', notes: ['F', 'Ab', 'C'] },
      'ii°': { name: 'Gdim', notes: ['G', 'Bb', 'Db'] },
      III: { name: 'Ab', notes: ['Ab', 'C', 'Eb'] },
      iv: { name: 'Bbm', notes: ['Bb', 'Db', 'F'] },
      v: { name: 'Cm', notes: ['C', 'Eb', 'G'] },
      VI: { name: 'Db', notes: ['Db', 'F', 'Ab'] },
      VII: { name: 'Eb', notes: ['Eb', 'G', 'Bb'] },
    },
  },
  // C Minor
  {
    name: 'C Minor',
    relativeMajor: 'Eb Major',
    keySignature: ['Bb', 'Eb', 'Ab'],
    scaleNotes: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    diatonicChords: {
      i: { name: 'Cm', notes: ['C', 'Eb', 'G'] },
      'ii°': { name: 'Ddim', notes: ['D', 'F', 'Ab'] },
      III: { name: 'Eb', notes: ['Eb', 'G', 'Bb'] },
      iv: { name: 'Fm', notes: ['F', 'Ab', 'C'] },
      v: { name: 'Gm', notes: ['G', 'Bb', 'D'] },
      VI: { name: 'Ab', notes: ['Ab', 'C', 'Eb'] },
      VII: { name: 'Bb', notes: ['Bb', 'D', 'F'] },
    },
  },
  // G Minor
  {
    name: 'G Minor',
    relativeMajor: 'Bb Major',
    keySignature: ['Bb', 'Eb'],
    scaleNotes: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
    diatonicChords: {
      i: { name: 'Gm', notes: ['G', 'Bb', 'D'] },
      'ii°': { name: 'Adim', notes: ['A', 'C', 'Eb'] },
      III: { name: 'Bb', notes: ['Bb', 'D', 'F'] },
      iv: { name: 'Cm', notes: ['C', 'Eb', 'G'] },
      v: { name: 'Dm', notes: ['D', 'F', 'A'] },
      VI: { name: 'Eb', notes: ['Eb', 'G', 'Bb'] },
      VII: { name: 'F', notes: ['F', 'A', 'C'] },
    },
  },
  // D Minor
  {
    name: 'D Minor',
    relativeMajor: 'F Major',
    keySignature: ['Bb'],
    scaleNotes: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
    diatonicChords: {
      i: { name: 'Dm', notes: ['D', 'F', 'A'] },
      'ii°': { name: 'Edim', notes: ['E', 'G', 'Bb'] },
      III: { name: 'F', notes: ['F', 'A', 'C'] },
      iv: { name: 'Gm', notes: ['G', 'Bb', 'D'] },
      v: { name: 'Am', notes: ['A', 'C', 'E'] },
      VI: { name: 'Bb', notes: ['Bb', 'D', 'F'] },
      VII: { name: 'C', notes: ['C', 'E', 'G'] },
    },
  },
];
