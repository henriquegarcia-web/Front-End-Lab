import React from 'react';

import * as I from './Components/Story/Inputs'

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
    
    </div>
  );
}

export default App;
