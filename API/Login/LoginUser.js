//test git desktop
const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());
const config = {
    authentication: {
      options: {
        userName: "supleman@hack2build", // update me
        password: "Stcc1234" // update me
      },
      type: "default"
    },
    server: "hack2build.database.windows.net", // update me
    options: {
      database: "vrock_db", //update me
      encrypt: true
    }
  };

// app.get('/API/Login', (req,res)=> {
//     res.send(config);
//     });
app.get('/API/Login', (req, res) => {
    const request = new Request(
        `select top 1 
        e.employee_id,e.status,h.result,h.check_date,e.first_name,e.last_name,e.position,e.department_id,d.department_name,e.company_id,c.company_name,c.address
        from m_employee e
        left outer join m_company c on (e.company_id=c.company_id)
        left outer join m_department d on (e.department_id=d.department_id)
        left outer join t_atk_history h on (e.employee_id=h.employee_id)
        where e.user_name='tthayawat@netizen.co.th' and e.user_password='1234'
        order by h.check_date desc`,
        (err, rowCount) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(`${rowCount} row(s) returned`);
          }
        }
      );
    
      request.on("row", columns => {
        columns.forEach(column => {
          console.log("%s\t%s", column.metadata.colName, column.value);
        });
      });
    
      connection.execSql(request);
});
