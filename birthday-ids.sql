USE people;

SELECT * FROM basic_info 
WHERE birthday > '2016' -- Date must be a string with the greater or lower than operator
AND id BETWEEN 6 AND 10 
ORDER BY email ASC;