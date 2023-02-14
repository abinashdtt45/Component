import Button from "./components/Button";
import { GoBell, GoArchive, GoBriefcase } from "react-icons/go";

const App = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick}>
          <GoArchive />
          Click Me
        </Button>
      </div>
      <div>
        <Button danger className="mb-5">
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoBell />
          Click Offer
        </Button>
      </div>
      <div>
        <Button primary>Apply Offer</Button>
      </div>
      <div>
        <Button danger outline>
          <GoBriefcase />
          Add to cart
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Danger
        </Button>
      </div>
    </div>
  );
};

export default App;
