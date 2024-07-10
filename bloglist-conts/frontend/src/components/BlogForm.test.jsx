import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from "./BlogForm";

describe("Calls event handlers:", () => {
  const mockCreateBlog = vi.fn();

  test("submits the form passing proper data", async () => {
    const { container } = render(<BlogForm createBlog={mockCreateBlog} />);
    const user = userEvent.setup();

    const title = container.querySelector("#title-input");
    const author = container.querySelector("#author-input");
    const url = container.querySelector("#url-input");
    await user.type(title, "Titles n such");
    await user.type(author, "Thor the Author");
    await user.type(url, "www");

    const createButton = screen.getByText("create");
    await user.click(createButton);
    expect(mockCreateBlog.mock.calls).toHaveLength(1);
    expect(mockCreateBlog.mock.calls[0][0].title).toBe("Titles n such");
    expect(mockCreateBlog.mock.calls[0][0].author).toBe("Thor the Author");
    expect(mockCreateBlog.mock.calls[0][0].url).toBe("www");
  });
});
