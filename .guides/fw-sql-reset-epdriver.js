var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'EPDriver' database",
    "DROP DATABASE IF EXISTS EPDriver"
  ],
  [
    "'EPDriver' database",
    "CREATE DATABASE IF NOT EXISTS EPDriver"
  ],
  [
    "'EPDriver' database",
    "CREATE TABLE EPDriver.users (id INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL,registered_card TINYINT(1) NOT NULL) auto_increment = 1"
  ],
  [
    "'EPDriver' database",
    "CREATE TABLE EPDriver.drivers (id INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL,	certified TINYINT(1) NOT NULL) auto_increment = 1"
  ],
  [
    "'EPDriver' database",
    "CREATE TABLE EPDriver.trips (id INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,trip_datetime_start DATETIME NOT NULL,trip_datetime_end DATETIME,trip_total_fare FLOAT(8,2) DEFAULT 00.00) auto_increment = 1"
  ],
  [
    "'EPDriver' database",
    'INSERT INTO EPDriver.trips (trip_datetime_start,trip_datetime_end,trip_total_fare) VALUES ("2015-09-15 03:20:59","2015-09-15 03:54:08","79.40"),("2015-09-15 20:44:17","2015-09-15 21:18:58","91.79"),("2015-09-15 04:01:04","2015-09-15 04:20:18","17.67"),("2015-09-15 22:56:33",DEFAULT,DEFAULT),("2015-09-15 21:12:33","2015-09-15 22:00:00","92.33"),("2015-09-15 07:14:59","2015-09-15 08:24:19","85.38"),("2015-09-15 15:48:41",DEFAULT,DEFAULT),("2015-09-15 09:40:55","2015-09-15 10:05:32","43.73"),("2015-09-15 10:00:08",DEFAULT,DEFAULT),("2015-09-15 14:57:24","2015-09-15 15:11:26","4.50")'
  ],
  [
    "'EPDriver' database",
    'INSERT INTO EPDriver.users (name,registered_card) VALUES ("Brielle Beard", 1),("Byron Manning", 0),("Halla Higgins", 0),("Garrison Hunter", 1),("Jasmine Aguirre", 0),("Ray Blair", 1),("Eden Peck", 0),("Teagan Cole", 1),("Gemma Malone", 0),("Xandra Wolf", 1)'
  ]
];

sqltest.reset(tasks);