DROP DATABASE IF EXISTS pyp_db;
CREATE DATABASE pyp_db;
USE pyp_db;
CREATE TABLE restaurants(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  restaurant VARCHAR(100),
  blurb VARCHAR(200),
  Blantons BOOLEAN Default 0,
  Four_Roses BOOLEAN Default 0,
  Pappy_Van_Winkle_15y BOOLEAN Default 0,
  Black_Maple_Hill_16yr BOOLEAN Default 0,
  Yamazaki_18yr BOOLEAN Default 0,
  Johnny_Walker_Blue BOOLEAN Default 0,
  Handcocks_Presidential_Reserve BOOLEAN Default 0,
  Balvenie_50yr BOOLEAN Default 0,
  Michters_20yr BOOLEAN Default 0,
  Elija_Craig_18yr BOOLEAN Default 0,
  Red_Breast_15yr BOOLEAN Default 0, 
  PRIMARY KEY (id)
);