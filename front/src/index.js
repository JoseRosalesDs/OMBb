// el inicio de la app
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux' 
import store from './store/index'

ReactDOM.render(
    <Provider store ={ store } >
        <BrowserRouter>
            <Route path="/" component={Main} />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('app')
)