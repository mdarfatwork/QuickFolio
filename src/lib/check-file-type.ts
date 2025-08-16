export function checkFileType(file: File) {
  if (!file?.name || file.name.trim() === "") return false;

  const validMimeTypes = ["application/pdf"];
  if (validMimeTypes.includes(file.type)) return true;

  const fileExtension = file.name.split(".").pop()?.toLowerCase();
  return fileExtension === "pdf";
}
