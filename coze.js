const puppeteer = require("puppeteer-extra");
const EventEmitter = require("events");
const FormData = require("form-data");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// const {executablePath} = require('puppeteer')
const UPLOAD_URL = '';

class CozeAIChatController extends EventEmitter {
  constructor() {
    super();
    this.browser = null;
    this.page = null;
    this.imageUrl = null;
  }

  async initialize() {}

  async preparePage() {}

  async clickSendButton() {
    // 调用 Coze API
    // 调用成功后回调
    this.emit("end_turn", {});
  }

  async uploadImage(filePath) {
    // 上传成功后，更新 imageUrl
    const formData = new FormData();
    formData.append("file", fs.createReadStream(filePath));
    const res = await fetch(UPLOAD_URL, {
      method: "POST",
      body: formData,
    });

    console.log(res);
  }

  async close() {}
}

module.exports = CozeAIChatController;
