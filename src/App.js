import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';

function App() {
	return (
		<Router>
			<div className="flex flex-col justify-between h-screen">
				<Navbar />
				<main>content</main>
			</div>
		</Router>
	);
}

export default App;
