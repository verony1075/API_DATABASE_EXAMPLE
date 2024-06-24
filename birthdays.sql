--- In your birthdays.sql file:

USE people;

SELECT * FROM basic_info 
WHERE birthday > '2016' 
ORDER BY birthday;