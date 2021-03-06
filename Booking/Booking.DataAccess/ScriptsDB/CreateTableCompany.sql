CREATE TABLE IF NOT EXISTS Company (
Id SERIAL PRIMARY KEY,
Name VARCHAR(64) UNIQUE NOT NULL,
Description VARCHAR(200) NOT NULL,
DaysOnSite INT NOT NULL,
Owner VARCHAR(64) NOT NULL,
Status INT NOT NULL,
FoundationDate TIMESTAMP NOT NULL,
Deleted boolean NOT NULL,
LastModifiedDate TIMESTAMP NOT NULL);
