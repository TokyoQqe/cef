var dialogId = -1, dialog_type = 0, response = 1, listitem = 0, inputtext = "None", max_listitem = 0;

function _0x44ed(){var _0x54c0e3=['9014424MxlHMO','set_focus','49318227TkbpYq','932764eEFFIX','80ZVEjNO','426372gNtWqE','7633800pLtuGc','2iEXPqk','610922TjRUOf','2424651NAlOlm','show_dialog'];_0x44ed=function(){return _0x54c0e3;};return _0x44ed();}function _0xcef3(_0x43ebc,_0x5265ec){var _0x44edf2=_0x44ed();return _0xcef3=function(_0xcef33d,_0x4cf3ec){_0xcef33d=_0xcef33d-0x90;var _0x4d094a=_0x44edf2[_0xcef33d];return _0x4d094a;},_0xcef3(_0x43ebc,_0x5265ec);}var _0x21b142=_0xcef3;(function(_0x252a55,_0x3ea63c){var _0x396cff=_0xcef3,_0x47d8ee=_0x252a55();while(!![]){try{var _0x3e12bb=parseInt(_0x396cff(0x91))/0x1+parseInt(_0x396cff(0x90))/0x2*(-parseInt(_0x396cff(0x92))/0x3)+-parseInt(_0x396cff(0x9a))/0x4+-parseInt(_0x396cff(0x98))/0x5*(parseInt(_0x396cff(0x99))/0x6)+-parseInt(_0x396cff(0x97))/0x7+-parseInt(_0x396cff(0x94))/0x8+parseInt(_0x396cff(0x96))/0x9;if(_0x3e12bb===_0x3ea63c)break;else _0x47d8ee['push'](_0x47d8ee['shift']());}catch(_0x536fae){_0x47d8ee['push'](_0x47d8ee['shift']());}}}(_0x44ed,0xee873),cef['on'](_0x21b142(0x93),(_0x10e987,_0x2e7a2c,_0x5ce5b5,_0x30b904,_0x6b722c,_0x1f22c4)=>{var _0x2f948a=_0x21b142;create_dialog(_0x10e987,_0x2e7a2c,_0x5ce5b5,_0x30b904,_0x6b722c,_0x1f22c4),cef[_0x2f948a(0x95)](!![]);}));

function update_color_list(list) {
    if(dialog_type === 2) {
    	let dialog_item = document.querySelectorAll('.dialogItem');
    	dialog_item.forEach( e => e.className = "dialogItem" );  	
    	for(var i = 0; i < document.getElementsByTagName("span").length; i++) {
    		document.getElementsByTagName("span")[i].className = "hover";
    	}	      
    
    	document.getElementsByClassName("dialogItem")[list].className = "dialogItem white_back";
    	for( var i = 0; i < document.getElementsByClassName("dialogItem")[list].children.length; i++) {
    		document.getElementsByClassName("dialogItem")[list].children[i].className = "hover active_text";
    	}	
    
    	listitem = document.getElementsByClassName("dialogItem")[list].getAttribute("data-value");        
    }
    else {
    	let dialog_item = document.querySelectorAll('.dialogItem');
    	dialog_item.forEach( e => e.className = "dialogItem tablist_headers" );  	
    	for(var i = 0; i < document.getElementsByTagName("span").length; i++) {
    		document.getElementsByTagName("span")[i].className = "hover";
    	}	      
    
    	document.getElementsByClassName("dialogItem")[list].className = "dialogItem tablist_headers white_back";
    	for( var i = 0; i < document.getElementsByClassName("dialogItem")[list].children.length; i++) {
    // 		document.getElementsByClassName("dialogItem")[list].children[i].className = "dialogItemHeader";
    // 	    console.log(document.getElementsByClassName("dialogItem")[list].children);
            var child = document.getElementsByClassName("dialogItem")[list].children[i];
    	    
    	   // console.log(child.children.length);
    	    
    	    for( var j = 0; j < child.children.length; j++) {
    	       // console.log(child.children[j]);
    	        child.children[j].className = "active_text";
    	    }
    	}	
    
    	listitem = document.getElementsByClassName("dialogItem")[list].getAttribute("data-value");        
    }
}

