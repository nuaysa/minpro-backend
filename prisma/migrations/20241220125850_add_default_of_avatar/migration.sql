/*
  Warnings:

  - Added the required column `endDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promotorId` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Promotor" ALTER COLUMN "avatar" SET DEFAULT 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg',
ALTER COLUMN "isVerify" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "ticketId" INTEGER;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "discount" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "endDate" DATE NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "promotorId" INTEGER NOT NULL,
ADD COLUMN     "startDate" DATE NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_promotorId_fkey" FOREIGN KEY ("promotorId") REFERENCES "Promotor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
