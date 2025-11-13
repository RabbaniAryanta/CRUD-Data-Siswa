/*
  Warnings:

  - You are about to drop the column `discount` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `pay_at` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `subtotal` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `transaction` table. All the data in the column will be lost.
  - Added the required column `purchase_price` to the `DetailTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `DetailTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderName` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_At` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detailtransaction` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `purchase_price` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `discount`,
    DROP COLUMN `pay_at`,
    DROP COLUMN `status`,
    DROP COLUMN `subtotal`,
    DROP COLUMN `tax`,
    ADD COLUMN `orderName` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_At` DATETIME(3) NOT NULL;
