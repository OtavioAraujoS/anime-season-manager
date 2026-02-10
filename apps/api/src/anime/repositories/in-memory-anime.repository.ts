import { Anime } from 'src/models/anime.model';
import { AnimeRepository } from './anime.repository';

export class InMemoryAnimeRepository implements AnimeRepository {
  private animes: Anime[] = [];

  findAll(): Anime[] {
    return this.animes;
  }

  findById(id: string): Anime | null {
    return this.animes.find((a) => a.id === id) ?? null;
  }

  create(anime: Anime): Anime {
    this.animes.push(anime);
    return anime;
  }

  update(anime: Anime): Anime {
    const index = this.animes.findIndex((a) => a.id === anime.id);
    this.animes[index] = anime;
    return anime;
  }

  delete(id: string): void {
    this.animes = this.animes.filter((a) => a.id !== id);
  }
}
