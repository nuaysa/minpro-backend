/*
  Warnings:

  - You are about to drop the column `mapURL` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "mapURL",
ADD COLUMN     "maps" TEXT NOT NULL DEFAULT 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d107.6190003147697!3d-6.917464994994422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2b0f1b0f1e7%3A0x7b3b1b3b1b3b1b3!2sGedung%20Sate!5e0!3m2!1sid!2sid!4v1626820000000!5m2!1sid!2sid';

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "endDate" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "referralVoucher" ADD COLUMN     "isValid" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "userPoints" ADD COLUMN     "isValid" BOOLEAN NOT NULL DEFAULT true;
