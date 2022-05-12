import React, { useState } from 'react'

import * as S from './style'

const Dropdown = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <S.Dropdown 
      active={modalActive} 
      // width='auto'
    >

      <S.DropdownMain onClick={() => setModalActive(!modalActive)}>
        <S.DropdownLabel>Status</S.DropdownLabel>
        <S.DropdownActiveValue active={modalActive}>Em Desenvolvimento</S.DropdownActiveValue>
      </S.DropdownMain>

      <S.DropdownModal active={modalActive}>
        <S.DropdownItem>Em Desenvolvimento</S.DropdownItem>
        <S.DropdownItem>Operação Parada</S.DropdownItem>
        <S.DropdownItem>Finalizado</S.DropdownItem>
        <S.DropdownItem>Não Iniciado</S.DropdownItem>
      </S.DropdownModal>

    </S.Dropdown>
  )
}

export default Dropdown