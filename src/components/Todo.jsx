import React, { useState } from 'react'
import { Typography,Card,CardContent,Button,TextField } from '@mui/material';

const Todo = () => {
    var[texts,setTexts]=useState([])
    var[text,setText]=useState('')
    const changeTname=(e)=>
    {
        setText(e.target.value);
        console.log(e.target.value);
    }
    const toDoList=(e)=>
    {
      setTexts([...texts,text]);
console.log('sdfsd');
    }
  return (
    <div>
          <Typography variant='h4'>Todo App</Typography><br></br><br></br>
     <Card  style={{ alignItems:'center',textAlign:'center'}} xs={{ minWidth: 500,maxWidth:500 }}>
      <CardContent>
       <TextField variant='outlined' label='Enter Text..' onChange={changeTname}></TextField><br></br><br></br>
       <Button onClick={toDoList}>Add</Button>
        <ol>
          {
       texts.map((value,index)=>{
        return(
          <li style={{alignItems:'center',textAlign:'center'}}key={index}>{value}</li>
        )
       }

       )
      }
        </ol>
        
      </CardContent>
     
    </Card>
    </div>
  )
}

export default Todo