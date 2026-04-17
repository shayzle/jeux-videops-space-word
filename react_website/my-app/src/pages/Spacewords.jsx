
import { Link } from 'react-router-dom';

function Spacewords() {
  return (
    <div>
      <Link to="/">Accueil</Link>
      <h1>Spacewords</h1>
      <p>C'est un jeu trÃ¨s amusant</p>
      <iframe
        src="https://shayzle.github.io/jeux-videops-space-word/"
        width="640"
        height="480"
        title="Spacewords"
      ></iframe>
    </div>
  );
}

export default Spacewords;