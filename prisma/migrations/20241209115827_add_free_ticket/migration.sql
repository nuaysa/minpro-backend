/*
  Warnings:

  - Added the required column `endDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "TicketCategory" ADD VALUE 'free';

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
