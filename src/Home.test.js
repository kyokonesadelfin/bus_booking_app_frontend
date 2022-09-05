import { render, screen } from '@testing-library/react';
import Home from "./pages/home/Home";

test('renders the landing page', () => {
    render(<Home />);
    
    expect(screen.getByRole("p")).toBeInTheDocument();
    expect(screen.getByRole("input")).toHaveDisplayValue("Search for your next bus trip...");
    expect(screen.getByRole("button", { name: "Book Now!" }));
    expect(screen.getByRole("img")).toBeInTheDocument();
  });