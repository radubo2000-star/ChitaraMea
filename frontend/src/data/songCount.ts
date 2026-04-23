import { songsData, authorsData, categoriesData } from '@/data';

/**
 * Compute dynamic song count for an author based on actual songs in songsData
 */
export function getAuthorSongCount(authorSlug: string): number {
  return songsData.filter((song) => song.author.slug === authorSlug).length;
}

/**
 * Compute dynamic song count for a category based on actual songs in songsData
 */
export function getCategorySongCount(categorySlug: string): number {
  return songsData.filter((song) => 
    song.categories.some((cat) => cat.slug === categorySlug)
  ).length;
}

/**
 * Get author with computed dynamic song count
 */
export function getAuthorsWithSongCount() {
  return authorsData.map((author) => ({
    ...author,
    song_count: getAuthorSongCount(author.slug),
  }));
}

/**
 * Get category with computed dynamic song count
 */
export function getCategoriesWithSongCount() {
  return categoriesData.map((category) => ({
    ...category,
    song_count: getCategorySongCount(category.slug),
  }));
}