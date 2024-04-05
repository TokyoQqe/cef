cef.on("notifical:player:data", (headers, body, text, colors, hide, time) => {
	Toast.add({header: '1', body: '24', color: '#ff0000', autohide: false, delay: 5000});
});