import Modal from 'react-modal';
import { Container, TransactionTypecontainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTrasactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen , onRequestClose} : NewTrasactionsModalProps) {

    const [type, setType] = useState('deposit')
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

          <Container>
            <h2>Add Transaction</h2>

            <input 
                placeholder="Title" 
            />
            <input 
                type="number"
                placeholder="Value" 
            />

            <TransactionTypecontainer>
                <RadioBox 
                    type="button"
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}


                >
                    <img src={incomeImg} alt="Income" />
                    <span>Income</span>
                </RadioBox>

                <RadioBox 
                    type="button"
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}



                >
                    <img src={outcomeImg} alt="Outcome" />
                    <span>Outcome</span>
                </RadioBox>

            </TransactionTypecontainer>

            <input 
                placeholder="Category" 
            />

            <button type="submit">
                Register
            </button>


          </Container>
          


      </Modal>

    )
}