import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EquivalenciasService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.equivalencias.findMany({
      include: {
        mazfren: true,
        frasle: true,
      },
    });
  }
}
