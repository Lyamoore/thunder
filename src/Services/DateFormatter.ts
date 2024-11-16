export const dateFormatter = (localTime: string): string => {
  const date = new Date(localTime);

  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "long" });

  const formattedDate = `${day} ${month}`;

  return formattedDate;
};
