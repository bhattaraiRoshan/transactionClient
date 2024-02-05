import { Container } from "react-bootstrap"
import TopNavbar from "../../components/topNavBar"
import { useSelector } from "react-redux"
import { TransactionForm } from "../../components/transactionForm"
import { TransactionTable } from "../../components/transactionTable"

export const TransactionPage = () =>{

    const {user} = useSelector(state => state.user)
    

    return(
        <>

        <TopNavbar userName = {user?.name}/>


        <Container>
            <TransactionForm user = {user}/>

            <hr />

            <TransactionTable userId = {user?._id}/>

            

        </Container>
        
        </>
    )

}