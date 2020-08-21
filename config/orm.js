const connection = require("./connection.js");


class Orm {
  constructor(connection) {
    this.connection = connection;
    
  }
  /**@todo
   * method to add to departments table
   */
  departmentInsert(departmentName) {
    console.log(departmentName);
     return this.connection.query("INSERT INTO department SET name = ?", departmentName);
     
  }
   /**@todo
   * method to add to employee table
   */
  employeeInsert(employeeName) {
    console.log(employeeName);
    return this.connection.query("INSERT INTO employee SET name = ?", employeeName);
  }
  
   /**@todo
   * method to add to roles table
   */
  
   /**@todo
   * method to view departments table
   */
  
   /**@todo
   * method to view employees table
   */
  
   /**@todo
   * method to view roles table
   */
  
   /**@todo
   * method to add to update employee roles 
   */
}


// export the orm (because it takes connection as constructor)
module.exports = new Orm(connection);

// do another sql statement with another column to test this syntax error
// use promisify for