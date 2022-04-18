import { render, screen } from "@testing-library/react";
import { createMock } from "ts-jest-mock";
import Posts, { getStaticProps } from "../pages/posts";
import { getPrismicClient } from "../services/prismics";

const posts = [
  {
    slug: "my-new-post",
    title: "My New Post",
    excerpt: "Post excerpt",
    updatedAt: "September, 28",
  },
];

jest.mock("../services/prismics");

describe("Posts page", () => {
  it("Renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("My New Post")).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const getPrismicClientMocked = createMock(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      getAllByType: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: "my-new-post",
            data: {
              title: [
                {
                  type: "heading",
                  text: "My New Post",
                },
              ],
              content: [
                {
                  type: "paragraph",
                  text: "Post excerpt",
                },
              ],
            },
            last_publication_date: "09-28-2022",
          },
        ],
      }),
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: {
            slug: "my-new-post",
            title: "My New Post",
            excerpt: "Post excerpt",
            updatedAt: "28 de setembro de 2022",
          },
        },
      })
    );
  });
});
