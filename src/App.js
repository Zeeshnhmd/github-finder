import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import NotFound from './Pages/NotFound';

import { GithubProvider } from './context/github/GithubContext';

function App() {
	return (
		<div className="bg-primary font-Montserrat">
			<div>
				<Toaster position="top-left"></Toaster>
			</div>
			<GithubProvider>
				<Router>
					<div className="flex flex-col justify-between h-screen bg-primary font-Montserrat">
						<Navbar />
						<main className="container mx-auto px-3 pb-12 bg-primary font-Montserrat">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/user/:login" element={<User />} />
								<Route path="/notfound" element={<NotFound />} />
								<Route path="/*" element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</GithubProvider>
		</div>
	);
}

export default App;
