export const formatMonthYear = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

export const formatMonthYearWithTime = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const formatDateOnly = (dateString) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export const formatTimeOnly = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const formatDateWithTime = (dateString) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `${day}-${month}-${year}, ${time}`;
};