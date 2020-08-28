DROP DATABASE IF EXISTS employee_tracker_v2;
CREATE DATABASE employee_tracker_v2;

USE employee_tracker_v2;

CREATE TABLE department(
	id INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

