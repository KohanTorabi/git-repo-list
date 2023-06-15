export const getLastUpdateTime = (pushedAt: string): string => {
  const currentTime = new Date();
  const lastUpdate = new Date(pushedAt);
  const timeDiff = Math.abs(currentTime.getTime() - lastUpdate.getTime());
  const minutesDiff = Math.floor(timeDiff / (1000 * 60));

  if (minutesDiff < 60) {
    return `Updated ${minutesDiff} minutes ago`;
  } else if (minutesDiff < 1440) {
    const hoursDiff = Math.floor(minutesDiff / 60);
    return `Updated ${hoursDiff} hours ago`;
  } else {
    const daysDiff = Math.floor(minutesDiff / 1440);
    return `Updated ${daysDiff} days ago`;
  }
};
