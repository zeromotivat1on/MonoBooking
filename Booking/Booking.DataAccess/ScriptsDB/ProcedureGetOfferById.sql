
CREATE OR REPLACE FUNCTION GetOfferById(OfferId INT)
RETURNS TABLE (
    Id INT,
    Description TEXT,
    Status INT,
    Title VARCHAR(60),
    SlotPrice DECIMAL(8,2),
    SlotTime TIME,
    Image TEXT,
    Mark DECIMAL(4,2)
) 
AS $$
BEGIN
    RETURN QUERY 
    SELECT * FROM Offer
    WHERE Offer.Id = OfferId;
END; $$ 
LANGUAGE 'plpgsql';

