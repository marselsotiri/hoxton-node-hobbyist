/*
  Warnings:

  - You are about to alter the column `active` on the `Hobby` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Hobby" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL
);
INSERT INTO "new_Hobby" ("active", "id", "image", "name") SELECT "active", "id", "image", "name" FROM "Hobby";
DROP TABLE "Hobby";
ALTER TABLE "new_Hobby" RENAME TO "Hobby";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
