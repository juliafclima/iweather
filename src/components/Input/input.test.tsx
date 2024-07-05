import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should  be render without activity indicator if isLoading prop is undefined | deve ser renderizado sem indicador de atividade se isLoading prop for indefinido", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });

  it("should  be render with activity indicator if isLoading prop is true | deve ser renderizado com indicador de atividade se a propriedade isLoading for verdadeira", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");
    expect(activityIndicator).toBeTruthy();
  });
});
