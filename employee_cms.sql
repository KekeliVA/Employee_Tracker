DROP IF EXISTS employee_data_db;
CREATE DATABASE employee_data_db;

USE employee_data_db;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(250),
  lastName VARCHAR(250),
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id)
  FOREIGN KEY (manager_id) REFERENCES managers(id)
); 

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(250),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(250) NOT NULL, 
  salary INT NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(department_id) REFERENCES department(id)
);

