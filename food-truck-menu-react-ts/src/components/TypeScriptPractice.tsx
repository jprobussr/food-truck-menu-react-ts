import "./TypeScriptPractice.css";

type FoodTruck = {
  name: string;
  menuItemCount: number;
  isOpen: boolean;
};

type MenuStatus = "popular" | "regular" | "sold-out";

type PracticeMenuItem = {
  id: number;
  name: string;
  price: number;
  status: MenuStatus;
};

const practiceMenuItems: PracticeMenuItem[] = [
  {
    id: 1,
    name: "Smash Burger",
    price: 12,
    status: 'sold-out',
  },
  {
    id: 2,
    name: "Loaded Fries",
    price: 8,
    status: 'regular',
  },
  {
    id: 3,
    name: "Street Tacos",
    price: 10,
    status: 'popular',
  },
];

const formatPrice = (price: number): string => {
  return `${price}`;
};

const getStatusLabel = (status: MenuStatus): string => {
  if (status === 'popular') {
    return 'Popular';
  }

  if (status === 'sold-out') {
    return 'Sold Out';
  } 

  return 'Regular'
}

const TypeScriptPractice = () => {
  const foodTruck: FoodTruck = {
    name: "Fire & Fork",
    menuItemCount: 4,
    isOpen: false,
  };

  return (
    <section className="ts-practice">
      <div className="ts-practice__content">
        <p className="ts-practice__eyebrow">TypeScript Practice</p>
        <h2>Learning TypeScript with React</h2>

        <div className="ts-practice__grid">
          <article className="ts-practice__card">
            <span>string</span>
            <p>Truck name: {foodTruck.name}</p>
          </article>

          <article className="ts-practice__card">
            <span>number</span>
            <p>Menu items: {foodTruck.menuItemCount}</p>
          </article>

          <article className="ts-practice__card">
            <span>boolean</span>
            <p>Status: {foodTruck.isOpen ? "Open" : "Closed"}</p>
          </article>
        </div>

        <h3>Practice Menu Items</h3>

        <ul>
          {practiceMenuItems.map((item) => {
            return (
              <li key={item.id}>
                {item.name} - ${formatPrice(item.price)}{" "}
                {getStatusLabel(item.status)}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TypeScriptPractice;
