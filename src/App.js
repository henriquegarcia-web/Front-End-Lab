import React from 'react';
import Dropdown from './Components/Story/InputDropdown';

import * as I from './Components/Story/Inputs'
import Logo from './Components/Story/Logo'
import * as T from './Components/Story/Text'
import { colors } from './Utils/colors';

function App() {
  return (
    <div className='teste'>
    
      <I.InputText 
        type='text'
        placeholder='Input de Texto'
        // width='auto'
      />

      <I.InputTextarea 
        placeholder='Input TextArea'
        // width='auto'
        // height='200px'
      />

      <I.InputButton
        type='button'
        value='Button'
        // width='auto'
        isActive={true}
      />

      <I.InputPassword 
        type='password'
        placeholder='Input de Senha'
        // width='auto'
      />

      <Logo
        size='30'
        color={colors.green}
      >Front-End Lab</Logo>

      <T.Title
        // bold={true}
      >Isso daqui é um Título</T.Title>

      <T.Subtitle
        // bold={true}
      >Isso daqui é um Subtitulo</T.Subtitle>

      <T.Paragraph
        // bold={true}
      >Isso daqui é um Paragrafo</T.Paragraph>

      <T.Legend
        // bold={true}
      >Isso daqui é uma Legenda</T.Legend>

      <br/>

      <Dropdown />
    
    </div>
  );
}

export default App;
