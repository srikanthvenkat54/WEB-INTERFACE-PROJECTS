import Gaming from "./assets/ff.jpeg";
import Cricket from "./assets/cricket.jpeg";
import VolleyBall from "./assets/volleyball.jpeg";
import Traveling from "./assets/travel.jpeg";
import "./hobby.css";

//child component

function HobbyCard(props) {
  return (
    <div className="card">

      <img
        src={props.image}
        alt={props.hobby}
      />

      <h2>{props.hobby}</h2>

      <p>{props.description}</p>

    </div>
  );
}

//Parent component
function Hobby() {
  return (
    <div>
      <h1>My Hobbies</h1>

      <div className="hobby-container">

        <HobbyCard
          image={Gaming}
          hobby="Gaming"
          description="I enjoy playing video games."
        />

        <HobbyCard
          image={Cricket}
          hobby="Cricket"
          description="I enjoy playing cricket with my friends."
        />

        <HobbyCard
          image={VolleyBall}
          hobby="VolleyBall"
          description="I enjoy playing volleyball and improving skills."
        />

        <HobbyCard
          image={Traveling}
          hobby="Traveling"
          description="I enjoy visiting new places."
        />

      </div>
    </div>
  );
}

export default Hobby;