-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "date" SET DATA TYPE DATE,
ALTER COLUMN "time" SET DATA TYPE TIME;

-- AlterTable
ALTER TABLE "Ticket" 
--ALTER COLUMN "endDate" SET DATA TYPE DATE,
ALTER COLUMN "startDate" SET DATA TYPE DATE;
