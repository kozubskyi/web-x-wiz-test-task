export const findKeyByValue = <T>(
  obj: Record<string, T>,
  valueToFind: T
): string | null => {
  for (const key in obj) {
    if (obj[key] === valueToFind) {
      return key;
    }
  }
  return null;
};

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

export const unixTimeToLocalDate = (unixTime: number) => {
  const date = new Date(unixTime);
  const currentDate = new Date();

  const formattedDate = date.toLocaleDateString(undefined, dateOptions);

  // Перевіряємо, чи сьогоднішня дата
  if (date.toDateString() === currentDate.toDateString()) {
    // Сьогодні - повертаємо тільки час
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleTimeString(undefined, timeOptions);
  } else {
    // Інакше повертаємо всю дату
    return formattedDate;
  }
};

export const formatToLocalDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString(undefined, dateOptions);
};

export const generateRandomString = (size = 16) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-----';
  let randomString = '';

  for (let i = 0; i < characters.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString.slice(0, size);
};

export const generateRandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
