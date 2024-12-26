import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import StockDetail from "../src/Stock/StockDetail/StockDetail";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  useTheme: jest.fn(),
}));

describe("StockDetail Component", () => {
  let mockNavigate;
  const mockStockData = {
    name: "Apple Inc.",
    symbol: "AAPL",
    price: 175.2,
    daily_change: 2.5,
    increase: true,
  };

  beforeEach(() => {
    mockNavigate = jest.fn();
    useNavigation.mockReturnValue({ goBack: mockNavigate });
    useTheme.mockReturnValue({ colors: { background: "#fff" } });
  });

  test("renders the header with correct title", () => {
    const { getByText } = render(
      <StockDetail route={{ params: { stockData: mockStockData } }} />
    );
    expect(getByText("Stock Detail")).toBeTruthy();
  });

  test("renders stock details correctly", () => {
    const { getByText } = render(
      <StockDetail route={{ params: { stockData: mockStockData } }} />
    );

    expect(getByText("Name")).toBeTruthy();
    expect(getByText(mockStockData.name)).toBeTruthy();
    expect(getByText("Symbol")).toBeTruthy();
    expect(getByText(mockStockData.symbol)).toBeTruthy();
    expect(getByText("Price")).toBeTruthy();
    expect(getByText(mockStockData.price.toString())).toBeTruthy();
    expect(getByText("Increase")).toBeTruthy();
    expect(getByText(`+ ${mockStockData.daily_change}`)).toBeTruthy();
  });

  test("renders decrease text when increase is false", () => {
    const mockStockDataDecrease = { ...mockStockData, increase: false };
    const { getByText } = render(
      <StockDetail route={{ params: { stockData: mockStockDataDecrease } }} />
    );

    expect(getByText("Decrease")).toBeTruthy();
    expect(getByText(`${mockStockData.daily_change}`)).toBeTruthy();
  });

  test("navigates back on back button press", () => {
    const { getByTestId } = render(
      <StockDetail route={{ params: { stockData: mockStockData } }} />
    );

    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);
    expect(mockNavigate).toHaveBeenCalled();
  });
});
