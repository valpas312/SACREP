-- CreateTable
CREATE TABLE "Mazfren" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "imagen" TEXT,
    "categoria" TEXT,
    "fabricante" TEXT,

    CONSTRAINT "Mazfren_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frasle" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "imagen" TEXT,
    "categoria" TEXT,
    "fabricante" TEXT,

    CONSTRAINT "Frasle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equivalencia" (
    "id" SERIAL NOT NULL,
    "mazfrenCodigo" TEXT,
    "frasleCodigo" TEXT,

    CONSTRAINT "Equivalencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mazfren_codigo_key" ON "Mazfren"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Frasle_codigo_key" ON "Frasle"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Equivalencia_mazfrenCodigo_key" ON "Equivalencia"("mazfrenCodigo");

-- CreateIndex
CREATE UNIQUE INDEX "Equivalencia_frasleCodigo_key" ON "Equivalencia"("frasleCodigo");

-- AddForeignKey
ALTER TABLE "Equivalencia" ADD CONSTRAINT "Equivalencia_mazfrenCodigo_fkey" FOREIGN KEY ("mazfrenCodigo") REFERENCES "Mazfren"("codigo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equivalencia" ADD CONSTRAINT "Equivalencia_frasleCodigo_fkey" FOREIGN KEY ("frasleCodigo") REFERENCES "Frasle"("codigo") ON DELETE SET NULL ON UPDATE CASCADE;
