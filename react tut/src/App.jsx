import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SubComponent from "./components/SubComponent";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import List from "./components/List";
import CounterApp from "./components/CounterApp";
import Form from "./components/Form";
import RegistrationForm from "./components/RegistrationForm";
import ClickCounterByHOC from "./components/ClickCounterByHOC";
import HoverCounterByHOC from "./components/HoverCounterByHOC";
import RenderProps from "./components/RenderProps";
import Counter from "./components/Counter";
import ClickCounterByRP from "./components/ClickCounterByRP";
import HoverCounterByRP from "./components/HoverCounterByRP";
import ComponentOne from "./components/ComponentOne";
import CourseContext from "./components/context/courseContext";
import UseEffectCom from "./components/UseEffect";
import Timer from "./components/Timer";
import Posts from "./components/Posts";
import UseCallBack from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import ComplexCounter from "./components/ComplexCounter";
import PostListWithoutReducer from "./components/PostListWithoutReducer";
import PostListWithReducer from "./components/PostListWithReducer";
import PostListWithCustomHook from "./components/PostListWithCustomHook";
import CssStyle from "./components/CssStyle";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import OrderConfirmation from "./components/pages/OrderConfirmation";
import NotFound from "./components/pages/NotFound";
import PostList from "./components/pages/PostList";
import PostDetail from "./components/pages/PostDetail";
import HotPosts from "./components/pages/HotPosts";
import ProductList from "./components/pages/ProductList";
import FeaturedProducts from "./components/pages/FeaturedProducts";
import NewProducts from "./components/pages/NewProducts";

function App() {
  const [toggle, setToogle] = useState(false);

  return (
    <div>
      {/* <p>This is root component</p>
      <SubComponent>This is children</SubComponent>
      <ClassBasedComponent />
      <FunctionalComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <List /> */}
      {/* <CounterApp /> */}
      {/* <Form /> */}
      {/* <RegistrationForm /> */}
      {/* <ClickCounterByHOC /> */}
      {/* <HoverCounterByHOC /> */}
      {/* <RenderProps render={(isFavorite) => (isFavorite ? "react" : "vue")} /> */}
      {/* <Counter>
        {(counter, handleIncrement) => (
          <ClickCounterByRP
            counter={counter}
            handleIncrement={handleIncrement}
          />
        )}
      </Counter>

      <Counter>
        {(counter, handleIncrement) => (
          <HoverCounterByRP
            counter={counter}
            handleIncrement={handleIncrement}
          />
        )}
      </Counter> */}
      {/* <CourseContext.Provider value={{ course: "react" }}>
        <ComponentOne />
      </CourseContext.Provider> */}
      {/* <UseEffectCom /> */}
      {/* <button onClick={() => setToogle(!toggle)}>Toggle</button>
      {toggle ? <CounterApp /> : <Timer />} */}
      {/* <Posts /> */}
      {/* <UseCallBack /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <UseReducer /> */}
      {/* <ComplexCounter /> */}
      {/* <PostListWithoutReducer /> */}
      {/* <PostListWithReducer /> */}
      {/* <PostListWithCustomHook /> */}
      {/* <CssStyle /> */}

      {/* react router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="posts" element={<PostList />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="posts/hot" element={<HotPosts />} />
        <Route path="products" element={<ProductList />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="order-confirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
