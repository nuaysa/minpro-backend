/*
  Warnings:

  - You are about to drop the column `paymentProof` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `expiresAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "paymentProof",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
