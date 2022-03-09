module.exports = function menuTemplate(win) {
    return [
        {
            label: "Game",
            submenu: [
                {
                    label: "New Game",
                    click() {
                        console.log("New Game");
                    }
                },
                {
                    label: "Quit",
                    accelerator: "Ctrl+Q",
                    click() {
                        console.log("Quit");
                    }
                }
            ]
        },
        {
            label: "Options",
            submenu: [
                {
                    label: "Zoom In",
                    accelerator: "CmdOrCtrl+Plus",
                    click() {
                        const currentZoom = win.webContents.getZoomFactor();
                        win.webContents.zoomFactor = currentZoom + 0.25;
                        console.log("Zoom in");
                    }
                },
                {
                    label: "Zoom Out",
                    accelerator: "Ctrl+-",
                    click() {
                        const currentZoom = win.webContents.getZoomFactor();
                        win.webContents.zoomFactor = currentZoom - 0.25;
                        console.log("Zoom out");
                    }
                }
            ]
        }
    ];
}