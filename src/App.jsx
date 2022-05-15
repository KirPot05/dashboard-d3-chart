import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<Home/>}/>
			<Route exact path='/register' element={<Dashboard/>}/>
		</Routes>
	);
}

export default App;
