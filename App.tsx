
import React, { useState, useCallback, useMemo } from 'react';
import { CircleOfFifths } from './components/CircleOfFifths';
import { PianoKeyboard } from './components/PianoKeyboard';
import { KeySignatureDisplay } from './components/KeySignatureDisplay';
import { ChordPanel } from './components/ChordPanel';
import { musicData } from './constants/musicData';
import type { KeyData, Note } from './types';
import { playChord } from './services/audioService';

const App: React.FC = () => {
    const [selectedKeyName, setSelectedKeyName] = useState<string>('C Major');
    const [highlightedChordNotes, setHighlightedChordNotes] = useState<Note[]>([]);

    const selectedKey: KeyData = useMemo(() => {
        return musicData.find(k => k.name === selectedKeyName) || musicData[0];
    }, [selectedKeyName]);

    const handleKeySelect = useCallback((keyName: string) => {
        setSelectedKeyName(keyName);
        setHighlightedChordNotes([]);
    }, []);

    const handleChordPlay = useCallback((chord: string, notes: Note[]) => {
        playChord(notes);
        setHighlightedChordNotes(notes);
        setTimeout(() => setHighlightedChordNotes([]), 1500);
    }, []);
    
    const modulate = (interval: number) => {
        const majorKeyOrder = musicData.filter(k => !k.name.includes('Minor')).map(k => k.name);
        const currentKey = selectedKey.name.includes('Minor') ? selectedKey.relativeMajor! : selectedKey.name;
        const currentIndex = majorKeyOrder.findIndex(k => k === currentKey);

        if (currentIndex === -1) return;
        const newIndex = (currentIndex + interval + majorKeyOrder.length) % majorKeyOrder.length;
        setSelectedKeyName(majorKeyOrder[newIndex]);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 lg:p-6 font-sans">
            <header className="w-full text-center mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">Interactive Circle of Fifths</h1>
                <p className="text-gray-400">Select a key to explore its scales, chords, and signature.</p>
            </header>

            <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-2xl shadow-lg">
                    <CircleOfFifths selectedKey={selectedKey} onKeySelect={handleKeySelect} />
                </div>

                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-gray-800/50 p-4 rounded-2xl shadow-lg">
                        <h2 className="text-xl font-semibold mb-2 text-cyan-400">
                            {selectedKey.name.includes('Minor') 
                                ? `${selectedKey.name} / ${selectedKey.relativeMajor}`
                                : `${selectedKey.name} / ${selectedKey.relativeMinor}`
                            }
                        </h2>
                        <KeySignatureDisplay 
                            signature={selectedKey.keySignature} 
                            scaleNotes={selectedKey.scaleNotes}
                        />
                    </div>
                     <div className="bg-gray-800/50 p-4 rounded-2xl shadow-lg">
                        <h2 className="text-xl font-semibold mb-3 text-cyan-400">Diatonic Chords</h2>
                        <ChordPanel
                            diatonicChords={selectedKey.diatonicChords}
                            onChordPlay={handleChordPlay}
                            selectedKeyName={selectedKey.name}
                        />
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-2xl shadow-lg flex items-center justify-around">
                        <button 
                            onClick={() => modulate(7)} 
                            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors duration-200 shadow-md transform hover:scale-105">
                            Modulate to V <span className="font-mono">(Dominant)</span>
                        </button>
                        <button 
                            onClick={() => modulate(5)} 
                            className="px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors duration-200 shadow-md transform hover:scale-105">
                            Modulate to IV <span className="font-mono">(Subdominant)</span>
                        </button>
                    </div>
                </div>
            </main>

            <footer className="w-full max-w-7xl mt-6">
                <PianoKeyboard 
                    scaleNotes={selectedKey.scaleNotes} 
                    highlightedChordNotes={highlightedChordNotes} 
                />
            </footer>
        </div>
    );
};

export default App;
