import { render, screen, fireEvent } from "@testing-library/react";
import { SubscribeButton } from ".";
import { createMock } from "ts-jest-mock";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

jest.mock("next-auth/react");

jest.mock("next/router");
const useSessionMocked = createMock(useSession);
const signInMocked = createMock(signIn);

describe("SubscribeButton component", () => {
  it("renders correctly ", () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });
    render(<SubscribeButton />);

    expect(screen.getAllByText("Subscribe Now"));
  });

  it("redirects user to sign in when not authenticated", () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe Now");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it("redirects to posts when user already has a subscription", () => {});

  const useRouterMocked = createMock(useRouter);
  useSessionMocked.mockReturnValueOnce({
    data: {
      user: { name: "John Doe", email: "jonhdoe@hotmail.com" },
      activeSubscription: "fake-active-subscription",
      expires: "fake-expires",
    },
    status: "authenticated",
  });

  const pushMock = jest.fn();
  useRouterMocked.mockReturnValueOnce({
    push: pushMock,
  } as any);

  render(<SubscribeButton />);

  const subscribeButton = screen.getByText("Subscribe Now");

  fireEvent.click(subscribeButton);

  expect(pushMock).toHaveBeenCalled();
});
