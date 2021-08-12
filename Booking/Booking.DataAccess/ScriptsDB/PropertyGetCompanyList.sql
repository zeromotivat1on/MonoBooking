CREATE OR REPLACE FUNCTION GetCompanyList()
RETURNS TABLE (
    Id INT,
    Name VARCHAR(60), 
    Description VARCHAR(200), 
    DaysOnSite INT, 
    Owner VARCHAR(64), 
    Status INT, 
    FoundationDate TIMESTAMP, 
    Deleted boolean, 
    LastModifiedDate TIMESTAMP
)

language plpgsql VOLATILE

AS $$
BEGIN
    RETURN QUERY 
    SELECT * FROM Company;
END $$;