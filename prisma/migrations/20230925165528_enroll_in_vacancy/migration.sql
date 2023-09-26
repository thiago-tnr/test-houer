/*
  Warnings:

  - You are about to drop the `Vacancies` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[User] DROP CONSTRAINT [User_id_key];

-- AlterTable
ALTER TABLE [dbo].[User] ADD CONSTRAINT User_pkey PRIMARY KEY CLUSTERED ([id]);

-- DropTable
DROP TABLE [dbo].[Vacancies];

-- CreateTable
CREATE TABLE [dbo].[Vacancy] (
    [id] NVARCHAR(1000) NOT NULL,
    [title] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(255) NOT NULL,
    [requirements] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [is_active] BIT NOT NULL,
    [created_at] DATETIME2 NOT NULL,
    CONSTRAINT [Vacancy_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[_UserToVacancy] (
    [A] NVARCHAR(1000) NOT NULL,
    [B] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [_UserToVacancy_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_UserToVacancy_B_index] ON [dbo].[_UserToVacancy]([B]);

-- AddForeignKey
ALTER TABLE [dbo].[_UserToVacancy] ADD CONSTRAINT [_UserToVacancy_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_UserToVacancy] ADD CONSTRAINT [_UserToVacancy_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[Vacancy]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
