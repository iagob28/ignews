import { render, screen } from "@testing-library/react";
import { SignInButton } from ".";
import { createMock } from "ts-jest-mock";
import { useSession } from "next-auth/react";

jest.mock("next-auth/react");
const useSessionMocked = createMock(useSession);

describe("SigninButton component", () => {
  it("renders correctly when user is not athenticated", () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("renders correctly when user is athenticated", () => {
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { name: "John Doe", email: "johndoe@hotmail.com" },
        expires: "fake-expires",
      },
      status: "authenticated",
    });
    render(<SignInButton />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
