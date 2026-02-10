import { ObjectType, Field, ID, Int, registerEnumType } from '@nestjs/graphql';
import { Studio } from './studio.model';
import { Season } from './season.model';

export enum AnimeStatus {
  ONGOING = 'ONGOING',
  FINISHED = 'FINISHED',
}

registerEnumType(AnimeStatus, {
  name: 'AnimeStatus',
});

@ObjectType()
export class Anime {
  @Field(() => ID)
  id!: string;

  @Field()
  title!: string;

  @Field({ nullable: true })
  synopsis?: string;

  @Field(() => Int)
  episodes!: number;

  @Field(() => AnimeStatus)
  status!: AnimeStatus;

  @Field(() => Season)
  season!: Season;

  @Field(() => Studio)
  studio!: Studio;
}
