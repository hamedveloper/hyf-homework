-- Homework week 3 database
-- ------------------------------------------
-- Get all review
-- ------------------------------------------

SELECT * FROM Mealsharing.Review;
        
-- Add a new review
-- -------------------------------------------

INSERT INTO Review (idReview, title, description, meal_id, stars, created_date) VALUES (8, 'a new experince of Pitza', 'I was very interesting to eat a new style of Pitza. I think Tomas was very innovative and a good cook', 1, 4, '2021-03-29');

-- Get a review with any id, fx 1
-- ------------------------------
SELECT * 
FROM Review
WHERE idReview=2;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Review
SET stars=5
WHERE idReview=3;


-- Delete a reservation with any id, fx 1

DELETE FROM Review
WHERE idReview=5;