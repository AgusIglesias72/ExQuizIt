/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the `_CategoriesToQuiz` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoriesToQuiz" DROP CONSTRAINT "_CategoriesToQuiz_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriesToQuiz" DROP CONSTRAINT "_CategoriesToQuiz_B_fkey";

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "categoryId",
ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'All';

-- DropTable
DROP TABLE "_CategoriesToQuiz";
