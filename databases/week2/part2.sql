/*Part2: School Database*/

DROP DATABASE IF EXISTS schooldata;
CREATE DATABASE schooldata;
USE schooldata;

DROP TABLE IF EXISTS `Class`;
CREATE TABLE `Class`(
`id` INT(10) NOT NULL,
`name` varchar(255) NOT NULL,
`begins_date` date NOT NULL,
`end_date` date NOT NULL,
PRIMARY KEY(id)
);

DROP TABLE IF EXISTS `Student`;
CREATE TABLE `Student`(
`id` INT(10) NOT NULL,
`name` varchar(255) NOT NULL,
`email` varchar(30) NOT NULL,
`phone` INT NOT NULL,
`class_id` INT(10) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(Class_id) REFERENCES Class(id)
);

INSERT INTO Class (id, name, begins_date, end_date) VALUES ('1', 'Java', '2021-03-01', '2021-07-01');
INSERT INTO Class (id, name, begins_date, end_date) VALUES ('2', 'React', '2021-01-01', '2021-05-01');
INSERT INTO Class (id, name, begins_date, end_date) VALUES ('3', 'NodeJS', '2020-09-01', '2020-12-01');

INSERT INTO Student (id, name, email, phone, class_id) VALUES ('1', 'hamed', 'ham@gmail.com', '34354623', '1');
INSERT INTO Student (id, name, email, phone, class_id) VALUES ('2', 'emil', 'e@gmail.com', '34354543', '2');
INSERT INTO Student (id, name, email, phone, class_id) VALUES ('3', 'ehsan', 'eh@gmail.com', '38754623', '3');
INSERT INTO Student (id, name, email, phone, class_id) VALUES ('4', 'maha', 'ma@gmail.com', '74354443', '3');
INSERT INTO Student (id, name, email, phone, class_id) VALUES ('5', 'ladan', 'ladan@gmail.com', '14354633', '3');
INSERT INTO Student (id, name, email, phone, class_id) VALUES ('6', 'nader', 'ndr@gmail.com', '94300623', '2');
INSERT INTO Student (id, name, email, phone, class_id) VALUES ('7', 'sara', 'sara@gmail.com', '94350623', '1');
INSERT INTO Student (id, name, email, phone, class_id) VALUES ('8', 'emil', 'm@gmail.com', '14354600', '3');
INSERT INTO Student (id, name, email, phone, class_id) VALUES ('9', 'maryam', 'mrym@gmail.com', '34324623', '2');
INSERT INTO Student (id, name, email, phone, class_id) VALUES ('10', 'ali', 'ali@gmail.com', '54654623', '1');

/*Create an index on the name column of the student table.*/

CREATE INDEX idx_name
ON Student (name);

/*Add a new column to the class table named status */

ALTER TABLE Class ADD status enum('non-started', 'ongoing', 'finished') NOT NULL; 
