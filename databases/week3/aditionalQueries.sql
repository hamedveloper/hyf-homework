-- ----------------------Additional queries
-- --------------------------------------------------------------------------------
-- ------------------------------------Get meals that has a price smaller than a specific price fx 90

SELECT *
FROM Meal
WHERE Mealsharing.Meal.price<90;

-- ------------------------------------Get meals that still has available reservations

Select SUM(Reservation.Number_of_guests) AS reserved_numbers, Meal.title, Meal.description, Meal.max_reservation
from Reservation
join Meal on Meal.idMeal=Reservation.meal_id
GROUP BY Reservation.meal_id
HAVING reserved_numbers<Meal.max_reservation;

-- ------------------------------------Get meals that partially match a title.

SELECT *
FROM Meal
WHERE title LIKE '%Burger%';

-- -----------------------------------Get meals that has been created between two dates

SELECT *
FROM Meal
WHERE created_date>='2020-01-01'
AND created_date<'2020-06-01';

-- -----------------------------------Get only specific number of meals fx return only 5 meals

SELECT *
FROM Meal
LIMIT 5;

-- ------------------------------------Get the meals that have good reviews

SELECT Meal.title, Meal.description, Review.stars
FROM Meal
JOIN Review ON Review.meal_id=Meal.idMeal
WHERE Review.stars>4;

-- -------------------------------------Get reservations for a specific meal sorted by created_date

SELECT *
FROM Reservation
JOIN Meal ON Reservation.meal_id=Meal.idMeal
WHERE Meal.title='Pitza'
ORDER By Reservation.created_date;

-- -------------------------------------Sort all meals by average number of stars in the reviews

SELECT Meal.title AS Meal, AVG(Review.stars) AS Popularity 
FROM Review
JOIN Meal ON Meal.idMeal = Review.meal_id
GROUP BY Meal.title
ORDER BY AVG(Review.stars);
