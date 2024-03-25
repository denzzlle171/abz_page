// import './App.css';
import { Header } from './components/Header/Header.jsx';
import { BannerSection } from './components/BanneSection/BannerSection.jsx'
import { UserList } from './components/UserList/UserList.jsx'
import {Form} from './components/Form/Form.jsx'


function App() {
  return (
    <div className="page">
      <Header />
      <BannerSection />
      <UserList />
      <Form />
    </div>
  );
}

export default App;
