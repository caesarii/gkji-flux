import React from 'react'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import './index.css'

function AppView (props) {
    console.log('props', props)
    return (
      <div className="container">
          <div className="todoapp">
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
            
        </div>
          <div className="info">
                <p>Double-click to edit a todo</p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </div>
      </div>
      
    )
}

export default AppView
