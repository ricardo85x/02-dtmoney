import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionProps {
  
    id: string;
    title: string;
    value: number;
    type: "deposit" | "withdraw";
    category: string,
    createdAt: string
    
  
}

export function TransactionTable() {

    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    { transactions.map( transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>$ {transaction.value}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>

                    ))} 
                    
                   
                   
                </tbody>
            </table>
        </Container>
    );
}