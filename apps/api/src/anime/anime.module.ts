import { Module } from '@nestjs/common';
import { AnimeResolver } from './anime.resolver';
import { AnimeService } from './anime.service';
import { SeasonService } from 'src/season/season.service';
import { StudioService } from 'src/studio/studio.service';
import { AnimeRepository } from './repositories/anime.repository';
import { InMemoryAnimeRepository } from './repositories/in-memory-anime.repository';

@Module({
  providers: [
    AnimeResolver,
    AnimeService,
    SeasonService,
    StudioService,
    {
      provide: AnimeRepository,
      useClass: InMemoryAnimeRepository,
    },
  ],
})
export class AnimeModule {}
