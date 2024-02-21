import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{ useState } from 'react'

const Test = () =>{
    var[test,setTest]= useState(
        [
            {"sname":"tiya","age":23},
            {"sname":"krishna","age":20},
            {"sname":"liya","age":30}
        ]
    )
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Names</TableCell>
                        <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {test.map((val,ind)=>{
                        return(
                            <TableRow><TableCell>{val.sname}</TableCell>
                            <TableCell>{val.age}</TableCell></TableRow>
                            )
                    })}
                </TableBody>
            </Table>

        </TableContainer>
    </div>
  )
}

export default Test