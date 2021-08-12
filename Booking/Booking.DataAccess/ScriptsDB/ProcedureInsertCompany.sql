CREATE OR REPLACE FUNCTION InsertCompany(
    Name VARCHAR(60), 
    Description VARCHAR(200),
    DaysOnSite INT, 
    Owner VARCHAR(64), 
    Status INT, 
    FoundationDate TIMESTAMP, 
    Deleted boolean, 
    LastModifiedDate TIMESTAMP)
RETURNS INT

language plpgsql VOLATILE

AS $$
    DECLARE CompanyId INT;
BEGIN
    INSERT INTO Company(Name, Description, DaysOnSite, Owner, Status, FoundationDate, Deleted, LastModifiedDate) VALUES
    (Name, Description, DaysOnSite, Owner, Status, FoundationDate, Deleted, LastModifiedDate)
    RETURNING Id INTO CompanyId;

    RETURN CompanyId;
END $$;