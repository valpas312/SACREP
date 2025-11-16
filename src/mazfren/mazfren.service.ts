import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MazfrenService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.mazfren.findMany({
      include: {
        equivalencias: { include: { frasle: true } },
      },
    });
  }

  findOne(codigo: string) {
    return this.prisma.mazfren.findUnique({
      where: { codigo },
      include: {
        equivalencias: { include: { frasle: true } },
      },
    });
  }
}
