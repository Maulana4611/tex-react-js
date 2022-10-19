import './App.css';
import Table from 'react-bootstrap/Table';
import Navbar  from "./components/Navbars"
import Dropdown from "./components/Dropdowns"

function App() {
  return (
    <div>
      <Navbar/>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>rank</th>
          <th>Type</th>
          <th>Actiive</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default App;