-- Homework week 3 database
-- ------------------------------------------
-- Get all reservation
-- ------------------------------------------

SELECT * FROM Mealsharing.Reservation;
        
-- Add a new reservation
-- -------------------------------------------

INSERT INTO Reservation (idReservation, Number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES (15, 1, 6, '2020-09-24', 50305600, 'Henric', 'hen_43@gmail.com');

-- Get a reservation with any id, fx 1
-- ------------------------------
SELECT * 
FROM Reservation
WHERE idReservation=2;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Reservation
SET Number_of_guests=7
WHERE idReservation=2;


-- Delete a reservation with any id, fx 1

DELETE FROM Reservation
WHERE idReservation=5;