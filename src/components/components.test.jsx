import { render, screen } from "@testing-library/react";
import Rating from "./Rating";
import { configureStore } from "redux-mock-store";
import Product from "./Product";
import { Provider } from "react-redux";
import { vi } from "vitest";

const mockStore = configureStore();

const store = mockStore();

const singleItem = {
  id: 1,
  title: "test",
  price: 0,
  description: "hello test",
  category: "",
  image: "",
  rating: {
    rate: 3.9,
  },
};

const renderWithStore = (initialState) => {
  const store = mockStore(initialState);
  store.dispatch = vi.fn(); // vi.fn() is a dummy function
  return render(
    <Provider store={store}>
      <Product item={singleItem} />
    </Provider>
  );
};

describe("testing start component", () => {
  it("is component rendered", () => {
    render(<Rating />);
  });
});

describe("testing product component", () => {
  it("is component rendered", () => {
    renderWithStore({
      cart: {
        cartItems: [
          {
            id: 4,
            title: "Mens Casual Slim Fit",
            price: 15.99,
            description:
              "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            rating: {
              rate: 2.1,
              count: 430,
            },
            quantity: 1,
          },
        ],
      },
    });
    expect(screen.getByTestId("product-title")).toBeInTheDocument();
  });
});
