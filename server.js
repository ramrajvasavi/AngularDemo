var oracledb = require('oracledb');  
  
oracledb.getConnection({  
     user: "Magellan",  
     password: "Magellan123",  
     connectString: "oracle-magellan.cm5sjo7cm7pi.us-east-1.rds.amazonaws.com:1521/xe"  
}, function(err, connection) {  
     if (err) {  
          console.error(err.message);  
          return;  
     }  
     connection.execute( "SELECT name, address FROM customers",  
     [],  
     function(err, result) {  
          if (err) {  
               console.error(err.message);  
               doRelease(connection);  
               return;  
          }  
          console.log(result.metaData);  
          console.log(result.rows);  
          doRelease(connection);  
     });  
});  
  
function doRelease(connection) {  
     connection.release(  
          function(err) {  
               if (err) {console.error(err.message);}  
          }  
     );  
}  