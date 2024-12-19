/*
  Warnings:

  - You are about to drop the column `discount` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "discount",
DROP COLUMN "endDate",
DROP COLUMN "isActive",
DROP COLUMN "startDate";
