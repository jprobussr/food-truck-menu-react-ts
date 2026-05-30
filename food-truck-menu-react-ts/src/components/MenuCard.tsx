import './MenuCard.css'

type MenuCardProps = {
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
};

const MenuCard = ({ name, description, price, image, tag }: MenuCardProps) => {
  return (
    <article className="menu-card">
      <div className="menu-card__image-wrap">
        <img src={image} alt={name} />
        <span>{tag}</span>
      </div>

      <div className="menu-card__body">
        <div className="menu-card__top">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>

        <p className="menu-card__description">{description}</p>
      </div>
    </article>
  );
};

export default MenuCard;
