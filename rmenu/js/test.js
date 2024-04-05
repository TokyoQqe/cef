let thisSpining = document.getElementById('spin_name');

cef.emit('Fish:start');

cef.on('Fish:work', (nameSpining) => {

	thisSpining.innerHTML = 'nameSpining';

});