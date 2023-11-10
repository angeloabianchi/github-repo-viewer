import { render, screen, fireEvent } from "@testing-library/react";
import { generateURL, fetchData } from "../FetchData/FetchData";

test("generateURL should return the correct URL for users", () => {
  const result = generateURL("user", "john", 1);
  expect(result).toBe("https://api.github.com/users/john");
});

test("generateURL should return the correct URL for organizations", () => {
  const result = generateURL("orgs", "danda", 1);
  expect(result).toBe("https://api.github.com/users/danda/orgs");
});

/* Integration Tests */
test("Fetch data from GitHub API successfully", async () => {
  const group = "user";
  const input = "githubuser";
  const page = 1;

  const result = await fetchData(group, input, page);

  expect(result).toHaveProperty("result");
  expect(result).toHaveProperty("lastPageNumber");
  expect(result.error).toBeUndefined();
});

test("Handle invalid input", async () => {
  const group = "user";
  const input = "fakeuser_lll";
  const page = 1;

  const result = await fetchData(group, input, page);

  expect(result.error).toBe(true);
  expect(result.message).toMatch(/not found/);
  expect(result.result).toBeUndefined();
  expect(result.lastPageNumber).toBeUndefined();
});

test("Handle 404 response", async () => {
  const group = "user";
  const input = "nonexistentuser";
  const page = 1;

  const result = await fetchData(group, input, page);

  expect(result.error).toBe(true);
  expect(result.message).toMatch(/not found/);
  expect(result.result).toBeUndefined();
  expect(result.lastPageNumber).toBeUndefined();
});
