import * as fs from "fs";
import * as path from "path";

export async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
  } catch (error) {
    throw new Error(`Failed to create directory ${dirPath}: ${error}`);
  }
}

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.promises.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function writeFile(
  filePath: string,
  content: string
): Promise<void> {
  try {
    await fs.promises.writeFile(filePath, content, "utf8");
  } catch (error) {
    throw new Error(`Failed to write file ${filePath}: ${error}`);
  }
}

export function resolveFromSrc(relativePath: string): string {
  return path.resolve(__dirname, "..", relativePath);
}
