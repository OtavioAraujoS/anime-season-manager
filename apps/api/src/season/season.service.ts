import { Injectable, NotFoundException } from '@nestjs/common';
import { Season, SeasonPeriod } from 'src/models/season.model';

@Injectable()
export class SeasonService {
  private seasons: Season[] = [
    {
      id: '2024_WINTER',
      year: 2024,
      period: SeasonPeriod.WINTER,
    },
    {
      id: '2024_SPRING',
      year: 2024,
      period: SeasonPeriod.SPRING,
    },
    {
      id: '2024_SUMMER',
      year: 2024,
      period: SeasonPeriod.SUMMER,
    },
    {
      id: '2024_FALL',
      year: 2024,
      period: SeasonPeriod.FALL,
    },
  ];

  findById(id: string): Season {
    const season = this.seasons.find((s) => s.id === id);

    if (!season) {
      throw new NotFoundException(`Season ${id} não encontrada`);
    }

    return season;
  }

  findByYear(year: number): Season[] {
    return this.seasons.filter((s) => s.year === year);
  }
}
