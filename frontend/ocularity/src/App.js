import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
=======
import HeatMapT from './HeatMapTest';

>>>>>>> 63bab908552c80ee31d4359a3320f57eec3830e5

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      	<aside class="col-12 col-md-2 p-0 flex-shrink-1">
					<nav
						class="navbar navbar-expand-md flex-md-column flex-row align-items-end text-center text-md-end p-3 p-md-0 sticky-top"
						id="sidebar"
					>
						<div class="text-center d-none d-md-block p-3">
							<a href="/" class="navbar-brand-mx=0 font-weight-bold text-nowrap">
								<img
									id="logo"
									title="oh hey it's me"
									src="./images/me-square-500px.jpg"
									alt="me holding a camera"
									width="100%"
								/>
							</a>
						</div>
						<button
							type="button"
							class="btn navbar-toggler border-0 order-1 m-3 p-2"
							data-bs-toggle="collapse"
							data-bs-target="#nav"
							aria-controls="nav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<!-- <span class="navbar-toggler-icon"></span> -->
							<i class="fa-solid fa-circle-chevron-up"></i>
						</button>
						<div class="collapse navbar-collapse prder-last" id="nav">
							<ul class="navbar-nav flex-column w-100 justify-content-center">
								<li class="nav-item">
									<a href="/" class="nav-link px-3">home</a>
								</li>
								<li class="nav-item">
									<a href="analog" class="nav-link px-3">analog</a>
								</li>
								<li class="nav-item">
									<a
										href="#"
										title="yes yes i made it so that your cursor changes whenever you're hovering the link to the page you're already on, move along"
										class="nav-link px-3 active"
										>about</a
									>
								</li>
								<li class="nav-item">
									<a href="blog" class="nav-link px-3">blog</a>
								</li>
								<li class="nav-item">
									<a href="misc/Kevin_Zhang_Resume.pdf" target="_blank" class="nav-link px-3"
										>resume</a
									>
								</li>
							</ul>
						</div>
						<ul class="nav justify-content-center">
							<li class="nav-item social-icons">
								<a
									href="https://www.instagram.com/kevinistakingpictures/"
									target="_blank"
									class="nav-link social-button"
								>
									<i class="fa-brands fa-instagram-square fa-lg"></i>
								</a>
							</li>
							<li class="nav-item social-icons">
								<a
									href="https://www.linkedin.com/in/kevin-zhang-uwaterloo/"
									target="_blank"
									class="nav-link social-button"
								>
									<i class="fa-brands fa-linkedin fa-lg"></i>
								</a>
							</li>
							<li class="nav-item social-icons">
								<a
									href="https://github.com/kevinzhangTT"
									target="_blank"
									class="nav-link social-button"
								>
									<i class="fa-brands fa-github-square fa-lg"></i>
								</a>
							</li>
							<li class="nav-item social-icons">
								<a href="mailto:kevin9019888@gmail.com" target="_blank" class="nav-link social-button">
									<i class="fa-solid fa-square-envelope fa-lg"></i>
								</a>
							</li>
						</ul>
					</nav>
				</aside>
=======
      <HeatMapT />
>>>>>>> 63bab908552c80ee31d4359a3320f57eec3830e5
    </div>
  );
}

export default App;
