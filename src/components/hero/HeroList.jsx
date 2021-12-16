import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";

const HeroList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);
  return (
    <div>
      <ul>
        {heroes.map((heroe) => (
          <li key={heroe.id}>{heroe.superhero}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
