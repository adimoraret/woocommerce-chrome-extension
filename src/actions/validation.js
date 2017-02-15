export function validateResource(resource) {
  if (!resource) {
    throw new Error("Invalid resource");
  }
}