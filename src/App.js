import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
         <ThemeContext.Provider value={{theme, toggleTheme: this.toggleTheme}}>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route component={NotFound} />
           </Switch>
         </ThemeContext.Provider>  
       )
  }
}

export default App
