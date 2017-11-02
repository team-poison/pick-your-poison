DROP DATABASE IF EXISTS pyp_db;
CREATE DATABASE pyp_db;
USE pyp_db;
CREATE TABLE restaurants(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  restaurant VARCHAR(100),
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
  INSERT INTO restaurants ( 
  restaurant,
  Blantons,
  Four_Roses, 
  Pappy_Van_Winkle_15y, 
  Black_Maple_Hill_16yr, 
  Yamazaki_18yr,
  Johnny_Walker_Blue, 
  Handcocks_Presidential_Reserve, 
  Balvenie_50yr,
  Michters_20yr, 
  Elija_Craig_18yr, 
  Red_Breast_15yr
  )
  VALUES
    ("Hoo Ha's Happy House", 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1),
    ("Whadya Want", 0, 1, 1, 0, 0, 1, 1, 1, 0, 0,1),
    ("Washington Place", 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0),
    ("Capitol City", 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1),
    ("Kill Joy", 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0),
    ("Hippie Haven", 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1),
    ("Dynomite Frank's", 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0),
    ("Punk or Sunk", 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0),
    ("Mittens of Disapproval", 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1),
    ("2 O Clock", 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0);