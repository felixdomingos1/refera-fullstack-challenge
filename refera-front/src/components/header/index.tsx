import { useContext } from 'react'
import { ModalContext } from 'src/contexts/ModalContext'
import * as S from './styles'

export function Header() {
  const { handleOpenModal } = useContext(ModalContext)

  return (
    <S.Container>
      <S.Content>
        <img
          src={
            'https://refera.com.br/wp-content/uploads/2021/07/logo-footer-2-min.png'
          }
          alt="refera"
        />
        <button type="button" onClick={handleOpenModal}>
          New Order
        </button>
      </S.Content>
    </S.Container>
  )
}
