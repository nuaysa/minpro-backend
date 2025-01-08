/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `userPoints` will be added. If there are existing duplicate values, this will fail.
  - Made the column `points` on table `userPoints` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "userPoints" ALTER COLUMN "points" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "userPoints_userId_key" ON "userPoints"("userId");
