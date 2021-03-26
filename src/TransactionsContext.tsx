import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface TransactionProps {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string,
    createdAt: string
}

type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>


interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsContextDataProps {
    transactions: TransactionProps[];
    createTransaction: (transactions: TransactionInputProps) => void;
}

export const TransactionsContext = createContext<TransactionsContextDataProps>( 
    {} as TransactionsContextDataProps
);

export function TransactionsProvider( {children } : TransactionProviderProps ) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    function createTransaction(transaction : TransactionInputProps) {        
        api.post('transactions', transaction)
    }


    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

}