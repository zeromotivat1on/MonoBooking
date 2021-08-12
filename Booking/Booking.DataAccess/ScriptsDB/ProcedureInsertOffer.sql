CREATE OR REPLACE FUNCTION InsertOffer(description text, status int, title VARCHAR(60), slotPrice DECIMAL(8,2), slotTime TIME, image TEXT, mark decimal(4,2))
    RETURNS INT 
LANGUAGE plpgsql VOLATILE
AS $$
    DECLARE OfferId INT;
BEGIN
    INSERT INTO Offer(Description, Status, Title, SlotPrice, SlotTime, Image, Mark) VALUES
    (description, status, title, slotPrice, slotTime, image, mark)
    RETURNING Id INTO OfferId;

    RETURN OfferId;
END $$;
