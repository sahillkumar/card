import "./card.css";
import sunflower from "./sunflower.jpg";

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-image">
          <img src={sunflower} alt="sunflower" />
        </div>
        <div className="card-content">
          <div className="card-description">
            <strong>We're all golden sunflowers inside.</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
