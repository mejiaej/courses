INSERT INTO courses.student (last_name, name) VALUES
('Gonzalez', 'Carlos'),
('Smith', 'Emily'),
('Lopez', 'John'),
('Brown', 'Sophia'),
('Rodriguez', 'Michael'),
('Davis', 'Emma'),
('Wilson', 'James'),
('Martinez', 'Olivia'),
('Anderson', 'David'),
('Taylor', 'Charlotte');

INSERT INTO courses.course (title, description) VALUES
('Mathematics', 'Basic mathematics course'),
('Physics', 'Fundamentals of physics'),
('Chemistry', 'Principles of chemistry'),
('History', 'World history'),
('Literature', 'Literary analysis'),
('Programming', 'Introduction to programming'),
('Databases', 'Database management'),
('Networking', 'Fundamentals of computer networks'),
('Artificial Intelligence', 'Introduction to AI'),
('Graphic Design', 'Principles of graphic design');

INSERT INTO courses.student_course (student_id, course_id) VALUES
(1, 1), (1, 3), (1, 5),
(2, 2), (2, 4), (2, 6),
(3, 1), (3, 7), (3, 9),
(4, 3), (4, 6), (4, 8),
(5, 2), (5, 5), (5, 10),
(6, 4), (6, 7), (6, 9),
(7, 1), (7, 3), (7, 8),
(8, 2), (8, 6), (8, 10),
(9, 5), (9, 7), (9, 9),
(10, 3), (10, 6), (10, 8);