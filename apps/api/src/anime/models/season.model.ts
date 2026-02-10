import { ObjectType, Field, ID, Int, registerEnumType } from '@nestjs/graphql';

export enum SeasonPeriod {
  WINTER = 'WINTER',
  SPRING = 'SPRING',
  SUMMER = 'SUMMER',
  FALL = 'FALL',
}

registerEnumType(SeasonPeriod, {
  name: 'SeasonPeriod',
});

@ObjectType()
export class Season {
  @Field(() => ID)
  id!: string;

  @Field(() => Int)
  year!: number;

  @Field(() => SeasonPeriod)
  period!: SeasonPeriod;
}
