INSERT INTO department (department_name)
VALUES
('Executive'),
('Finance'),
('Marketing'),
('Sales'),
('Legal'),
('IT'),
('HR');
INSERT into
  roles (title, salary, department_id)
  VALUES 
  ('President', 600000, 12),
  ('CEO', 550000, 12),
  ('Executive' 500000, 12),
  ('Director of HR', 450000, 12),
  ('Director of Sales', 400000, 12),
  ('Director of Marketing', 400000, 12),
  ('Sales Director', 380000, 123),
  ('Sales Manager', 370000, 123),
  ('Sales Assistant', 350000, 123),
  ('Computer Programmer', 340000 ,1234),
  ('Lawyer', 330000, 5234),
 ('Legal Assistant', 310000, 5234),
  ('Accountant', 350000, 6123),
  ('HR Manager', 300000,7234),
  ('Marketing Manager', 300000, 8234),
  ('Marketing Assistant', 250000, 8234);
INSERT into
  employee (last_name, first_name, role_id, manager_id)
  VALUES
  ('Smith', 'Ally', 1,1),  
  ('Johnson', 'Alex', 2,1),
  ('Williams', 'Lyla', 3,1),
  ('Brown', 'Kylia',4,1),
  ('Jones', 'Bryce', 5, 2),
  ('Miller' , 'Daniela', 6,2),
  ('Davis', 'Jacob', 7,2),
  ('Garcia', 'Reily', 8,2),
  ('Rodriguez', 'Micaela',9,2),
  ('Wilson', 'Breonia', 10,3),
  ('Martinez','Miranda',11,3),
  ('Anderson', 'Madelyn', 12,3),
  ('Taylor','Jase', 13,3),
  ('Thomas', 'Jessica', 14,3),
  ('Hernandez', 'Samuel',15,3);
Select
  employee.first_name,
  employee.last_name,
  roles.title,
  roles.salary,
  department.department_name,
  employee_m.first_name as manager_firstname,
  employee_m.last_name as manager_lastname

  from
  employee
  join roles on employee.role_id = roles.id
  join department on roles.department_id = department.id
  Left join employee as employee_m on employee.manager_id = employee_m.id;
select
  *
from
  department;
select
  *
from
  roles;
select
  *
from
  employee;
       
