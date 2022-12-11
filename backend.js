const { app, BrowserWindow } = require("electron")

app.whenReady().then(_ => {
	new BrowserWindow({
		width: 800,
		height: 600
	}).loadFile("main.html")
})

app.on("window-all-closed", _ => {
	app.quit()
})
