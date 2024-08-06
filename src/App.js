import "./styles.css";
import RatingStar from "./components/Rating";
export default function App() {
  return (
    <div className="App">
      <RatingStar limit={5} initialrating={2} />
    </div>
  );
}
