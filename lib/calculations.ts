import type { Device, FormulaType } from "./devices";

export type CalculationResult =
  | {
      status: "ok";
      productionTime: number;
      otkTime: number;
      viscosity: number;
    }
  | {
      status: "empty";
    }
  | {
      status: "error";
      reason: CalculationErrorReason;
    };

export type CalculationErrorReason = "invalidNumber" | "nonPositive" | "invalidOtkTime";

const formulaParameters: Record<FormulaType, { multiplier: number; divisor: number }> = {
  DIN4: {
    multiplier: 4.57,
    divisor: 452,
  },
  DIN6: {
    multiplier: 5.23,
    divisor: 482,
  },
};

export function calculateOtkTime(productionTime: number, coefficientK: number) {
  return productionTime * coefficientK;
}

export function calculateViscosity(otkTime: number, formulaType: FormulaType) {
  const { multiplier, divisor } = formulaParameters[formulaType];

  return multiplier * otkTime - divisor / otkTime;
}

export function calculateForDevice(device: Device, productionTime: number): CalculationResult {
  if (!Number.isFinite(productionTime)) {
    return { status: "error", reason: "invalidNumber" };
  }

  if (productionTime <= 0) {
    return { status: "error", reason: "nonPositive" };
  }

  const otkTime = calculateOtkTime(productionTime, device.coefficientK);

  if (otkTime <= 0) {
    return { status: "error", reason: "invalidOtkTime" };
  }

  return {
    status: "ok",
    productionTime,
    otkTime,
    viscosity: calculateViscosity(otkTime, device.formulaType),
  };
}

export function calculateFromInput(device: Device, input: string): CalculationResult {
  const normalizedInput = input.trim().replace(",", ".");

  if (normalizedInput === "") {
    return { status: "empty" };
  }

  const productionTime = Number(normalizedInput);

  return calculateForDevice(device, productionTime);
}

export function roundToDecimal(value: number, decimals: number) {
  const factor = 10 ** decimals;

  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function formatOtkTime(otkTime: number) {
  return roundToDecimal(otkTime, 1).toFixed(1);
}

export function formatViscosity(viscosity: number) {
  return String(Math.round(viscosity));
}
