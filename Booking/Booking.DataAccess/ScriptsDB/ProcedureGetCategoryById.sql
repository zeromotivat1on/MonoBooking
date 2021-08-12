CREATE OR REPLACE FUNCTION GetCategoryById(CategoryId INT)
RETURNS TABLE (
    Id INT,
    Title VARCHAR(60),
    Description TEXT,
    CreatedAt TIMESTAMP,
    IsDeleted BOOLEAN
) 
AS $$
BEGIN
    RETURN QUERY 
    SELECT * FROM Category
    WHERE Category.Id = CategoryId;
END; $$ 
LANGUAGE 'plpgsql';