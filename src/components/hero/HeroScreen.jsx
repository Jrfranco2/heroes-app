import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { heroeImages } from "../../helpers/heroImage";
import { getHeroById } from "../../selectors/getHeroById";

//import batman from "../../assets/dc-batman.jpg"; importación recurso estático

const HeroScreen = () => {
  const { id: heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  //const imgPath = `/assets/${id}.jpg`;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          // src={imgPath} desde public assets
          // src={batman} con import
          src={heroeImages(`./${id}.jpg`)}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characteres</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
