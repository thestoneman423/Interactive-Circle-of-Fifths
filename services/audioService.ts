import type { Note } from '../types';

let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
    if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContext;
};

const noteToFrequency = (note: Note, octave: number = 4): number => {
    const noteMap: { [key in Note]?: number } = {
        'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5,
        'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11,
        'E#': 5, 'B#': 0, 'Fb': 4, 'Cb': 11
    };
    const semitones = noteMap[note];
    if (semitones === undefined) {
      // Return a default frequency for unknown notes, or handle error
      return 440;
    }
    // A4 is 440 Hz, which is the 9th semitone of the 4th octave
    return 440 * Math.pow(2, ( (octave - 4) * 12 + semitones - 9) / 12);
};

export const playChord = (notes: Note[]) => {
    try {
        const context = getAudioContext();
        if (context.state === 'suspended') {
            context.resume();
        }
        const now = context.currentTime;
        const gainNode = context.createGain();
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
        gainNode.connect(context.destination);

        const noteOrder = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const rootNoteName = notes[0].charAt(0);

        notes.forEach((note, index) => {
            const oscillator = context.createOscillator();
            oscillator.type = 'sine';

            const currentNoteName = note.charAt(0);
            const baseOctave = index > 0 && noteOrder.indexOf(currentNoteName) < noteOrder.indexOf(rootNoteName) ? 5 : 4;
            
            oscillator.frequency.value = noteToFrequency(note, baseOctave);
            oscillator.connect(gainNode);
            oscillator.start(now);
            oscillator.stop(now + 1.2);
        });
    } catch (e) {
        console.error("Web Audio API is not supported in this browser or failed to initialize.", e);
    }
};
