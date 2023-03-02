import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { SignIn } from './components/Sign_In/Sign_In';
import { OneUser } from './components/OneUser';
import { AllPosts } from './components/AllPosts';
import { OnePost } from './components/OnePost';
import { AllUsers } from './components/AllUsers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <SignIn />  } ></Route>
          <Route path='/one_user/:id' element = { <OneUser /> } ></Route>
          <Route path='/all_users' element= { <AllUsers /> }></Route>
          <Route path='/bright_ideas' element= { <AllPosts /> }></Route>
          <Route path='/one_post/:id' element= { <OnePost /> }></Route>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
