import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Books } from "./components/Books";
import { NotFound } from "./components/NotFound";
import { ShowBook } from "./components/ShowBook";
import { BookForm } from "./components/BookForm";
import { Counter } from "./components/Counter";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="counter" element={<Counter />} />
          <Route path="addBook" element={<BookForm />} />
          <Route path="editBook/:id" element={<BookForm />} />
          <Route path="show/:id" element={<ShowBook />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
