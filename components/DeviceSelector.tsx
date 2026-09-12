import type { Device } from "../lib/devices";

type DeviceSelectorProps = {
  devices: readonly Device[];
  selectedDeviceId: string;
  label: string;
  onDeviceChange: (deviceId: string) => void;
};

export function DeviceSelector({
  devices,
  selectedDeviceId,
  label,
  onDeviceChange,
}: DeviceSelectorProps) {
  return (
    <label className="flex flex-col gap-2.5">
      <span className="text-sm font-bold uppercase tracking-[0.08em] text-steel-600">
        {label}
      </span>
      <select
        value={selectedDeviceId}
        onChange={(event) => onDeviceChange(event.target.value)}
        className="h-14 w-full rounded-lg border border-steel-300 bg-white px-4 text-lg font-bold text-steel-950 outline-none transition focus:border-gauge-600 focus:ring-4 focus:ring-gauge-500/20"
      >
        {devices.map((device) => (
          <option key={device.id} value={device.id}>
            {device.name}
          </option>
        ))}
      </select>
    </label>
  );
}
