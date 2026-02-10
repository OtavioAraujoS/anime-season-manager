import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateAnimeInput } from './create-anime.input';

@InputType()
export class UpdateAnimeInput extends PartialType(CreateAnimeInput) {
  @Field(() => ID)
  id!: string;
}