window.onclick = function (event) {
	if(dialogId != -1) {
		if(event.target.parentNode.id === "dialogItem") {
			listitem = event.target.parentNode.getAttribute("data-value");
			callcack_dialog_response();		
		}
		if(event.target.id === "dialogItem") {
			if(listitem === event.target.getAttribute("data-value")) {
				// callcack_dialog_response();
				return ;
			}
			
			listitem = event.target.getAttribute("data-value");
			update_color_list(listitem);

			callcack_dialog_response();
	    }
	}
};

window.addEventListener("keyup", (event) => {
	if(dialogId != -1) {
	    if(event.keyCode === 27) {
	    	response = 0;
	    	callcack_dialog_response();
	    }
	    if(event.keyCode === 13) {
	    	response = 1;
	    	callcack_dialog_response();
	    }
	    if(dialog_type === 2 || dialog_type === 5) {
		    if(event.keyCode === 40) {
		    	if(max_listitem === document.getElementsByClassName("dialogItem")[listitem].getAttribute("data-value")) return ;
		    	listitem++;
		    	update_color_list(listitem);
		    }
		    if(event.keyCode === 38) {
		    	if(listitem === document.getElementsByClassName("dialogItem")[0].getAttribute("data-value")) return ;
		    	listitem --;
		    	update_color_list(listitem);
		    }
	    }
	}
});


