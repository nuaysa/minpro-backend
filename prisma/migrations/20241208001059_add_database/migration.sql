-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('entertaiment', 'seminar', 'business', 'food');

-- CreateEnum
CREATE TYPE "Location" AS ENUM ('Bandung', 'Jakarta', 'Bogor', 'Depok', 'Tanggerang', 'Bekasi');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('Paid', 'Free');

-- CreateEnum
CREATE TYPE "TicketCategory" AS ENUM ('Cat1', 'Cat2', 'VIP', 'festivalPass');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('pending', 'Paid', 'canceled');

-- CreateTable
CREATE TABLE "Promotor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "isVerify" BOOLEAN NOT NULL,

    CONSTRAINT "Promotor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "EventCategory" NOT NULL,
    "location" "Location" NOT NULL,
    "venue" TEXT NOT NULL,
    "mapURL" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "type" "EventType" NOT NULL,
    "promotorId" INTEGER,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "category" "TicketCategory" NOT NULL,
    "quota" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "basePrice" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "finalPrice" INTEGER NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'pending',
    "userId" TEXT NOT NULL,
    "userVoucher" INTEGER,
    "userPoints" INTEGER,
    "discount" INTEGER,
    "ticketId" INTEGER NOT NULL,
    "paymentProof" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "promoQuota" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailTransaction" (
    "id" SERIAL NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "reviewStatus" BOOLEAN NOT NULL,

    CONSTRAINT "DetailTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "desc" TEXT,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "userId" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "transactionId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg',
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "refCode" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referralVoucher" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "referralVoucher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userPoints" (
    "id" SERIAL NOT NULL,
    "points" INTEGER DEFAULT 10000,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "userPoints_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Promotor_name_key" ON "Promotor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Promotor_email_key" ON "Promotor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "referralVoucher_userId_key" ON "referralVoucher"("userId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_promotorId_fkey" FOREIGN KEY ("promotorId") REFERENCES "Promotor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userPoints_fkey" FOREIGN KEY ("userPoints") REFERENCES "userPoints"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userVoucher_fkey" FOREIGN KEY ("userVoucher") REFERENCES "referralVoucher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailTransaction" ADD CONSTRAINT "DetailTransaction_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailTransaction" ADD CONSTRAINT "DetailTransaction_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailTransaction" ADD CONSTRAINT "DetailTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "DetailTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referralVoucher" ADD CONSTRAINT "referralVoucher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userPoints" ADD CONSTRAINT "userPoints_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
