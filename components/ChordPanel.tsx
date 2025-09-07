
import React from 'react';
import type { DiatonicChords, Note, RomanNumeral } from '../types';

interface ChordPanelProps {
    diatonicChords: DiatonicChords;
    onChordPlay: (chord: string, notes: Note[]) => void;
    selectedKeyName: string;
}

const majorRomanNumerals: RomanNumeral[] = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'];
const minorRomanNumerals: RomanNumeral[] = ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'];

export const ChordPanel: React.FC<ChordPanelProps> = ({ diatonicChords, onChordPlay, selectedKeyName }) => {
    const isMinor = selectedKeyName.includes('Minor');
    const numerals = isMinor ? minorRomanNumerals : majorRomanNumerals;
    const primaryChords = isMinor ? ['i', 'iv', 'v'] : ['I', 'IV', 'V'];
    
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {numerals.map(numeral => {
                const chord = diatonicChords[numeral];
                if (!chord) return null;

                const isPrimary = primaryChords.includes(numeral);
                const buttonClasses = `
                    p-2 rounded-lg text-center transition-all duration-200 transform hover:scale-105 shadow-md
                    ${isPrimary ? 'bg-cyan-600 hover:bg-cyan-500' : 'bg-gray-600 hover:bg-gray-500'}
                `;

                return (
                    <button
                        key={numeral}
                        onClick={() => onChordPlay(chord.name, chord.notes)}
                        className={buttonClasses}
                    >
                        <div className="font-bold text-lg">{numeral}</div>
                        <div className="text-sm font-mono">{chord.name}</div>
                    </button>
                );
            })}
        </div>
    );
};
