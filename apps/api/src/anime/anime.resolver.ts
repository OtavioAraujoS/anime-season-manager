import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Anime } from '../models/anime.model';
import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime-input';
import { AnimeService } from './anime.service';

@Resolver(() => Anime)
export class AnimeResolver {
  constructor(private readonly animeService: AnimeService) {}

  @Query(() => [Anime])
  animes(): Anime[] {
    return this.animeService.findAll();
  }

  @Mutation(() => Anime)
  createAnime(@Args('input') input: CreateAnimeInput) {
    return this.animeService.create(input);
  }

  @Mutation(() => Anime)
  updateAnime(@Args('input') input: UpdateAnimeInput) {
    return this.animeService.update(input);
  }

  @Mutation(() => Boolean)
  deleteAnime(@Args('id', { type: () => ID }) id: string) {
    return this.animeService.delete(id);
  }
}
