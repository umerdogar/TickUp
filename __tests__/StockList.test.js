import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import StockList from "../src/Stock/StockList/StockList";
import stockData from "../assets/data/dummyData";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  useTheme: jest.fn(),
}));

describe("StockList Component", () => {
  let mockNavigate;

  beforeEach(() => {
    mockNavigate = jest.fn();
    useNavigation.mockReturnValue({ navigate: mockNavigate });
    useTheme.mockReturnValue({ colors: { background: "#fff" } });
  });

  test("renders the Header correctly", () => {
    const { getByText } = render(<StockList />);
    expect(getByText("Stock List")).toBeTruthy();
  });

  test("navigates to StockDetail on item press", () => {
    const { getByText } = render(<StockList />);
    const stockItem = stockData[0];

    fireEvent.press(getByText(stockItem.name));
    expect(mockNavigate).toHaveBeenCalledWith("StockDetail", {
      stockData: stockItem,
    });
  });
});
