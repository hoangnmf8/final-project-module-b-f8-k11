import Navigo from "navigo";
import "./style.css";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import NotFoundPage from "./src/pages/NotFoundPage";

const app = document.querySelector("#app");

function render(contentFn, beforeFn = null, afterFn = null) {
	beforeFn && beforeFn();
	app.innerHTML = contentFn();
	afterFn && afterFn();
}

export const router = new Navigo("/", { linksSelector: "a" });

router.on("/", () => render(HomePage));
router.on("/about", () => render(AboutPage));
router.on("/login", () => render(LoginPage));
router.on("/register", () => render(RegisterPage));
router.notFound(() => render(NotFoundPage));
router.resolve();
