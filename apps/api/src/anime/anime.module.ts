import { Module } from '@nestjs/common';
import { AnimeResolver } from './anime.resolver';

@Module({
  providers: [AnimeResolver],
})
export class AnimeModule {}
