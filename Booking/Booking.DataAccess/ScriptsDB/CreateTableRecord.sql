CREATE TABLE IF NOT EXISTS Record (
    Id SERIAL PRIMARY KEY,
    Date TIMESTAMP NOT NULL,
    Status INT NOT NULL,
    Deleted BOOLEAN NOT NULL,
    CreatedDate TIMESTAMP NOT NULL,
    LastModifiedDate TIMESTAMP NOT NULL
);
