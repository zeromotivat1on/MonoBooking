CREATE OR REPLACE FUNCTION InsertCategory(title VARCHAR(60), description TEXT, createdAt TIMESTAMP, isDeleted BOOLEAN)
    RETURNS INT
language plpgsql VOLATILE
AS $$
    DECLARE CategoryId INT;
BEGIN
    INSERT INTO Category(Title, Description, CreatedAt, IsDeleted) VALUES
    (title, description, createdAt, isDeleted)
    RETURNING Id INTO CategoryId;

    return CategoryId;
END $$;
