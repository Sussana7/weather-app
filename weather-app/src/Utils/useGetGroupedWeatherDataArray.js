export function useGetGroupedWeatherDataArray(timeArray, temperatureArray) {
  const daysMap = {};
  timeArray.forEach((t, i) => {
    const date = new Date(t);

    const dayKey = date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
    });

    if (!daysMap[dayKey]) {
      daysMap[dayKey] = {
        day: dayKey,
        temps: [],
      };
    }

    daysMap[dayKey].temps.push({
      hour: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
      temp: temperatureArray[i],
    });
  });

  // 🔹 Convert map → array with min/max
  const groupedDays = Object.values(daysMap).map((day) => {
    const temps = day.temps.map((t) => t.temp);
    return {
      day: day.day,
      highest: Math.max(...temps),
      lowest: Math.min(...temps),
      hourly: day.temps,
    };
  });

  return groupedDays;
}
