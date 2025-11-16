import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async listarProductos(filters: {
    fabricante?: string;
    categoria?: string;
    codigo?: string;
    marca?: 'mazfren' | 'frasle';
  }) {
    const { fabricante, categoria, codigo, marca } = filters;

    const where = {
      fabricante: fabricante
        ? { contains: fabricante, mode: 'insensitive' as const }
        : undefined,

      categoria: categoria
        ? { contains: categoria, mode: 'insensitive' as const }
        : undefined,

      codigo: codigo
        ? { contains: codigo, mode: 'insensitive' as const }
        : undefined,
    };

    // 🔵 FILTRO SOLO MAZFREN
    if (marca === 'mazfren') {
      const mazfren = await this.prisma.mazfren.findMany({
        where,
        include: {
          equivalencias: { include: { frasle: true } },
        },
      });

      return { mazfren };
    }

    // 🔵 FILTRO SOLO FRASLE
    if (marca === 'frasle') {
      const frasle = await this.prisma.frasle.findMany({
        where,
        include: {
          equivalencias: { include: { mazfren: true } },
        },
      });

      return { frasle };
    }

    // 🔵 SIN FILTRO DE MARCA → devolver ambos
    const mazfren = await this.prisma.mazfren.findMany({
      where,
      include: {
        equivalencias: { include: { frasle: true } },
      },
    });

    const frasle = await this.prisma.frasle.findMany({
      where,
      include: {
        equivalencias: { include: { mazfren: true } },
      },
    });

    return { mazfren, frasle };
  }
}
