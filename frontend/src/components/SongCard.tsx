import { Link } from 'react-router-dom';
import { Heart, Music } from 'lucide-react';
import type { Song } from '@/types';
import { useFavorites } from '@/context/FavoritesContext';
import ChordTag from './ChordTag';

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(song.id);

  return (
    <div className="wood-card hover:shadow-md transition-shadow p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <Link
            to={`/songs/${song.slug}`}
            className="text-lg font-semibold text-wood-800 hover:text-wood-600 transition-colors line-clamp-1"
          >
            {song.title}
          </Link>
          <Link
            to={`/authors/${song.author.slug}`}
            className="text-sm text-wood-500 hover:text-wood-700 mt-0.5 block"
          >
            <span className="flex items-center gap-1">
              <Music size={12} />
              {song.author.name}
            </span>
          </Link>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(song.id);
          }}
          className={`shrink-0 p-1.5 rounded-lg transition-colors ${
            favorite ? 'text-red-500 hover:bg-red-50' : 'text-wood-300 hover:text-red-400 hover:bg-red-50'
          }`}
          title={favorite ? 'Elimină de la favorite' : 'Adaugă la favorite'}
        >
          <Heart size={18} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Chord tags */}
      {song.chords.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {song.chords.slice(0, 8).map((chord) => (
            <ChordTag key={chord} name={chord} />
          ))}
          {song.chords.length > 8 && (
            <span className="text-xs text-wood-400 self-center">+{song.chords.length - 8}</span>
          )}
        </div>
      )}

      {/* Categories */}
      {song.categories.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {song.categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.slug}`}
              className="text-xs text-wood-600 bg-wood-200 px-2 py-0.5 rounded-full hover:bg-wood-300 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
