export function convertEnvToCamelCase(v: string): string {
  return v
    .toLowerCase()
    .split("_")
    .map((w, i) => {
      if (i > 0) {
        return w.replace(/^[a-z]/, (l) => {
          return l.toUpperCase();
        });
      }

      return w;
    })
    .join("");
}
