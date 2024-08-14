import { exec } from 'child_process';
import express from 'express';
import * as fs from 'fs'

const app = express();
const PORT = 3000;

app.use(express.json())

app.post('/on', async (req, res) => {
    await exec("J:/MAA-v5.4.0-win-x64/MAA.exe")
    console.log("200 on")
    res.status(200).send(JSON.stringify({
        data: "已发送请求."
    }));
})

app.post('/off', async (req, res) => {
    await exec("taskkill /IM MAA.exe /F");
    await exec("taskkill /IM MuMuPlayer.exe /F");
    console.log("200 off")
    res.status(200).send(JSON.stringify({
        data: "已关闭进程."
    }));
})

app.post('/sc', async (req, res) => {
    await exec(`nircmd.exe savescreenshot "Z:/external/main/screenshot/screenshot.png"`)
    console.log("200 sc")
    res.status(200).send(JSON.stringify({
        data: "已捕获截图."
    }));
})

app.listen(PORT, () => {
    console.log(`Express with Typescript! http://localhost:${PORT}`);
});