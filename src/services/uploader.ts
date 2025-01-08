import { Request } from "express";
import multer from "multer";
import path from "path";

type DestinationCallBack = (error: Error | null, destination: string) => void;
type FileNameCallBack = (error: Error | null, fileName: string) => void;

export const uploader = (type: "memoryStorage" | "diskStorage", filePrefix: string, folderName?: string) => {
  const defaultDir = path.join(__dirname, "../../public");

  const storage =
    type == "memoryStorage"
      ? multer.memoryStorage()
      : multer.diskStorage({
          destination: (req: Request, file: Express.Multer.File, cb: DestinationCallBack) => {
            const destination = folderName ? defaultDir + folderName : defaultDir;
            cb(null, destination);
          },
          filename: (req: Request, file: Express.Multer.File, cb: FileNameCallBack) => {
            const originalNamePart = file.originalname.split(".");
            const fileExtension = originalNamePart[originalNamePart.length - 1];
            const newFileName = filePrefix + Date.now() + "." + fileExtension;
            cb(null, newFileName);
          },
        });

  return multer({ storage });
};
