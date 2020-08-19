const connection = require("connection.js");

const orm = {
  /**@todo
   * method to add to departments table
   */
  departmentInsert: function (departmentName) {
    let queryString = "INSERT INTO department (name) VALUES (??)";
    connection.query(queryString, [departmentName], (err, result) => {
      if (err) throw (err);
      console.log(result);
    } )
  },
   /**@todo
   * method to add to employee table
   */
  
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
