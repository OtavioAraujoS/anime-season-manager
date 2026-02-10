import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Studio {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;
}
