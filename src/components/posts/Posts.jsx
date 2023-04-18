import "./posts.css";
import { BikeCard } from "../bike-card/bike.card";
import bicycles from "../../hits_bicycles";

export default function Posts() {
  return (
    <div className="posts">
      {bicycles.map(bicycles => (
                <div className="innerpost">
                  <BikeCard 
                      image={bicycles.image}
                      name={bicycles.name}
                      rate={bicycles.rate}
                      address={bicycles.address}
                  />
                </div>
                ))}
    </div>
  );
}
