export type Locale = "lv" | "ru";

export const languageOptions: ReadonlyArray<{ locale: Locale; label: string }> = [
  { locale: "lv", label: "LV" },
  { locale: "ru", label: "RU" },
];

export const translations = {
  lv: {
    appTitle: "Viskozitates kalkulators",
    department: "5. razosanas cehs",
    language: "Valoda",
    device: "Merierice",
    productionTime: "Razosanas laiks (sek)",
    productionPlaceholder: "Ievadiet sekundes",
    coefficient: "Koeficients K",
    results: "Rezultati",
    otkTime: "OTK laiks",
    viscosity: "Viskozitate",
    secondsUnit: "sek",
    viscosityUnit: "cSt",
    ready: "Gatavs",
    statusReady: "Izvelieties merierici un ievadiet laiku.",
    sourceLabel: "Avots: Excel korekcijas tabula",
    formulaLabel: "Formula",
    emptyState: "Rezultati paradisies uzreiz pec laika ievades.",
    errors: {
      invalidNumber: "Ievadiet derigu sekunzu skaitu.",
      nonPositive: "Razosanas laikam jabut lielakam par nulli.",
      invalidOtkTime: "OTK laikam jabut lielakam par nulli.",
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
