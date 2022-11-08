import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { StyledGlobal } from 'theme';

import AppLayout from 'routes';
import { Cart } from 'components';

function App() {
  return (
    <main className='position-relative'>
      <StyledGlobal/>
      <Cart/>
      <AppLayout/>
    </main>
  );
}

export default App;
