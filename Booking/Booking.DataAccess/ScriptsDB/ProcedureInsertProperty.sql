CREATE OR REPLACE FUNCTION InsertProperty(name VARCHAR(60), valueType INT, value VARCHAR(2048), status INT, isDeleted BOOLEAN, creationDate TIMESTAMP, lastModifiedDate TIMESTAMP)
    RETURNS INT 
LANGUAGE plpgsql VOLATILE
AS $$
    DECLARE PropertyId INT;
BEGIN
    INSERT INTO Property(Name, ValueType, Value, Status, IsDeleted, CreationDate, LastModifiedDate) VALUES
    (name, valueType, value, status, isDeleted, creationDate, lastModifiedDate)
    RETURNING Id INTO PropertyId;

    RETURN PropertyId;
END $$;