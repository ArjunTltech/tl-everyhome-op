BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[NewsletterSubscription] (
    [id] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [NewsletterSubscription_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [NewsletterSubscription_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [NewsletterSubscription_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [NewsletterSubscription_email_idx] ON [dbo].[NewsletterSubscription]([email]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
