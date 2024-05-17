function openWorkspace(workspace){ //switches screen to appropriate workspace
	switch (workspace){
		case 'createBlock':
			document.getElementById('buildHtmlWorkspace').classList.add('hidden');
			document.getElementById('createBlockWorkspace').classList.remove('hidden');
			break;
		case 'buildHtml':
			document.getElementById('createBlockWorkspace').classList.add('hidden');
			document.getElementById('buildHtmlWorkspace').classList.remove('hidden');
			break;
		default:
			console.log('openWorkspace problem');
	};
};

let builderIdList = ['be0'];

function addBuilderElement(type){
	let elem = document.createElement('div');
			elem.classList.add('builderElement');
			let idNumber = parseInt((builderIdList[builderIdList.length-1]).slice(2))+1;
			let id = 'be' + idNumber;
			builderIdList.push(id);
			elem.setAttribute('id', id);
	switch (type){
		case 'htmlSection':
			elem.innerHTML = '<div style="display:inline;"><div class="deleteButton" onclick="deleteBuilderElement('+"'"+id+"'"+')">x</div></div><div style="display:inline-block;"><p>HTML Section</p><textarea></textarea></div>';
			document.getElementById('builderElements').appendChild(elem);
			break;
		case 'input':
			elem.innerHTML = '<div style="display:inline;"><div class="deleteButton" onclick="deleteBuilderElement('+"'"+id+"'"+')">x</div></div><div style="display:inline-block;"><p>Input</p></div>';
			break;
		default:
			console.log('addBuilderElement problem');
	};
	document.getElementById('builderElements').appendChild(elem);
};

function deleteBuilderElement(id){
	document.getElementById(id).remove();
	let index = builderIdList.indexOf(id);
	builderIdList.splice(index, 1);
};