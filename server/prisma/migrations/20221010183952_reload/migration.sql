-- Active: 1666494148829@@127.0.0.1@3306
/*
  Warnings:

  - You are about to drop the column `bannerUrl` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "tipo" TEXT NOT NULL
);
INSERT INTO "new_Cliente" ("id") SELECT "id" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
