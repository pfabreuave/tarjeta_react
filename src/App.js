import './App.css';

function App() {
  return (
    <div className='main-container'>
			<div className='container'>
				<div className='prolife-pic'></div>
				<div className='layer'></div>
				<div className='detail'>
					<p>Pedro Abreu Arenas</p>
					<p>Especialista em TI</p>
				</div>
				<div>
					<p>Telf: 55 21 969615392</p>
					<p>pfabreuave@gmail.com</p>
				</div>			
				

				<table>
    				<tr>
        				<td>
							<p className='fa-mainframe'></p>
        				</td>
        				<td>
							<p className='fa-jcl'></p>
        				</td>
						<td>
							<p className='fa-vsam'></p>
        				</td>
        				<td>
							<p className='fa-cics'></p>
        				</td>
						<td>
							<p className='fa-cobol'></p>
        				</td>
						<td>
							<p className='fa-adanat'></p>
        				</td>
    				</tr>
				</table>

				<div className='skills'>
					<i className='fab fa-html5'></i>
					<i className='fab fa-css3-alt'></i>
					<i className='fab fa-js'></i>
					<i className='fab fa-react'></i>
					<i className='fab fa-angular'></i>
					<i className='fas fa-database'></i>
					<i className='fab fa-node'></i>
				</div>
				
				<div className='btn'>
					<a href='https://port-mundo-rt.web.app/' target='blank_'>Disponível</a>
				</div>
			</div>
	</div>
  );
}

export default App;