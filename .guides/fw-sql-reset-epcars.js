var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'EPCars' database",
    "DROP DATABASE IF EXISTS EPCars"
  ],
  [
    "'EPCars' database",
    "CREATE DATABASE IF NOT EXISTS EPCars"
  ],
  [
    "'EPCars' database",
    "CREATE TABLE EPCars.cars (id INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,model VARCHAR(255) NOT NULL,car_year YEAR(4) NOT NULL) auto_increment = 1"
  ],
  [
    "'EPCars' database",
    'INSERT INTO EPCars.cars (model,car_year)VALUES ("Vauxhall Insignia", 2015),("Toyota Prius", 2015),("Honda Insight", 2015),("Skoda Octovia", 2015),("Volvo S 60", 2015)'
  ]
];

sqltest.reset(tasks);