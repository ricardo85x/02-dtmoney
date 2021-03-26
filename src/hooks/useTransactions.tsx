import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

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
    createTransaction: (transactions: TransactionInputProps) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextDataProps>( 
    {} as TransactionsContextDataProps
);

export function TransactionsProvider( {children } : TransactionProviderProps ) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])


    async function createTransaction(transactionInput : TransactionInputProps) {        
        const response = await api.post('transactions', {
            ...transactionInput, 
            createdAt: new Date()
        })
        const { transaction } = response.data
        setTransactions([...transactions, transaction])
    }


    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

}


export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context
}