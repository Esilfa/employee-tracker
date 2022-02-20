use employeeTracker_db

INSERT INTO department (name)
VALUES
('Executive'),
('Finance'),
('Marketing'),
('Sales'),
('Legal'),
('IT'),
('HR');

SELECT * FROM department;

INSERT INTO roles (title, salary, department_id)
  VALUES 
  ('CEO', 550000, 12),
  ('Executive' 500000, 12),
  ('Director of HR', 450000, 12),
  ('Director of Sales', 400000, 12),
  ('HR Manager', 300000,7234),
  ('Marketing Manager', 300000, 8234),
  ('Marketing Assistant', 250000, 8234);

  SELECT * FROM roles;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES
  ('Smith', 'Ally', 1,1),  
  ('Johnson', 'Alex', 2,1),
  ('Williams', 'Lyla', 3,1),
  ('Brown', 'Kylia',4,1),
  ('Jones', 'Bryce', 5, 2),
  ('Miller' , 'Daniela', 6,2),
  ('Davis', 'Jacob', 7,2),
  ('Garcia', 'Reily', 8,2),
 

SELECT * FROM employee;