import { describe, expect, it } from "vitest";

import { signInSchema, signUpSchema } from "@/lib/validators/auth";

describe("auth validators", () => {
  it("validates and normalizes sign-up payload", () => {
    const parsed = signUpSchema.parse({
      name: "Ada Lovelace",
      email: "ADA@EXAMPLE.COM",
      password: "password123",
    });

    expect(parsed.email).toBe("ada@example.com");
  });

  it("rejects invalid sign-up payload", () => {
    const parsed = signUpSchema.safeParse({
      name: "A",
      email: "bad-email",
      password: "123",
    });

    expect(parsed.success).toBe(false);
  });

  it("validates and normalizes sign-in payload", () => {
    const parsed = signInSchema.parse({
      email: "USER@EXAMPLE.COM",
      password: "password123",
    });

    expect(parsed.email).toBe("user@example.com");
  });

  it("rejects invalid sign-in payload", () => {
    const parsed = signInSchema.safeParse({
      email: "bad-email",
      password: "123",
    });

    expect(parsed.success).toBe(false);
  });
});
