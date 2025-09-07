
import React from 'react';
import type { Note } from '../types';

interface KeySignatureDisplayProps {
    signature: string[];
    scaleNotes: Note[];
}

const staffLineY = [20, 30, 40, 50, 60];
const sharpPath = "M5,0 L5,20 M0,7 L10,5 M0,15 L10,13";
const flatPath = "M0,0 L0,20 C 5,15 10,15 5,10 C -5,5 0,5 0,0 Z";

const signatureNotePositions: { [key: string]: number } = {
    'F#': 15, 'C#': 25, 'G#': 10, 'D#': 20, 'A#': 30, 'E#': 15, 'B#': 25,
    'Bb': 35, 'Eb': 20, 'Ab': 40, 'Db': 25, 'Gb': 45, 'Cb': 30, 'Fb': 15
};

const Sharp: React.FC<{ x: number, y: number }> = ({ x, y }) => (
    <path d={sharpPath} stroke="currentColor" strokeWidth="2" fill="none" transform={`translate(${x},${y})`} />
);

const Flat: React.FC<{ x: number, y: number }> = ({ x, y }) => (
    <path d={flatPath} stroke="currentColor" strokeWidth="1.5" fill="currentColor" transform={`translate(${x},${y}) scale(0.7)`} />
);

export const KeySignatureDisplay: React.FC<KeySignatureDisplayProps> = ({ signature, scaleNotes }) => {
    const isSharp = signature.length > 0 && signature[0].includes('#');
    const isFlat = signature.length > 0 && signature[0].includes('b');
    const signatureWidth = 50 + signature.length * 15;

    const signatureSymbols = signature.map((note, index) => {
        const x = 50 + index * 15;
        const y = signatureNotePositions[note];
        if (isSharp) return <Sharp key={note} x={x} y={y} />;
        if (isFlat) return <Flat key={note} x={x} y={y} />;
        return null;
    });

    const renderScaleNotes = () => {
        const yPositions: { [note: string]: number } = {
            'C3': 100, 'D3': 95, 'E3': 90, 'F3': 85, 'G3': 80,
            'A3': 75, 'B3': 70, 'C4': 65, 'D4': 60, 'E4': 55,
            'F4': 50, 'G4': 45, 'A4': 40, 'B4': 35, 'C5': 30,
            'D5': 25, 'E5': 20, 'F5': 15, 'G5': 10, 'A5': 5,
        };
        const noteLetters = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const rootNoteLetter = scaleNotes[0].replace(/#|b/, '');
        
        let startOctave = ['A', 'B'].includes(rootNoteLetter) ? 3 : 4;
        
        let lastNoteIndex = noteLetters.indexOf(rootNoteLetter);

        const notesWithOctave = scaleNotes.map((note, idx) => {
            const noteLetter = note.replace(/#|b/, '');
            const currentIndex = noteLetters.indexOf(noteLetter);
            if (idx > 0 && currentIndex < lastNoteIndex) {
                startOctave++;
            }
            lastNoteIndex = currentIndex;
            return { note, name: `${noteLetter}${startOctave}` };
        });

        const startX = signatureWidth + 25;
        
        return (
            <g className="scale-notes">
                {notesWithOctave.map(({ note, name }, index) => {
                    const y = yPositions[name];
                    if (y === undefined) return null;

                    const needsLedgerLine = name === 'C4' || name === 'A3' || name === 'A5' || name === 'G5';
                    const xPos = startX + index * 22;

                    return (
                        <g key={index} transform={`translate(${xPos}, 0)`}>
                            {needsLedgerLine && <line x1="-10" y1={y} x2="10" y2={y} stroke="currentColor" strokeWidth="1" />}
                            <ellipse cx="0" cy={y} rx="6.5" ry="5" fill="currentColor" />
                        </g>
                    );
                })}
            </g>
        );
    };

    return (
        <div className="w-full bg-gray-700/50 p-3 rounded-lg">
            <svg viewBox="0 0 400 100" className="w-full h-auto text-gray-200">
                 <g className="staff-lines">
                    {/* Shift y for new viewBox */}
                    {[25, 35, 45, 55, 65].map(y => <line key={y} x1="10" y1={y} x2="390" y2={y} stroke="currentColor" strokeWidth="1" />)}
                </g>
                <g className="clef" transform="translate(0, 5)">
                    <text x="15" y="52" fontSize="52" fontFamily="serif" fill="currentColor">𝄞</text>
                </g>
                <g className="signature" transform="translate(0, -5)">
                    {signatureSymbols}
                </g>
                <g transform="translate(0, -5)">
                  {renderScaleNotes()}
                </g>
            </svg>
        </div>
    );
};
