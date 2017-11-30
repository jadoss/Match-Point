DROP DATABASE IF EXISTS tennis_courts;
CREATE database tennis_courts;

USE tennis_courts;

CREATE TABLE markers (
  id INT (50) AUTO_INCREMENT,
  PRIMARY KEY(id),
  title VARCHAR (60) NOT NULL,
  address VARCHAR (80) NOT NULL,
  lat FLOAT (10,6) NOT NULL,
  lng FLOAT (10,6) NOT NULL,
  court VARCHAR (50) NOT NULL
  ) ENGINE = MYISAM;