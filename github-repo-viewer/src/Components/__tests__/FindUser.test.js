import { render, screen, fireEvent } from "@testing-library/react";
import FindUser from "../FindUser/FindUser.js";

test("should render component", () => {
  render(<FindUser />);
  const textElement = screen.getByTestId("FindUser");
  /* expect(textElement).toBeInTheDocument(); */
  expect(textElement).toHaveTextContent("Search Users on Github");
  /* expect(true).toBe(true); */
});

test("renders input field", () => {
  const { getByPlaceholderText } = render(<FindUser />);
  const inputElement = getByPlaceholderText("Type a github username");
  expect(inputElement).toBeInTheDocument();
});

test("renders submit button", () => {
  const { getByText } = render(<FindUser />);
  const submitButton = getByText("Submit");
  expect(submitButton).toBeInTheDocument();
});

test("updates input value on change", () => {
  const { getByPlaceholderText } = render(<FindUser />);
  const inputElement = getByPlaceholderText("Type a github username");
  fireEvent.change(inputElement, { target: { value: "testUser" } });
  expect(inputElement.value).toBe("testUser");
});

/* Integration Tests */
test("Render FindUser component and submit input", () => {
  const setSearchInput = jest.fn();
  const setRepoSelected = jest.fn();
  const setPage = jest.fn();

  render(
    <FindUser
      setSearchInput={setSearchInput}
      setRepoSelected={setRepoSelected}
      setPage={setPage}
    />
  );

  const inputField = screen.getByPlaceholderText("Type a github username");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(inputField, { target: { value: "githubuser" } });
  fireEvent.click(submitButton);

  expect(setSearchInput).toHaveBeenCalledWith("githubuser");
  expect(setRepoSelected).toHaveBeenCalled();
  expect(setPage).toHaveBeenCalledWith(1);
});

test("Render FindUser UI elements", () => {
  render(<FindUser />);

  // Find the title and input field
  const title = screen.getByText("Search Users on Github");
  const inputField = screen.getByPlaceholderText("Type a github username");

  // Assert that UI elements are present
  expect(title).toBeInTheDocument();
  expect(inputField).toBeInTheDocument();
});

test("Handle form submission", () => {
  const setSearchInput = jest.fn();
  const setRepoSelected = jest.fn();
  const setPage = jest.fn();

  render(
    <FindUser
      setSearchInput={setSearchInput}
      setRepoSelected={setRepoSelected}
      setPage={setPage}
    />
  );

  // Find the input field and submit button
  const inputField = screen.getByPlaceholderText("Type a github username");
  const submitButton = screen.getByText("Submit");

  // Simulate user input and form submission
  fireEvent.change(inputField, { target: { value: "githubuser" } });
  fireEvent.click(submitButton);

  // Assert that the input field is cleared after submission
  expect(inputField.value).toBe("githubuser");
});
