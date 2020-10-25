-- Homework week 3 database
-- ------------------------------------------
-- Get all meals
-- ------------------------------------------

SELECT * FROM Meal;
        
-- Add a new meal
-- -------------------------------------------

INSERT INTO Meal (idMeal, title, description, time_to_serve, max_reservation, price, created_date) VALUES (6, 'Fesenjoon', 'A traditional Iranian food with chicken and nuts', '2021-03-23 14:00:00', 25, 98.00, '2020-10-14');

-- Get a meal with any id, fx 1
-- ------------------------------
SELECT * 
FROM Meal
WHERE idMeal=1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Meal
SET title='A delicious Pitza'
WHERE idMeal=1;


-- Delete a meal with any id, fx 1

DELETE FROM Meal
WHERE idMeal=3;
