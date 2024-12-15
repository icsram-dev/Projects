import fs from "fs";

class FileStorage {
  constructor(fileName) {
    this.fileName = fileName;
  }

  save(data) {
    fs.writeFileSync(this.fileName, JSON.stringify(data), "utf-8");
  }

  load() {
    try {
      const data = fs.readFileSync(this.fileName, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
}

export default FileStorage;
