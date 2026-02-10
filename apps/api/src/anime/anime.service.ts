import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AnimeRepository } from './repositories/anime.repository';
import { CreateAnimeInput } from './dto/create-anime.input';
import { SeasonService } from '../season/season.service';
import { StudioService } from '../studio/studio.service';
import { Anime } from 'src/models/anime.model';
import { UpdateAnimeInput } from './dto/update-anime-input';

@Injectable()
export class AnimeService {
  constructor(
    private readonly repository: AnimeRepository,
    private readonly seasonService: SeasonService,
    private readonly studioService: StudioService,
  ) {}

  findAll(): Anime[] {
    return this.repository.findAll();
  }

  create(input: CreateAnimeInput): Anime {
    const season = this.seasonService.findById(input.seasonId);
    const studio = this.studioService.findById(input.studioId);

    const anime: Anime = {
      id: randomUUID(),
      title: input.title,
      synopsis: input.synopsis,
      episodes: input.episodes,
      status: input.status,
      season,
      studio,
    };

    return this.repository.create(anime);
  }

  update(input: UpdateAnimeInput): Anime {
    const anime = this.repository.findById(input.id);

    if (!anime) {
      throw new NotFoundException('Anime não encontrado');
    }

    if (input.seasonId) {
      anime.season = this.seasonService.findById(input.seasonId);
    }

    if (input.studioId) {
      anime.studio = this.studioService.findById(input.studioId);
    }

    Object.assign(anime, {
      title: input.title ?? anime.title,
      synopsis: input.synopsis ?? anime.synopsis,
      episodes: input.episodes ?? anime.episodes,
      status: input.status ?? anime.status,
    });

    return this.repository.update(anime);
  }

  delete(id: string): boolean {
    const anime = this.repository.findById(id);

    if (!anime) {
      throw new NotFoundException('Anime não encontrado');
    }

    this.repository.delete(id);
    return true;
  }
}