function create_dialog(dialog_id, dialogType, dialogHeader, dialogText, button_1, button_2) {

	dialogId = dialog_id, response = 1, listitem = 0, inputtext = "", dialog_type = dialogType;

	if(dialogType === 0 || dialogType === 1 || dialogType === 3) {
		dialogText = dialogText.replace(/[\n]/g, "<br />");
	}
    var replacedColors = dialogText.replace(/\{(\w{3}|\w{6})\}[^{}]*/gi, (textWithColor) => {
		return textWithColor.replace(/{\w*\}/, (colorInBrackets) => {
			return `<span class="hover" style='--i: #${colorInBrackets.slice(1, -1).toLowerCase()}; --g: #${colorInBrackets.slice(1, -1).toLowerCase()};'>`
		}) + '</span>';
	});
    var header = dialogHeader.replace(/\{(\w{3}|\w{6})\}[^{}]*/gi, (textWithColor) => {
		return textWithColor.replace(/{\w*\}/, (colorInBrackets) => {
			return `<span class="hover" style='--i: #${colorInBrackets.slice(1, -1).toLowerCase()};'>`
		}) + '</span>';
	});	

   	var element = document.getElementById("dialog_container");
    if(element) { element.remove(); }   

	var body = document.getElementsByTagName("body")[0];
	var dialog_container = document.createElement('div');

	dialog_container.id = "dialog_container";
	body.append(dialog_container);

	var dialog_header = document.createElement('div');
	dialog_header.innerHTML = header;
	dialog_header.className = "dialogHeader";
	dialog_container.append(dialog_header);

	if(dialogType === 0 || dialogType === 1 || dialogType === 3) {
		var dialog_text = document.createElement('div');
		dialog_text.innerHTML = replacedColors;
		dialog_text.className = "dialogText";
		dialog_container.append(dialog_text);

		if(dialogType === 1 || dialogType === 3) {
			var input = document.createElement('input');
			input.placeholder = "Введите текст в это поле";
			input.id = "dialogInput";
			input.className = "dialog_input";
			input.setAttribute("autofocus", "autofocus");
// 			document.getElementById('dialog_input').select();
			if(dialogType == 3) { input.setAttribute("type", "password"); }
			dialog_container.append(input);
			
			input.select();
		}	
	}

	var dialog_text = document.createElement('div');
	dialog_text.className = "dialogText";
	dialog_container.append(dialog_text);

	if(dialogType === 2) {
		var tabulations_delete = replacedColors.replace(/[\t]/, "");
        var lists = tabulations_delete.split(/[\n]/);      
        for(var i = 0; i < lists.length; i ++) {
        	if(lists[i].length === 0) continue;
        	else if (lists[i] === "</span>") continue;
	        var dialog_item = document.createElement("div");
	        dialog_item.innerHTML = `${lists[i]}`;     
	        dialog_item.id = "dialogItem";
	        dialog_item.setAttribute("data-value", i);

	        if(i === 0) {
				dialog_item.className = "dialogItem white_back";

				for(var j = 0; j < dialog_item.children.length; j++) {
					dialog_item.children[j].style = "color: --i: #fff;";
				}
	        }
	       	else dialog_item.className = "dialogItem";
	        dialog_text.append(dialog_item);
	        max_listitem = dialog_item.getAttribute("data-value");
    	}
    	listitem = document.getElementsByClassName("dialogItem")[0].getAttribute("data-value");
	}

	if(dialogType === 5) {

    	var replaceToDIV = (string) => {
			return string.split("\t").map((s) => `<div class="dialogItemHeader">${s}</div>`).join("");
		}
		var lists = replacedColors.split(/[\n]/);
		for(var i = 0; i < lists.length; i ++) {
        	if(lists[i].length === 0) continue;
        	else if (lists[i] === "</span>") continue;
			var set_tabulation = replaceToDIV(lists[i]);

            let count = lists[i].split("\t").length;

            if ( i == 0 ) {
	            var dialogTablist = document.createElement('div');
	            dialogTablist.className = "styleDialogTablist tablist_headers";
	            dialogTablist.innerHTML = `${set_tabulation}`;
	            dialog_text.append(dialogTablist);
	            continue;
            }

			var dialog_item = document.createElement('div');

			if(count === 1) dialog_item.innerHTML = `${lists[i]}`;
			else dialog_item.innerHTML = `${set_tabulation}`;
			dialog_item.id = "dialogItem";
			dialog_item.setAttribute("data-value", i - 1);
			
			if(i == 1) {
				if(count === 1) dialog_item.className = "dialogItem";
		    	else dialog_item.className = "dialogItem tablist_headers white_back";
			}
			else {
				if(count === 1) dialog_item.className = "dialogItem";
		    	else dialog_item.className = "dialogItem tablist_headers";			    
			}
			
			if(lists[i].length === 1) { dialog_item.className = "dialogItem tablist_headers noback"; }

			dialog_text.append(dialog_item);
            max_listitem = dialog_item.getAttribute("data-value");
		}
    	listitem = document.getElementsByClassName("dialogItem")[0].getAttribute("data-value");	
    	update_color_list(0);
	}

	var buttons = document.createElement('div');
	buttons.className = "buttons";
	dialog_container.append(buttons);

	var btn_1 = document.createElement('div');
	btn_1.innerText = button_1;
	btn_1.className = "clickBtn";
	buttons.append(btn_1);
    
    btn_1.onclick = function () { response = 1; callcack_dialog_response(); };             	

	if(button_2 != "") {
	    var btn_2 = document.createElement('div');
	    btn_2.innerText = button_2;
	    btn_2.className = "clickBtn red_btn";
	    btn_2.onclick = function () { response = 0; callcack_dialog_response(); };        
	    buttons.append(btn_2);
    }
}

function callcack_dialog_response() {
	cef.set_focus(false);
    if(dialog_type === 1 || dialog_type === 3) {
    	var text = document.getElementById("dialogInput").value;
        inputtext = `${text}`;
    }
    cef.emit("callback_dialog_response", dialogId, response, listitem, inputtext);
   	dialogId = 0;
   	var element = document.getElementById("dialog_container");
    element.remove();               
}

