import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "@/components/layout/Sidebar";

describe("Sidebar", () => {
  it("renders all sections", () => {
    render(<Sidebar />);

    expect(screen.getByText("Inputs")).toBeInTheDocument();
    expect(screen.getByText("Outputs")).toBeInTheDocument();
    expect(screen.getByText("Options")).toBeInTheDocument();
  });

  it("opens item selector when add buttons are clicked", () => {
    render(<Sidebar />);

    // Click the add output button
    const addButtons = screen.getAllByRole("button");
    fireEvent.click(addButtons[0]);

    // Check if dialog appears
    expect(screen.getByText("Select output Item")).toBeInTheDocument();
  });
});
