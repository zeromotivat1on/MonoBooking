CREATE OR REPLACE FUNCTION DeleteCompany(companyId INT)
RETURNS BOOLEAN

language plpgsql VOLATILE

AS $$
BEGIN
    DELETE FROM Company WHERE id = companyId;
    RETURN FOUND;
END $$;
