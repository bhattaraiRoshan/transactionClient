import { Container } from "react-bootstrap"
import TopNavbar from "../../components/topNavBar"
import { useSelector } from "react-redux"
import { TransactionForm } from "../../components/transactionForm"
import { TransactionTable } from "../../components/transactionTable"
import { CsvDownload } from "../../components/donwnloadCSV"

export const TransactionPage = () =>{

    const {user} = useSelector(state => state.user)
    

    return(
        <>

        <TopNavbar userName = {user?.name}/>


        <Container>
            <TransactionForm user = {user}/>

            <hr />

            <CsvDownload/>

           

            <TransactionTable userId = {user?._id}/>

            

        </Container>
        
        </>
    )

}