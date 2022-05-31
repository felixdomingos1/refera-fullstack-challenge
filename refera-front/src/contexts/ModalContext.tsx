import React, { createContext, useState } from 'react'

type ContextProps = {
  modalOpen: boolean
  handleOpenModal: () => void
  handleCloseModal: () => void
}

const ModalContext = createContext({} as ContextProps)

type ModalProviderProps = {
  children: React.ReactNode
}

function ModalProvider({ children }: ModalProviderProps) {
  const [modalOpen, setModalOpen] = useState(false)

  function handleOpenModal() {
    setModalOpen(true)
  }

  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{ modalOpen, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider, ModalContext }
