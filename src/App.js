import './App.css';
import Head from './components/Header'
import Body from './components/Body'
import HeaderItem from './components/HeaderItem'
import Shop from './components/pages/Shop'
import About from './components/pages/About'
import Login from './components/pages/Login'
import Detail from './components/pages/Detail'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


// functional component
// function App() {
//   return <div>Hello world</div>
// }

export const App = () => {
  return (
    <>
      <Head>

      </Head>
      {/* <Body/> */}
      <Switch>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/product-detail" component={Detail}></Route>
      </Switch>
    </>
  )
}

// class components
// export class App extends Component {
//   render() {
//     return <div className="App">
//     <BootstrapCarouselComponent></BootstrapCarouselComponent>
//     </div>
//   }
// }

// export default App;