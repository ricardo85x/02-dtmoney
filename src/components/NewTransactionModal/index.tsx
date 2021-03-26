import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypecontainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions';


interface NewTrasactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen , onRequestClose} : NewTrasactionsModalProps) {

    const { createTransaction } = useTransactions()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {

        event.preventDefault();

        await createTransaction({
            amount,
            category,
            title,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')

        onRequestClose()

    }

    return (

        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Close modal" />
            </button>

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Add Transaction</h2>

            <input 
                value={title}
                onChange={event => setTitle(event.target.value)}
                placeholder="Title" 
            />
            <input 
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}

                type="number"
                placeholder="Value" 
            />

            <TransactionTypecontainer>
                <RadioBox 
                    type="button"
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Income" />
                    <span>Income</span>
                </RadioBox>

                <RadioBox 
                    type="button"
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeImg} alt="Outcome" />
                    <span>Outcome</span>
                </RadioBox>

            </TransactionTypecontainer>

            <input 
                value={category}
                onChange={event => setCategory(event.target.value)}
                placeholder="Category" 
            />

            <button type="submit">
                Register
            </button>


          </Container>
          


      </Modal>

    )
}