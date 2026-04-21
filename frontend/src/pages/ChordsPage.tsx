import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { chordsData } from '@/data';
import ChordDiagram from '@/components/ChordDiagram';
import type { Chord } from '@/types';

const ROOT_NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const CHORD_TYPES = ['major', 'minor', 'dominant 7th', 'sus2', 'sus4', 'minor 7th', 'major 7th'];

export default function ChordsPage() {
  const [searchParams] = useSearchParams();
  const highlight = searchParams.get('highlight') || '';

  const [activeRoot, setActiveRoot] = useState('');
  const [activeType, setActiveType] = useState('');
  const [selectedChord, setSelectedChord] = useState<Chord | null>(null);

  const filteredChords = useMemo(() => {
    let chords = [...chordsData];
    if (activeRoot) {
      chords = chords.filter((c) => c.root_note === activeRoot);
    }
    if (activeType) {
      chords = chords.filter((c) => c.type === activeType);
    }
    return chords;
  }, [activeRoot, activeType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-wood-800 mb-2">Dicționar de Acorduri</h1>
      <p className="text-wood-500 mb-6">Toate acordurile pentru chitară cu diagrame și poziții</p>

      {/* Filters */}
      <div className="wood-card p-4 mb-8">
        <div className="mb-4">
          <p className="text-sm font-medium text-wood-600 mb-2">Notă de bază:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveRoot('')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                !activeRoot ? 'bg-wood-600 text-white' : 'bg-wood-100 text-wood-600 hover:bg-wood-200'
              }`}
            >
              Toate
            </button>
            {ROOT_NOTES.map((note) => (
              <button
                key={note}
                onClick={() => setActiveRoot(activeRoot === note ? '' : note)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeRoot === note ? 'bg-wood-600 text-white' : 'bg-wood-100 text-wood-600 hover:bg-wood-200'
                }`}
              >
                {note}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-wood-600 mb-2">Tip acord:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveType('')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                !activeType ? 'bg-wood-600 text-white' : 'bg-wood-100 text-wood-600 hover:bg-wood-200'
              }`}
            >
              Toate
            </button>
            {CHORD_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(activeType === type ? '' : type)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeType === type ? 'bg-wood-600 text-white' : 'bg-wood-100 text-wood-600 hover:bg-wood-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chords Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredChords.map((chord) => (
          <div
            key={chord.id}
            className={`wood-card p-4 text-center cursor-pointer hover:shadow-md transition-all ${
              highlight === chord.name ? 'border-wood-500 ring-2 ring-wood-300' : ''
            }`}
            onClick={() => setSelectedChord(chord)}
          >
            <ChordTag name={chord.name} type={chord.type} />
            <p className="text-xs text-wood-400 mt-1">{chord.type}</p>
            <div className="mt-2 flex justify-center">
              <ChordDiagram chord={chord} size="sm" />
            </div>
          </div>
        ))}
      </div>

      {filteredChords.length === 0 && (
        <div className="text-center py-16">
          <p className="text-wood-400 text-lg">Nu am găsit acorduri cu aceste filtre</p>
        </div>
      )}

      {/* Chord Detail Modal */}
      {selectedChord && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedChord(null)}
        >
          <div
            className="wood-card rounded-2xl shadow-xl max-w-sm w-full p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-wood-800 mb-1">{selectedChord.name}</h2>
            <p className="text-sm text-wood-500 mb-4">{selectedChord.type}</p>
            <div className="flex justify-center mb-4">
              <ChordDiagram chord={selectedChord} size="lg" />
            </div>
            <div className="text-sm text-wood-600">
              <p>Notă de bază: <strong>{selectedChord.root_note}</strong></p>
              {selectedChord.positions.length > 0 && (
                <p className="mt-1">
                  Poziții: {selectedChord.positions.map((p) => `S${p.string}F${p.fret}`).join(', ')}
                </p>
              )}
            </div>
            <button
              onClick={() => setSelectedChord(null)}
              className="mt-4 px-6 py-2 bg-wood-200 text-wood-700 rounded-lg hover:bg-wood-300 text-sm font-medium"
            >
              Închide
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ChordTag({ name, type }: { name: string; type: string }) {
  const getColor = () => {
    if (type === 'minor' || type === 'minor 7th') return 'bg-amber-200 text-amber-800';
    if (type.includes('7')) return 'bg-orange-200 text-orange-800';
    if (type.includes('sus')) return 'bg-stone-200 text-stone-800';
    return 'bg-wood-200 text-wood-800';
  };

  return (
    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-sm font-bold ${getColor()}`}>
      {name}
    </span>
  );
}
