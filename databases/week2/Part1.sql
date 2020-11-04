/*Part1:Working with tasks*/

DROP DATABASE IF EXISTS hw2part1;
CREATE DATABASE hw2part1;
USE hw2part1;

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created` varchar(255) NOT NULL,
  `updated` varchar(255) NULL,
  `due_date` varchar(255) NULL,
  `status_id` varchar(255) NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO hw2part1.task (title, description, created, updated, due_date, status_id, user_id) VALUES ('homework', 'doing my HYF homework', '12-10-2020', '15-10-2020', '20-10-2020', '3', '2');
INSERT INTO hw2part1.task (title, description, created, updated, due_date, status_id, user_id) VALUES ('Reading', 'Reading JAVA Book', '01-10-2020', '04-10-2020', '10-11-2020', '2', '3');
INSERT INTO hw2part1.task (title, description, created, updated, due_date, status_id, user_id) VALUES ('sport', 'fitness training', '12-10-2020', '15-10-2020', '13-12-2020', '3', '4');
INSERT INTO hw2part1.task (title, description, created, updated, due_date, status_id, user_id) VALUES ('education', 'doing project of university', '12-10-2020', '15-10-2020', '14-01-2021', '3', '5');
INSERT INTO hw2part1.task (title, description, created, updated, due_date, status_id, user_id) VALUES ('food', 'making lunch for party', '10-10-2020', '15-11-2020', '15-11-2020', '2', '6');

/*Change the title of a task*/

UPDATE task
SET title = 'new homework'
WHERE user_id=2; 

/*Change a task due date*/

UPDATE task
SET due_date=18-10-2020
WHERE user_id=2;

/*Change a task status*/

UPDATE task
SET status_id=3
WHERE user_id=2;

/*Mark a task as complete*/
 
UPDATE task
SET status_id='Done'
WHERE status_id=3;

/*Delete a task*/

DELETE FROM task WHERE user_id=3;





