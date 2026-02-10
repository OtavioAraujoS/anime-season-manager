import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Anime } from '../models/anime.model';
import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime-input';
import { SeasonService } from 'src/season/season.service';
import { StudioService } from 'src/studio/studio.service';

@Injectable()
export class AnimeService {
  private animes: Anime[] = [];

  constructor(
    private readonly seasonService: SeasonService,
    private readonly studioService: StudioService,
  ) {}

  findAll(): Anime[] {
    return this.animes;
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

    this.animes.push(anime);
    return anime;
  }

  update(input: UpdateAnimeInput): Anime {
    const anime = this.animes.find((a) => a.id === input.id);

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

    return anime;
  }
}
