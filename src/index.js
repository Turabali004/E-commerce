import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./Components/Products-Listing/Product-Listing";
import ProductDetails from "./Components/Product-Details/Product-Details";
import Cart from "./Components/Cart/Cart";
import store from "./app/store";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import LoginForm from "./Components/LoginForm/LoginForm";
// import PrivateRoute from "./Components/PrivateRoutes";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoutes";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import CheckoutForm from "./Components/CheckoutForm/CheckoutForm";
import OrderHistory from "./Components/OrderHistory/OrderHistory";

export {
  PrivateRoute,
  RegistrationForm,
  LoginForm,
  AdminPanel,
  Header,
  Footer,
  Layout,
  LandingPage,
  ProductListing,
  ProductDetails,
  Cart,
  store,
  CheckoutForm,
  OrderHistory,
};
