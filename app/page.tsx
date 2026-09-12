"use client";

import { useMemo, useState } from "react";
import { DeviceSelector } from "../components/DeviceSelector";
import { ResultCard } from "../components/ResultCard";
import { calculateFromInput, formatOtkTime, formatViscosity } from "../lib/calculations";
import { devices } from "../lib/devices";
import { languageOptions, type Locale, translations } from "../lib/translations";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("lv");
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>(devices[0].id);
  const [productionTime, setProductionTime] = useState("");
  const copy = translations[locale];

  const selectedDevice = useMemo(
    () => devices.find((device) => device.id === selectedDeviceId) ?? devices[0],
    [selectedDeviceId],
  );

  const result = calculateFromInput(selectedDevice, productionTime);
  const canShowResults = result.status === "ok";
  const validationMessage = result.status === "error" ? copy.errors[result.reason] : "";

  return (
    <main className="min-h-screen px-4 py-5 text-steel-900 sm:px-6 sm:py-10">
      <section className="mx-auto flex w-full max-w-[34rem] flex-col gap-5">
        <header className="rounded-lg border border-steel-300 bg-white px-4 py-4 shadow-panel">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-gauge-700">
                {copy.department}
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-normal text-steel-950 sm:text-4xl">
                {copy.appTitle}
              </h1>
            </div>

            <div className="shrink-0" aria-label={copy.language}>
              <div className="grid grid-cols-2 rounded-lg border border-steel-300 bg-steel-100 p-1">
                {languageOptions.map((option) => (
                  <button
                    key={option.locale}
                    type="button"
                    onClick={() => setLocale(option.locale)}
                    className={`h-10 min-w-11 rounded-md px-3 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-gauge-500/20 ${
                      locale === option.locale
                        ? "bg-steel-950 text-white shadow-sm"
                        : "text-steel-700 hover:bg-white"
                    }`}
                    aria-pressed={locale === option.locale}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="rounded-lg border border-steel-300 bg-white p-4 shadow-panel sm:p-5">
          <div className="flex flex-col gap-5">
            <DeviceSelector
              devices={devices}
              selectedDeviceId={selectedDevice.id}
              label={copy.device}
              onDeviceChange={setSelectedDeviceId}
            />

            <label className="flex flex-col gap-2.5">
              <span className="text-sm font-bold uppercase tracking-[0.08em] text-steel-600">
                {copy.productionTime}
              </span>
              <input
                value={productionTime}
                onChange={(event) => setProductionTime(event.target.value)}
                inputMode="decimal"
                autoComplete="off"
                placeholder={copy.productionPlaceholder}
                aria-describedby="production-time-message"
                className="h-18 w-full rounded-lg border border-steel-400 bg-white px-4 text-center text-4xl font-black text-steel-950 outline-none transition placeholder:text-xl placeholder:font-semibold placeholder:text-steel-400 focus:border-gauge-600 focus:ring-4 focus:ring-gauge-500/20"
              />
            </label>

            <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg border border-steel-300 bg-steel-50 px-4 py-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-steel-600">
                  {copy.coefficient}
                </p>
                <p className="mt-1 text-sm font-semibold text-steel-500">{copy.sourceLabel}</p>
              </div>
              <p className="text-3xl font-black tabular-nums text-steel-950">
                {selectedDevice.coefficientK.toFixed(3)}
              </p>
            </div>

            <div
              id="production-time-message"
              aria-live="polite"
              className={`min-h-6 rounded-md px-3 py-1 text-center text-sm font-bold ${
                validationMessage ? "bg-red-50 text-red-800" : "text-steel-500"
              }`}
            >
              {validationMessage || copy.statusReady}
            </div>
          </div>
        </div>

        <section className="grid gap-4" aria-label={copy.results} aria-live="polite">
          <ResultCard
            label={copy.otkTime}
            value={canShowResults ? formatOtkTime(result.otkTime) : ""}
            unit={copy.secondsUnit}
            mutedText={copy.ready}
          />
          <ResultCard
            label={copy.viscosity}
            value={canShowResults ? formatViscosity(result.viscosity) : ""}
            unit={copy.viscosityUnit}
            mutedText={copy.emptyState}
          />
        </section>

        <footer className="rounded-lg border border-steel-300 bg-white px-4 py-3 text-sm font-semibold text-steel-600">
          <span className="font-black text-steel-800">{copy.formulaLabel}:</span>{" "}
          {selectedDevice.formulaType === "DIN4"
            ? "4.57 x T - 452 / T"
            : "5.23 x T - 482 / T"}
        </footer>
      </section>
    </main>
  );
}
