import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { CSVLink } from "react-csv";

export const CsvDownload = () =>{

    const {transaction} = useSelector(state => state.transaction)

 

    const headers = [
        {
            label: "Title", key: "title"
        },
        {
            label: "Date", key: "date"
        },
        {
            label: "Type", key: "type"
        },
        {
            label: "Amount", key: "amount"
        },
    ]

    const csvLink = {
        filename: "file.csv",
        headers: headers,
        data: transaction,
    }

    return(
        <Button variant="warning">
            <CSVLink {...csvLink}>Export to CSV</CSVLink>
            
        </Button>
    )
}