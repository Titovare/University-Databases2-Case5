/*
   Monday, October 12, 20206:32:40 PM
   User: 
   Server: LAPTOP-DPQTPDSC
   Database: Caso5BD2
   Application: 
*/

/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO


DROP TABLE IF EXISTS dbo.ArticlesHashtags
CREATE TABLE dbo.ArticlesHashtags
	(
	Id int NOT NULL IDENTITY (1, 1),
	IdHashtag int NOT NULL,
	IdArticle int NOT NULL
	)  ON [PRIMARY]
GO

DROP TABLE IF EXISTS dbo.Hashtags
CREATE TABLE dbo.Hashtags
	(
	Id int NOT NULL IDENTITY (1, 1),
	Hashtag nvarchar(100) NOT NULL
	)  ON [PRIMARY]
GO

DROP TABLE IF EXISTS dbo.ArticlesComponents
CREATE TABLE dbo.ArticlesComponents
	(
	Id int NOT NULL IDENTITY (1, 1),
	Content text NOT NULL,
	PreviousComponentId int NULL,
	IdArticle int NOT NULL,
	ComponentTypeId int NOT NULL,
	LastUpdate datetime NOT NULL,
	Enabled bit NOT NULL
	)  ON [PRIMARY]
GO

DROP TABLE IF EXISTS dbo.ComponentTypes
CREATE TABLE dbo.ComponentTypes
	(
	Id int NOT NULL IDENTITY (1, 1),
	TypeName nvarchar(100) NOT NULL
	)  ON [PRIMARY]
GO

DROP TABLE IF EXISTS dbo.Articles
CREATE TABLE dbo.Articles
	(
	Id int NOT NULL IDENTITY (1, 1),
	Name varchar(200) NOT NULL,
	Author varchar(100) NOT NULL,
	PostTime datetime NOT NULL,
	LastUpdate datetime NOT NULL,
	Enabled bit NOT NULL
	)  ON [PRIMARY]
GO

ALTER TABLE dbo.ComponentTypes ADD CONSTRAINT
	PK_ComponentTypes PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.ComponentTypes SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
BEGIN TRANSACTION
GO

ALTER TABLE dbo.Articles ADD CONSTRAINT
	PK_Articles PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.Articles SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
BEGIN TRANSACTION
GO


ALTER TABLE dbo.ArticlesComponents ADD CONSTRAINT
	PK_ArticlesComponents PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.ArticlesComponents ADD CONSTRAINT
	FK_ArticlesComponents_Articles FOREIGN KEY
	(
	IdArticle
	) REFERENCES dbo.Articles
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.ArticlesComponents ADD CONSTRAINT
	FK_ArticlesComponents_ComponentTypes FOREIGN KEY
	(
	ComponentTypeId
	) REFERENCES dbo.ComponentTypes
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.ArticlesComponents ADD CONSTRAINT
	FK_ArticlesComponents_ArticlesComponents FOREIGN KEY
	(
	PreviousComponentId
	) REFERENCES dbo.ArticlesComponents
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.ArticlesComponents SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
BEGIN TRANSACTION
GO

ALTER TABLE dbo.Hashtags ADD CONSTRAINT
	PK_Hashtags PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.Hashtags SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
BEGIN TRANSACTION
GO

ALTER TABLE dbo.ArticlesHashtags ADD CONSTRAINT
	PK_ArticlesHashtags PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.ArticlesHashtags ADD CONSTRAINT
	FK_ArticlesHashtags_Hashtags FOREIGN KEY
	(
	IdHashtag
	) REFERENCES dbo.Hashtags
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.ArticlesHashtags ADD CONSTRAINT
	FK_ArticlesHashtags_Articles FOREIGN KEY
	(
	IdArticle
	) REFERENCES dbo.Articles
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.ArticlesHashtags SET (LOCK_ESCALATION = TABLE)
GO
COMMIT

