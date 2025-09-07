import React from 'react';
import { musicData } from '../constants/musicData';
import type { KeyData } from '../types';

interface CircleOfFifthsProps {
    selectedKey: KeyData;
    onKeySelect: (keyName: string) => void;
}

const keyOrder = [
    'C Major', 'G Major', 'D Major', 'A Major', 'E Major', 'B Major', 
    'F# Major', 'Db Major', 'Ab Major', 'Eb Major', 'Bb Major', 'F Major'
];

export const CircleOfFifths: React.FC<CircleOfFifthsProps> = ({ selectedKey, onKeySelect }) => {
    const size = 500;
    const center = size / 2;
    
    const majorOuterRadius = size * 0.45;
    const majorInnerRadius = size * 0.32;
    const minorOuterRadius = majorInnerRadius;
    const minorInnerRadius = size * 0.19;

    const majorKeys = keyOrder.map(name => musicData.find(k => k.name === name)).filter(Boolean) as KeyData[];
    const numKeys = majorKeys.length;
    const angleStep = (2 * Math.PI) / numKeys;

    const getPathForSegment = (index: number, outerRadius: number, innerRadius: number) => {
        const startAngle = index * angleStep - angleStep / 2 - Math.PI / 2;
        const endAngle = index * angleStep + angleStep / 2 - Math.PI / 2;

        const startOuter = { x: center + outerRadius * Math.cos(startAngle), y: center + outerRadius * Math.sin(startAngle) };
        const endOuter = { x: center + outerRadius * Math.cos(endAngle), y: center + outerRadius * Math.sin(endAngle) };
        const startInner = { x: center + innerRadius * Math.cos(startAngle), y: center + innerRadius * Math.sin(startAngle) };
        const endInner = { x: center + innerRadius * Math.cos(endAngle), y: center + innerRadius * Math.sin(endAngle) };

        const largeArcFlag = angleStep > Math.PI ? 1 : 0;

        return [
            `M ${startOuter.x} ${startOuter.y}`,
            `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
            `L ${endInner.x} ${endInner.y}`,
            `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
            'Z'
        ].join(' ');
    };

    const renderDiatonicFunctionLabels = () => {
        const labelRadius = majorOuterRadius + 22;

        const noteToKeyMap: { [key: string]: string } = {
            'C': 'C Major', 'C#': 'Db Major', 'Db': 'Db Major', 'D': 'D Major', 'D#': 'Eb Major', 'Eb': 'Eb Major',
            'E': 'E Major', 'F': 'F Major', 'F#': 'F# Major', 'Gb': 'F# Major', 'G': 'G Major', 'G#': 'Ab Major',
            'Ab': 'Ab Major', 'A': 'A Major', 'A#': 'Bb Major', 'Bb': 'Bb Major', 'B': 'B Major', 'B#': 'C Major',
            'E#': 'F Major', 'Fb': 'E Major', 'Cb': 'B Major'
        };

        return Object.entries(selectedKey.diatonicChords).map(([numeral, chordData]) => {
            if (!chordData) return null;
            
            const rootNote = chordData.notes[0];
            const keyNameOnCircle = noteToKeyMap[rootNote];
            if (!keyNameOnCircle) return null;

            const keyIndex = keyOrder.findIndex(k => k === keyNameOnCircle);
            if (keyIndex === -1) return null;

            const angle = keyIndex * angleStep - Math.PI / 2;
            const textPos = {
                x: center + labelRadius * Math.cos(angle),
                y: center + labelRadius * Math.sin(angle)
            };
            
            return (
                <text
                    key={numeral}
                    x={textPos.x}
                    y={textPos.y}
                    textAnchor="middle"
                    dy=".3em"
                    className="fill-sky-300 font-bold text-lg"
                    style={{ pointerEvents: 'none' }}
                >
                    {numeral}
                </text>
            );
        });
    };

    const renderRelationshipLines = () => {
        const noteToKeyMap: { [key: string]: string } = {
            'C': 'C Major', 'C#': 'Db Major', 'Db': 'Db Major', 'D': 'D Major', 'D#': 'Eb Major', 'Eb': 'Eb Major',
            'E': 'E Major', 'F': 'F Major', 'F#': 'F# Major', 'Gb': 'F# Major', 'G': 'G Major', 'G#': 'Ab Major',
            'Ab': 'Ab Major', 'A': 'A Major', 'A#': 'Bb Major', 'Bb': 'Bb Major', 'B': 'B Major', 'B#': 'C Major',
            'E#': 'F Major', 'Fb': 'E Major', 'Cb': 'B Major'
        };

        const points: {x: number, y: number}[] = selectedKey.scaleNotes
            .map(note => {
                const keyName = noteToKeyMap[note];
                if (!keyName) return null;
                
                const keyIndex = keyOrder.findIndex(k => k === keyName);
                if (keyIndex === -1) return null;

                const angle = keyIndex * angleStep - Math.PI / 2;
                const radius = minorInnerRadius - 15;
                return {
                    x: center + radius * Math.cos(angle),
                    y: center + radius * Math.sin(angle),
                };
            })
            .filter((p): p is {x: number, y: number} => p !== null);

        if (points.length < 2) return null;

        const pathData = "M " + points.map(p => `${p.x} ${p.y}`).join(" L ") + " Z";

        return (
            <path
                d={pathData}
                fill="rgba(56, 189, 248, 0.2)"
                stroke="rgba(107, 224, 255, 0.6)"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{ pointerEvents: 'none' }}
            />
        );
    };


    return (
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-lg aspect-square">
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g>{renderDiatonicFunctionLabels()}</g>
            <g>
                {majorKeys.map((majorKey, i) => {
                    const angle = i * angleStep - Math.PI / 2;
                    const isSelectedMajor = majorKey.name === selectedKey.name;
                    const isSelectedMinor = majorKey.relativeMinor === selectedKey.name;

                    const majorTextRadius = (majorOuterRadius + majorInnerRadius) / 2;
                    const majorTextPos = { x: center + majorTextRadius * Math.cos(angle), y: center + majorTextRadius * Math.sin(angle) };

                    const minorTextRadius = (minorOuterRadius + minorInnerRadius) / 2;
                    const minorTextPos = { x: center + minorTextRadius * Math.cos(angle), y: center + minorTextRadius * Math.sin(angle) };

                    return (
                        <React.Fragment key={majorKey.name}>
                            {/* Major Key Segment */}
                            <g onClick={() => onKeySelect(majorKey.name)} className="cursor-pointer group">
                                <path
                                    d={getPathForSegment(i, majorOuterRadius, majorInnerRadius)}
                                    className={`stroke-gray-600 stroke-2 transition-all duration-300 group-hover:fill-cyan-800/50 ${isSelectedMajor ? 'fill-cyan-600' : 'fill-gray-700/80'}`}
                                    style={isSelectedMajor ? { filter: 'url(#glow)'} : {}}
                                />
                                <text x={majorTextPos.x} y={majorTextPos.y} textAnchor="middle" dy=".3em" className={`font-bold text-lg pointer-events-none transition-colors duration-300 ${isSelectedMajor ? 'fill-white' : 'fill-gray-300'}`}>
                                    {majorKey.name.split(' ')[0]}
                                </text>
                            </g>

                            {/* Minor Key Segment */}
                            <g onClick={() => onKeySelect(majorKey.relativeMinor!)} className="cursor-pointer group">
                                <path
                                    d={getPathForSegment(i, minorOuterRadius, minorInnerRadius)}
                                    className={`stroke-gray-600 stroke-2 transition-all duration-300 group-hover:fill-sky-800/50 ${isSelectedMinor ? 'fill-sky-600' : 'fill-gray-800/70'}`}
                                    style={isSelectedMinor ? { filter: 'url(#glow)'} : {}}
                                />
                                <text x={minorTextPos.x} y={minorTextPos.y} textAnchor="middle" dy=".3em" className={`font-semibold text-sm pointer-events-none transition-colors duration-300 ${isSelectedMinor ? 'fill-gray-100' : 'fill-gray-400'}`}>
                                    {majorKey.relativeMinor!.split(' ')[0]}m
                                </text>
                            </g>
                        </React.Fragment>
                    );
                })}
            </g>
            <g>{renderRelationshipLines()}</g>
        </svg>
    );
};