CREATE OR REPLACE FUNCTION InsertRecord(
date TIMESTAMP, 
status INT, 
deleted BOOLEAN, 
createdDate TIMESTAMP, 
lastModifiedDate TIMESTAMP)
    RETURNS INT 
language plpgsql 
AS $$
    DECLARE RecordId INT;
BEGIN
    INSERT INTO Record(Date, Status, Deleted, CreatedDate, LastModifiedDate) 
    VALUES (date, status, deleted, createdDate, lastModifiedDate)
    RETURNING Id into RecordId;

    RETURN RecordId;
END $$;
