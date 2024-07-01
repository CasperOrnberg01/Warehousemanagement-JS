CREATE TABLE Tuotteet (tuote VARCHAR(255) PRIMARY KEY, valmistaja TEXT, id TEXT, vastuuhenkilö TEXT, hanke TEXT, tilauspäivä DATE, viimeinen_säilytyspv DATE, käytössä TEXT, takuu TEXT);

INSERT INTO Tuotteet (tuote, valmistaja, id, vastuuhenkilö, hanke, tilauspäivä, viimeinen_säilytyspv, käytössä, takuu)
VALUES
('laptop', 'del', '001', 'henry', 'test', '2025-07-01', '2027-07-01', 'yes', '2 years');
