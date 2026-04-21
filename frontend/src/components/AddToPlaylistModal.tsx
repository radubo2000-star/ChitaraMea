import { useState } from 'react';
import { X, Plus, Check, ListMusic } from 'lucide-react';
import { usePlaylists } from '@/context/PlaylistsContext';

interface AddToPlaylistModalProps {
  songId: number;
  songTitle: string;
  onClose: () => void;
}

export default function AddToPlaylistModal({ songId, songTitle, onClose }: AddToPlaylistModalProps) {
  const { playlists, createPlaylist, addSongToPlaylist, removeSongFromPlaylist, isSongInPlaylist } = usePlaylists();
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleCreate = () => {
    if (newName.trim()) {
      const playlist = createPlaylist(newName.trim(), newDesc.trim());
      addSongToPlaylist(playlist.id, songId);
      setNewName('');
      setNewDesc('');
      setShowCreate(false);
    }
  };

  const handleToggle = (playlistId: string) => {
    if (isSongInPlaylist(playlistId, songId)) {
      removeSongFromPlaylist(playlistId, songId);
    } else {
      addSongToPlaylist(playlistId, songId);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="wood-card rounded-2xl shadow-xl max-w-md w-full max-h-96 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-wood-300">
          <div>
            <h3 className="font-semibold text-wood-800">Adaugă la playlist</h3>
            <p className="text-xs text-wood-500 mt-0.5 truncate max-w-64">{songTitle}</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-wood-100 text-wood-400">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto max-h-60">
          {playlists.length === 0 && !showCreate && (
            <div className="text-center py-6 text-wood-500">
              <ListMusic size={32} className="mx-auto mb-2 text-wood-200" />
              <p className="text-sm">Nu ai niciun playlist încă</p>
            </div>
          )}

          {playlists.map((pl) => {
            const inPlaylist = isSongInPlaylist(pl.id, songId);
            return (
              <button
                key={pl.id}
                onClick={() => handleToggle(pl.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors mb-1 ${
                  inPlaylist ? 'bg-amber-50 text-amber-700' : 'hover:bg-wood-100 text-wood-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                    inPlaylist ? 'bg-amber-600 border-amber-600' : 'border-wood-300'
                  }`}
                >
                  {inPlaylist && <Check size={14} className="text-white" />}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{pl.name}</p>
                  <p className="text-xs text-wood-400">{pl.songIds.length} cântece</p>
                </div>
              </button>
            );
          })}

          {showCreate ? (
            <div className="mt-2 p-3 border border-wood-300 rounded-lg bg-wood-50">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Numele playlistului"
                className="w-full px-3 py-2 border border-wood-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 mb-2"
                autoFocus
              />
              <input
                type="text"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                placeholder="Descriere (opțional)"
                className="w-full px-3 py-2 border border-wood-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 mb-2"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleCreate}
                  disabled={!newName.trim()}
                  className="flex-1 px-3 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Creează
                </button>
                <button
                  onClick={() => setShowCreate(false)}
                  className="px-3 py-2 border border-wood-300 rounded-lg text-sm text-wood-600 hover:bg-wood-100"
                >
                  Anulează
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowCreate(true)}
              className="w-full flex items-center gap-2 p-3 rounded-lg text-amber-600 hover:bg-amber-50 transition-colors text-sm font-medium mt-1"
            >
              <Plus size={18} />
              Playlist nou
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
