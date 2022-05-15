import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
	return (
		<Routes>
			<Route exact path='/register' element={<Dashboard/>}/>
			<Route path='/' element={<Home/>}/>
		</Routes>
	);
}

export default App;
