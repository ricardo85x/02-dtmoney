import Modal from 'react-modal';

interface NewTrasactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen , onRequestClose} : NewTrasactionsModalProps) {
    return (

        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
      >
          <h2>Add Transaction</h2>
      </Modal>

    )
}