import { expect, it } from "vitest";
import { Hi } from ".";

it("Hi funtion hould return hello", () => {
  expect(Hi()).toBe("hello");
});
