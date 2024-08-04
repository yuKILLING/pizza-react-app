const { promisify } = require("util");
const fs = require("fs");
const { execSync } = require("child_process");
const writeFile = promisify(fs.writeFile);
const fsp = require("node:fs/promises");
const path = require("path");
const mime = require("mime-types");

class UploadController {
  async uploadFile(req, res) {
    console.log("Запрос на выкладывание файлов");
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("Нет файла.");
    }
    const file = req.files.file;
    const fileExtension = req.body.fileExtension;
    const fileId = req.body.id;
    try {
      await writeFile(`./library/${fileId}.${fileExtension}`, file.data);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Ошибка с записью файла");
    }
    console.log(`Файл записан с id=${fileId}`);
    res.send("Файл записан");
  }

  download(req, res) {
    const deviceId = req.query.id;
    const libraryPath = path.join(__dirname, "..", "library");
    const files = fs.readdirSync(libraryPath);
    const file = files.find((f) => path.parse(f).name === deviceId);
    if (!file) {
      console.error(`Файл не найден: ${deviceId}`);
      res.sendStatus(404);
      return;
    }
    const filePath = path.join(libraryPath, file);
    const contentType = mime.lookup(file);
    res.setHeader("Content-Type", contentType);
    res.sendFile(filePath);
    res.statusMessage = file;
    res.status(200);
  }
}

module.exports = new UploadController();
