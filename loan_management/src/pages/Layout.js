import React, { useEffect, useState } from 'react'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
import Home from './Home'
import Loans from './Loans'
import Payment from './Payment'
import Borrower from './Borrower'
import Loan_plan from './Loan_plan'
import Loan_type from './Loan_type'
import User from './User'
import Login from './Login'
import axios from 'axios'
const Layout = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/').then(res => setData(res.data)).catch(err => console.log(err));
  }, [])
  return (
    <div>
        {/* <Header/>
        <Aside/> */}
        {/* <User/> */}
        {/* <Home /> */}
        {/* <Loans /> */}
        {/* <Payment />
        <Footer/> */}
        {/* <Login/> */}
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((test, index) => {
                            return 
                              <tr key={index}>
                                  <td>
                                    {test.id}
                                  </td>
                                  <td>
                                    {test.name}
                                  </td>
                              </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Layout