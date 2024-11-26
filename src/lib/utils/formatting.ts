export function formatResourceName(name: string): string {
  // Convert camelCase to separate words and capitalize first letter
  return (
    name
      // Insert a space before capital letters
      .replace(/([A-Z])/g, " $1")
      // Capitalize the first letter
      .replace(/^./, (str) => str.toUpperCase())
      // Remove any extra spaces
      .trim()
  );
}
