CREATE TABLE IF NOT EXISTS courses.student(
    id SERIAL PRIMARY KEY,
    last_name VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS courses.course(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS courses.student_course(
	id SERIAL PRIMARY KEY,
	student_id BIGINT UNSIGNED NOT NULL,
	course_id BIGINT UNSIGNED NOT NULL
);

ALTER TABLE courses.student_course
ADD CONSTRAINT FK_student_student_course_fk
FOREIGN KEY (student_id)
REFERENCES courses.student(id);

ALTER TABLE courses.student_course
ADD CONSTRAINT FK_course_student_course_fk
FOREIGN KEY (course_id)
REFERENCES courses.course(id);