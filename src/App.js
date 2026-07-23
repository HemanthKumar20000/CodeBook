import AllRoutes from "./routes/AllRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900 dark:text-white">
      <Header />

      <main className="flex-1 pt-20 px-10">
        <ScrollToTop />
        <AllRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
