import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges classes and resolves tailwind conflicts", () => {
    expect(cn("p-2", "text-sm", "p-4")).toBe("text-sm p-4");
  });

  it("omits falsy classes", () => {
    expect(cn("font-medium", false && "hidden", undefined, "text-zinc-900")).toBe(
      "font-medium text-zinc-900",
    );
  });
});
