
import React from 'react';
import type { Note } from '../types';

interface PianoKeyboardProps {
    scaleNotes: Note[];
    highlightedChordNotes: Note[];
}

const KEY_MAP = [
  { name: 'C', type: 'white' }, { name: 'C#', type: 'black' },
  { name: 'D', type: 'white' }, { name: 'D#', type: 'black' },
  { name: 'E', type: 'white' },
  { name: 'F', type: 'white' }, { name: 'F#', type: 'black' },
  { name: 'G', type: 'white' }, { name: 'G#', type: 'black' },
  { name: 'A', type: 'white' }, { name: 'A#', type: 'black' },
  { name: 'B', type: 'white' },
];

const twoOctaveKeys = [
  ...KEY_MAP.map(k => ({...k, note: k.name as Note, octave: 4})),
  ...KEY_MAP.map(k => ({...k, note: k.name as Note, octave: 5})),
];

const enharmonicEquivalents: { [key: string]: string } = {
    'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb',
    'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#',
    'E#': 'F', 'F': 'E#',
    'B#': 'C', 'C': 'B#',
    'Fb': 'E', 'E': 'Fb',
    'Cb': 'B', 'B': 'Cb',
};


export const PianoKeyboard: React.FC<PianoKeyboardProps> = ({ scaleNotes, highlightedChordNotes }) => {
    const isNoteInSet = (note: Note, set: Note[]) => {
        if (set.includes(note)) return true;
        const equivalent = enharmonicEquivalents[note];
        return equivalent ? set.includes(equivalent as Note) : false;
    };
    
    const whiteKeys = twoOctaveKeys.filter(k => k.type === 'white');
    const blackKeys = twoOctaveKeys.filter(k => k.type === 'black');
    const numWhiteKeys = whiteKeys.length;

    return (
        <div className="relative w-full h-40 bg-gray-800 p-2 rounded-xl shadow-inner select-none">
            <div className="relative flex h-full w-full">
                {/* White Keys */}
                {whiteKeys.map(({ note, octave }) => {
                    const isInScale = isNoteInSet(note, scaleNotes);
                    const isInChord = isNoteInSet(note, highlightedChordNotes);
                    const keyClasses = `
                        relative h-full flex-1 border-2 border-gray-900 rounded-b-md
                        transition-all duration-200 ease-in-out
                        ${isInChord ? 'bg-yellow-400' : isInScale ? 'bg-cyan-600' : 'bg-gray-100'}
                    `;
                    return (
                        <div key={`${note}${octave}`} className={keyClasses}>
                             <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-gray-800 font-semibold text-xs">{note}</span>
                        </div>
                    );
                })}
                {/* Black Keys */}
                {blackKeys.map(({ note, octave }) => {
                    const fullNoteName = note;
                    const isInScale = isNoteInSet(fullNoteName, scaleNotes);
                    const isInChord = isNoteInSet(fullNoteName, highlightedChordNotes);
                    
                    const precedingWhiteKeys = twoOctaveKeys.slice(0, twoOctaveKeys.findIndex(k => k.note === note && k.octave === octave)).filter(k => k.type === 'white').length;
                    
                    const keyClasses = `
                        absolute h-2/3 w-[5.5%] border-2 border-gray-900 rounded-b-md z-10
                        transition-all duration-200 ease-in-out transform -translate-x-1/2
                        ${isInChord ? 'bg-yellow-400 border-yellow-300' : isInScale ? 'bg-cyan-500 border-cyan-400' : 'bg-gray-800'}
                    `;

                    return (
                        <div key={`${note}${octave}`} className={keyClasses} style={{ left: `${(precedingWhiteKeys / numWhiteKeys) * 100}%` }}>
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-white font-semibold text-xs">{note}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
