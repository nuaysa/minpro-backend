/*
  Warnings:

  - Changed the type of `rating` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Ratings" AS ENUM ('bad', 'notBad', 'good', 'fantastic');

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "rating",
ADD COLUMN     "rating" "Ratings" NOT NULL;
