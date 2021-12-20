import { MemoryRouter, Route, Routes } from "react-router-dom";
import { mount } from "enzyme";
import HeroScreen from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Pruebas en <HeroScreen/>", () => {
  test("no debe demostrar el hero screen si no hay un heroe en el url", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find("h1").text().trim()).toBe("No hero page");
  });

  test("debe demostrar el hero screen si el parametro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("debe de regresar a la pantalla anterior", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );
    wrapper.find("button").prop("onClick")();
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test("debe de mostrar el No hero page si no tenemos un heroe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider123123"]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.text()).toBe("No hero page");
  });
});
