import Modal from 'react-modal';
import { Container, TransactionTypecontainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTrasactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen , onRequestClose} : NewTrasactionsModalProps) {
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
                <button 
                    type="button"

                >
                    <img src={incomeImg} alt="Income" />
                    <span>Income</span>
                </button>

                <button 
                    type="button"

                >
                    <img src={outcomeImg} alt="Outcome" />
                    <span>Outcome</span>
                </button>

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