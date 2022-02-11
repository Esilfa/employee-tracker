-- mysql -u root -p < schema.sql

DROP DATABASE IF EXISTS employeeTracker_db;
-- Creates the database --
CREATE DATABASE employeeTracker_db;

-- use database --
USE employeeTracker_db;

-- Creates the table "produce" within database --
CREATE TABLE produce (
  -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL
);
