import React from "react";
import { render } from "@testing-library/react-native";
import Header from "../components/Header/Header";

test("renders the header title", () => {
  const { getByText } = render(<Header title="Welcome" />);
  expect(getByText("Welcome")).toBeTruthy();
});
