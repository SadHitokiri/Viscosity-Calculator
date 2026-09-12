import { describe, expect, it } from "vitest";
import {
  calculateForDevice,
  calculateFromInput,
  calculateOtkTime,
  formatOtkTime,
  formatViscosity,
  roundToDecimal,
} from "../lib/calculations";
import { devices } from "../lib/devices";

function expectFormattedResult(deviceId: string, input: number, expectedOtk: string, expectedViscosity: string) {
  const device = devices.find((item) => item.id === deviceId);

  expect(device).toBeDefined();

  const result = calculateForDevice(device!, input);

  expect(result.status).toBe("ok");

  if (result.status !== "ok") {
    return;
  }

  expect(formatOtkTime(result.otkTime)).toBe(expectedOtk);
  expect(formatViscosity(result.viscosity)).toBe(expectedViscosity);
}

describe("viscosity calculations", () => {
  it("matches DIN 4 verification data", () => {
    expectFormattedResult("din-4-250810458", 80, "74.2", "333");
  });

  it("matches ВЗ-4 verification data", () => {
    expectFormattedResult("vz-4-2590", 80, "78.5", "353");
  });

  it("matches DIN 6 verification data", () => {
    expectFormattedResult("din-6-250810668", 100, "107.3", "557");
  });

  it("matches ВЗ-6 verification data", () => {
    expectFormattedResult("vz-6-931", 100, "103.1", "535");
  });

  it("supports decimal input", () => {
    const result = calculateFromInput(devices[0], "80.5");

    expect(result.status).toBe("ok");

    if (result.status === "ok") {
      expect(result.productionTime).toBe(80.5);
      expect(formatOtkTime(result.otkTime)).toBe("74.6");
    }
  });

  it("supports comma decimal input", () => {
    const result = calculateFromInput(devices[0], "80,5");

    expect(result.status).toBe("ok");
  });

  it("rejects zero input", () => {
    expect(calculateFromInput(devices[0], "0")).toEqual({
      status: "error",
      reason: "nonPositive",
    });
  });

  it("rejects negative input", () => {
    expect(calculateFromInput(devices[0], "-1")).toEqual({
      status: "error",
      reason: "nonPositive",
    });
  });

  it("rejects invalid input", () => {
    expect(calculateFromInput(devices[0], "abc")).toEqual({
      status: "error",
      reason: "invalidNumber",
    });
  });

  it("returns an empty state for blank input", () => {
    expect(calculateFromInput(devices[0], " ")).toEqual({ status: "empty" });
  });

  it("rounds OTK time to one decimal", () => {
    expect(formatOtkTime(calculateOtkTime(80, 0.981))).toBe("78.5");
  });

  it("rounds using ordinary half-up behavior for positive values", () => {
    expect(roundToDecimal(12.25, 1)).toBe(12.3);
  });
});
