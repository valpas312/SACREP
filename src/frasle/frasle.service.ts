import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FrasleService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.frasle.findMany({
      include: {
        equivalencias: { include: { mazfren: true } },
      },
    });
  }

  findOne(codigo: string) {
    return this.prisma.mazfren.findUnique({
      where: { codigo },
      include: {
        equivalencias: { include: { mazfren: true } },
      },
    });
  }
}
