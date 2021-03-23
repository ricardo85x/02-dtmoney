import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import {NewTransactionModal } from "./components/NewTransactionModal";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react'

Modal.setAppElement('#root')

export function App() {


  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}  
      />

      <GlobalStyle />
    </>
  );
}

