import { Resolver, Query } from '@nestjs/graphql';
import { Anime } from './models/anime.model';

@Resolver(() => Anime)
export class AnimeResolver {
  @Query(() => [Anime])
  animes(): Anime[] {
    return [];
  }
}
