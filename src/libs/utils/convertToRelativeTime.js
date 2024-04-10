export const convertToRelativeTime = (dateString) => {
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  const difference = currentDate - targetDate;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years + 'y';
  } else if (weeks > 0) {
    return weeks + 'w';
  } else if (days > 0) {
    return days + 'd';
  } else if (hours > 0) {
    return hours + 'h';
  } else if (minutes > 0) {
    return minutes + 'm';
  } else {
    return seconds + 's';
  }
};
