import React from 'react'
import Header from '../../container/header'
import Main from '../../container/main'
import Footer from '../../container/footer'
import './index.css'

function AppView () {
    return (
      <div className="container">
          <div className="todoapp">
            <Header />
            <Main />
            <Footer />
        </div>
          <div className="info">
                <p>Double-click to edit a todo</p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </div>
      </div>
      
    )
}

export default AppView
