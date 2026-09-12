export type FormulaType = "DIN4" | "DIN6";

export type Device = {
  id: string;
  name: string;
  coefficientK: number;
  formulaType: FormulaType;
};

export const devices = [
  {
    id: "din-4-250810458",
    name: "DIN 4 (250810458)",
    coefficientK: 0.927,
    formulaType: "DIN4",
  },
  {
    id: "vz-4-2590",
    name: "ВЗ-4 (2590)",
    coefficientK: 0.981,
    formulaType: "DIN4",
  },
  {
    id: "din-6-250810668",
    name: "DIN 6 (250810668)",
    coefficientK: 1.073,
    formulaType: "DIN6",
  },
  {
    id: "vz-6-931",
    name: "ВЗ-6 (931)",
    coefficientK: 1.031,
    formulaType: "DIN6",
  },
] as const satisfies readonly Device[];
