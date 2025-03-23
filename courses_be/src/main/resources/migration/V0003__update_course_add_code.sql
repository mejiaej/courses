ALTER TABLE courses.course
ADD COLUMN code VARCHAR(5);

UPDATE courses.course SET code = 'MTH' where id = 1;
UPDATE courses.course SET code = 'PH' where id = 2;
UPDATE courses.course SET code = 'CH' where id = 3;
UPDATE courses.course SET code = 'HS' where id = 4;
UPDATE courses.course SET code = 'LT' where id = 5;
UPDATE courses.course SET code = 'PRG' where id = 6;
UPDATE courses.course SET code = 'DB' where id = 7;
UPDATE courses.course SET code = 'NTW' where id = 8;
UPDATE courses.course SET code = 'AI' where id = 9;
UPDATE courses.course SET code = 'GD' where id = 10;

ALTER TABLE courses.course
MODIFY COLUMN code VARCHAR(5) NOT NULL;

