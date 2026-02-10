import { Anime } from 'src/models/anime.model';

export abstract class AnimeRepository {
  abstract findAll(): Anime[];
  abstract findById(id: string): Anime | null;
  abstract create(anime: Anime): Anime;
  abstract update(anime: Anime): Anime;
  abstract delete(id: string): void;
}
