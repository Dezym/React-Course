import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
//import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
function Users() {
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees#").then((data)=>{
            //console.warn("data",data)
            data.json().then(result=>{
                console.warn("result",result)
                setUser(result.data)
            })
        })
            
    },[])
    return (
        <div>
            <h1>Hii User</h1>
            {/*{
            user.map((item,i)=>
            <div key={i}>
            <span>{item.name}</span>
            <span>{item.age}</span>
            </div>
            )
        }*/}

            {/*{
            user.length===4?<div>Yes, This is right</div>:<div>No</div>
        }*/}
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}

            <div>

            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> index</th>
                        <th> Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                        
                    </tr>
                    {
                        user.map((item,index)=>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary}</td>
                            <td>{item.employee_age}</td>
                            
                        </tr>
                        )
                    }
                </thead>
                <tbody>
                  
                </tbody>
            </Table>

        </div>
    )
}
export default Users;