DROP DATABASE IF EXISTS pyp_db;
CREATE DATABASE pyp_db;
USE pyp_db;
CREATE TABLE restaurants(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  restaurant VARCHAR(100),
  Blantons BOOLEAN Default 0,
  Pappy BOOLEAN Default 0,
  Four_Roses BOOLEAN Default 0,
  PRIMARY KEY (id)
);