import React , {useEffect , useState} from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function Read() {
    
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/posts').then((getData)=>{
            setApiData(getData.data);
        })
    })
    
    const setID = (id) =>{
        console.log(id)
        localStorage.setItem('ID', id)
    }

    return (
    <div>
  <Table basic>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>User ID</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Body</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((data) => {
            return (
                <Table.Row>

                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.userId}</Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.body}</Table.Cell>
                <Table.Cell>
                    <Link to = '/update'>
                    <Button onClick={() => setId}> Update </Button>
                    </Link>
                </Table.Cell>
                
                <Table.Cell>
                    <Link to = '/delete'>
                    <Button color="red"> Delete </Button>
                    </Link>
                </Table.Cell>

              </Table.Row>
            )
        })}

    </Table.Body>
  </Table>
    </div>
  )
}
