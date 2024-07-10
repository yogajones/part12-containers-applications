import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./Blog";

describe("Renders blog:", () => {
  const mockUser = { id: "999999999999999999999999991" };
  const blog = {
    title: "Title",
    author: "Author",
    url: "www",
    user: mockUser,
  };
  const mockLike = vi.fn();
  const mockDelete = vi.fn();

  test("renders only title and author by default", () => {
    const { container } = render(
      <Blog
        blog={blog}
        likeBlog={mockLike}
        deleteBlog={mockDelete}
        user={mockUser}
      />,
    );

    const hideDetails = container.querySelector("#hide-details");
    expect(hideDetails.textContent).toContain(blog.title);
    expect(hideDetails.textContent).toContain(blog.author);
    expect(hideDetails.textContent).not.toContain(blog.url);
    expect(hideDetails.textContent).not.toContain("Likes:");
  });
  test("renders also url, likes and user after clicking view", () => {
    const { container } = render(
      <Blog
        blog={blog}
        likeBlog={mockLike}
        deleteBlog={mockDelete}
        user={mockUser}
      />,
    );

    const showDetails = container.querySelector("#show-details");
    expect(showDetails.textContent).toContain(blog.title);
    expect(showDetails.textContent).toContain(blog.author);
    expect(showDetails.textContent).toContain(blog.url);
    expect(showDetails.textContent).toContain("Likes:");
  });
  test("shows hide button after clicking view", async () => {
    render(
      <Blog
        blog={blog}
        likeBlog={mockLike}
        deleteBlog={mockDelete}
        user={mockUser}
      />,
    );
    const user = userEvent.setup();
    const button = screen.getByText("view");
    await user.click(button);
    screen.getByText("hide");
  });
});

describe("Calls event handlers:", () => {
  const mockUser = { id: "999999999999999999999999991" };

  const blog = {
    title: "Title",
    author: "Author",
    url: "www",
    user: mockUser,
  };
  const mockLike = vi.fn();
  const mockDelete = vi.fn();

  test("calls like function twice after clicking the like button twice", async () => {
    render(
      <Blog
        blog={blog}
        likeBlog={mockLike}
        deleteBlog={mockDelete}
        user={mockUser}
      />,
    );
    const user = userEvent.setup();
    const viewButton = screen.getByText("view");
    await user.click(viewButton);
    const likeButton = screen.getByText("like");
    await user.click(likeButton);
    await user.click(likeButton);
    expect(mockLike.mock.calls).toHaveLength(2);
  });
});
