
export type Note = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B' |
                   'Db' | 'Eb' | 'Gb' | 'Ab' | 'Bb' |
                   'E#' | 'B#' | 'Fb' | 'Cb';

export type RomanNumeral = 'I' | 'i' | 'ii' | 'ii°' | 'iii' | 'III' | 'IV' | 'iv' | 'V' | 'v' | 'vi' | 'VI' | 'vii°' | 'VII';

export type DiatonicChords = {
    [key in RomanNumeral]?: { // Properties are now optional to accommodate different key types
        name: string;
        notes: Note[];
    };
};

export interface KeyData {
    name: string;
    relativeMinor?: string;
    relativeMajor?: string;
    keySignature: string[];
    scaleNotes: Note[];
    diatonicChords: DiatonicChords;
}
