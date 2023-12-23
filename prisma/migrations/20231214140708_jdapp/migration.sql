/*
  Warnings:

  - You are about to drop the column `userName` on the `Sender` table. All the data in the column will be lost.
  - Added the required column `surName` to the `Sender` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sender" DROP COLUMN "userName",
ADD COLUMN     "surName" TEXT NOT NULL;
