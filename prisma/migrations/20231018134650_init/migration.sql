-- CreateTable
CREATE TABLE "SoftwareModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "detail" TEXT NOT NULL,

    CONSTRAINT "SoftwareModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequirementModel" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "effor" INTEGER NOT NULL,
    "softwareId" INTEGER NOT NULL,

    CONSTRAINT "RequirementModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RequirementModel" ADD CONSTRAINT "RequirementModel_softwareId_fkey" FOREIGN KEY ("softwareId") REFERENCES "SoftwareModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
