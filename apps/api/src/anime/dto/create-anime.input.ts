import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { AnimeStatus } from '../../models/anime.model';

@InputType()
export class CreateAnimeInput {
  @Field()
  title!: string;

  @Field({ nullable: true })
  synopsis?: string;

  @Field(() => Int)
  episodes!: number;

  @Field(() => AnimeStatus)
  status!: AnimeStatus;

  @Field(() => ID)
  seasonId!: string;

  @Field(() => ID)
  studioId!: string;
}
