import { Typography } from "@mui/material"
import KpiCards from "../components/KpiCards"
import Charts from "../components/Charts"
import useStockCall from "../hooks/useStockCall"
import { useEffect } from "react"

const Home = () => {
  const {getPurcSales} = useStockCall()
  useEffect(()=>{
    getPurcSales();
  
  },[])// eslint-disable-line

  return <div>
    <Typography variant="h4" color="error" mb={3}>Dashboard</Typography>
  <KpiCards/>
  <Charts/>

  </div>
}

export default Home
