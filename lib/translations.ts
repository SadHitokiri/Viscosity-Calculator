export type Locale = "lv" | "ru";

export const languageOptions: ReadonlyArray<{ locale: Locale; label: string }> = [
  { locale: "lv", label: "LV" },
  { locale: "ru", label: "RU" },
];

export const translations = {
  lv: {
    appTitle: "Viskozitātes kalkulators",
    department: "5. ražošanas cehs",
    language: "Valoda",
    device: "Mērierīce",
    productionTime: "Ražošanas laiks (sek.)",
    productionPlaceholder: "Ievadiet sekundes",
    coefficient: "Koeficients K",
    results: "Rezultāti",
    otkTime: "Laiks OTK",
    viscosity: "Viskozitāte",
    secondsUnit: "sek.",
    viscosityUnit: "cSt",
    ready: "Gatavs",
    statusReady: "Izvēlieties mērierīci un ievadiet laiku.",
    sourceLabel: "Avots: Excel korekcijas tabula",
    formulaLabel: "Formula",
    emptyState: "Rezultāti parādīsies uzreiz pēc laika ievades.",
    errors: {
      invalidNumber: "Ievadiet derīgu sekunžu skaitu.",
      nonPositive: "Ražošanas laikam jābūt lielākam par nulli.",
      invalidOtkTime: "OTK laikam jābūt lielākam par nulli.",
    },
  },
  ru: {
    appTitle: "Калькулятор вязкости",
    department: "5-й производственный цех",
    language: "Язык",
    device: "Прибор",
    productionTime: "Время в цеху (сек)",
    productionPlaceholder: "Введите секунды",
    coefficient: "Коэффициент K",
    results: "Результаты",
    otkTime: "Время для ОТК",
    viscosity: "Вязкость",
    secondsUnit: "сек",
    viscosityUnit: "cSt",
    ready: "Готово",
    statusReady: "Выберите прибор и введите время.",
    sourceLabel: "Источник: таблица коррекции Excel",
    formulaLabel: "Формула",
    emptyState: "Результаты появятся сразу после ввода времени.",
    errors: {
      invalidNumber: "Введите корректное количество секунд.",
      nonPositive: "Время в цеху должно быть больше нуля.",
      invalidOtkTime: "Время для ОТК должно быть больше нуля.",
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
