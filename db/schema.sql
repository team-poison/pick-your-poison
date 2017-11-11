SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

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

CREATE TABLE IF NOT EXISTS users (
  id INTEGER(5) NOT NULL AUTO_INCREMENT,
  first_name text NOT NULL,
  last_name text NOT NULL,
  mob_no int(11) NOT NULL,
  user_name varchar(200) NOT NULL,
  pass_word varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;