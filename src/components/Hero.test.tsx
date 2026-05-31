import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the title as a heading", () => {
    render(<Hero title="The Wicked Woods Equestrian Center" image="/hero.jpg" />);
    expect(
      screen.getByRole("heading", {
        name: /the wicked woods equestrian center/i,
      })
    ).toBeInTheDocument();
  });

  it("renders the subtitle when one is provided", () => {
    render(<Hero title="Welcome" subtitle="Boarding & Training" image="/hero.jpg" />);
    expect(screen.getByText(/boarding & training/i)).toBeInTheDocument();
  });

  it("does not render a subtitle when none is given", () => {
    render(<Hero title="Welcome" image="/hero.jpg" />);
    expect(screen.queryByText(/boarding & training/i)).not.toBeInTheDocument();
  });

  it("uses the title as the image's alt text", () => {
    render(<Hero title="Stables" image="/hero.jpg" />);
    expect(screen.getByAltText(/stables/i)).toBeInTheDocument();
  });
});