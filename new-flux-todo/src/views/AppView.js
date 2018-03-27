

import React from 'react';



import Header from './Header'
import Main from './Main'
import Footer from './Footer'



function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

export default AppView;
