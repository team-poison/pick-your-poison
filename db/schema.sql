### Schema

CREATE DATABASE if not exists drinks_db;
USE drinks_db;

CREATE TABLE drinks
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	location varchar(255) NOT NULL,
	PRIMARY KEY (id)
);