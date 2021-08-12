CREATE OR REPLACE FUNCTION UpdateCompany(
    _id INT,
    _name VARCHAR(60), 
    _description VARCHAR(200),
    _daysOnSite INT, 
    _owner VARCHAR(64), 
    _status INT, 
    _foundationDate TIMESTAMP, 
    _deleted boolean, 
    _lastModifiedDate TIMESTAMP)
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
    UPDATE Company
        SET Name = _name,
            Description = _description, 
            DaysOnSite = _daysOnSite,
            Owner = _owner,
            Status = _status,
            FoundationDate = _foundationDate,
            Deleted = _deleted,
            LastModifiedDate = _lastModifiedDate
        WHERE Company.Id = _id;
    RETURN QUERY 
    SELECT * FROM Company
    WHERE Company.Id = _id;
END $$;
