import React, {Component} from 'react';
import axios from 'axios';


class Main extends React.Component {
constructor(props){
  super (props)
  this.state = {
    students: []
  }
}


componentDidMount(){
  this.getStudents()
}


async getStudents() {
  try {
    const res = await axios.get('/student');
    const selectedStudent  = res.data;
    this.setState({ students: selectedStudent });
    console.log('state ==========>>>>>>>', selectedStudent)
  } catch (err) {
    console.log(err);
  }
}



render(){


    return (

      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((curr)=>{

                return(
                  <tr key={curr.id}>
                    <td key={curr.id}>
                      {curr.fullName}
                    </td>
                  </tr>



                )


              })}
          </tbody>
        </table>
      </div>


    );
   }
  }



//here are was exporting the Main component from this file
export default Main
