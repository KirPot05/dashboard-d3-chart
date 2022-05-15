import Register from './Register';
import logo from "../logo.png";
import "../styles/Dashboard.scss";

function Dashboard() {
  return (
    <div className='dashboard'>
        <div class="main__logo">
			<img src={logo} alt="Main Logo" />
		</div>

		<Register/>
    </div>
  )
}

export default Dashboard