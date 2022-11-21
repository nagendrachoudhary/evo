import Loader from "../Components/Loader";
import React from "react";
import AuthContextProvider from "../Context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import Pagination from "../Components/Pagination";
import ProductList from "../Components/ProductList";
function Dashboard() {
  const [State,setState] =useState([])
  const [data,setdata] =useState()
  React.useEffect(() => {
      fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?_page=${1}&_limit=1`).then(function(res){
         res.json().then(function(res){
          setState(res.data)
         })
        })
  }, [])
  console.log(State)
  function Sortlowtohigh(){
    let data=State.sort(function(a, b){return a.price - b.price});
    setdata(true)
  }
  function Sorthightolow(){
    let data1=State.sort(function(a, b){return b.price - a.price});
    setdata(false)
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high" onClick={Sortlowtohigh}>Sort low to high</button>
      <button data-testid="high-to-low" onClick={Sorthightolow}>Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {State.length?<ProductList state={State} />:<Loader/>}
            
        
      </div>
   
    </div>
  );
}

export default Dashboard;
