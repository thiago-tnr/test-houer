BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Vacancies] (
    [id] NVARCHAR(1000) NOT NULL,
    [title] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(255) NOT NULL,
    [requirements] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [is_active] BIT NOT NULL,
    [created_at] DATETIME2 NOT NULL,
    CONSTRAINT [Vacancies_id_key] UNIQUE NONCLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [phone] NVARCHAR(255) NOT NULL,
    [email] NVARCHAR(255) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [document] NVARCHAR(255) NOT NULL,
    [is_admin] BIT NOT NULL,
    [created_at] DATETIME2 NOT NULL,
    [updated_at] DATETIME2,
    CONSTRAINT [User_id_key] UNIQUE NONCLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [User_document_key] UNIQUE NONCLUSTERED ([document])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
