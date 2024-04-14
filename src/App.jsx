import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-green-300 underline">
        Hello world!
      </h1>

      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
