import Register from './Register';
import logo from "../logo.png";
import styles from "../styles/Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
        <div className={styles.main__logo}>
			<img src={logo} alt="Main Logo" />
		</div>

		<Register/>
    </div>
  )
}

export default Dashboard