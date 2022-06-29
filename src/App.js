import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {
	return (
		<Router>
			<div className="flex flex-col justify-between h-screen">
				<Navbar />
				<main className="container mx-auto px-3 pb-12">content</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
