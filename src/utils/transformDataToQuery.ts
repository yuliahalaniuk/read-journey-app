export const transformDataToQuery = (
  data: Partial<Record<"author" | "title" | "string", string>>
) => {
  return Object.entries(data)
    .reduce<string[]>((acc, [key, value]) => {
      if (value?.trim()) {
        const v = value.trim().toLowerCase().replace(/ /g, "+");
        acc.push(`in${key}:${v}`);
      }
      return acc;
    }, [])
    .join("+");
};
