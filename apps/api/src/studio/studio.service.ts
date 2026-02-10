import { Injectable, NotFoundException } from '@nestjs/common';
import { Studio } from 'src/models/studio.model';

@Injectable()
export class StudioService {
  private studios: Studio[] = [
    { id: 'MAPPA', name: 'MAPPA' },
    { id: 'UFOTABLE', name: 'Ufotable' },
    { id: 'MADHOUSE', name: 'Madhouse' },
  ];

  findById(id: string): Studio {
    const studio = this.studios.find((s) => s.id === id);

    if (!studio) {
      throw new NotFoundException(`Studio ${id} não encontrado`);
    }

    return studio;
  }

  findAll(): Studio[] {
    return this.studios;
  }
}
