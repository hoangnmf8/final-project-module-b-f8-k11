import { Button } from "../components/common/Button";
import Slides from "../components/ui/Slides";
import ProductList from "../features/product/ProductList";

function HomePage() {
	return `<div>
			${Slides()}
			<h1>HomePage</h1>
			<section>
			<h2>San pham ban chay</h2>
			${ProductList()}
			</section>
      // ${Button({ children: "Register", className: "btn btn-primary" })}
		</div>`;
}

export default HomePage;
