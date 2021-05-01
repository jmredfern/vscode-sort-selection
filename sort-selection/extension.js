const vscode = require('vscode');

function activate(context) {
	console.log('"sort-delimited-list" is active!');
	
	const disposable = vscode.commands.registerCommand('extension.sortSelection', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}		
		const selection = editor.selection;
		const document = editor.document;
		
		editor.edit((edit) => {
			const txt = document.getText(new vscode.Range(selection.start, selection.end));
			edit.replace(selection, sort(txt));
		});
	});

	context.subscriptions.push(disposable);
}

exports.activate = activate;

// These codes are taken from https://stackoverflow.com/a/15479354, done by Georg Barikin (https://github.com/gebrkn)

function naturalCompare(a, b) 
{
    const ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
    b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });
    
    while(ax.length && bx.length) {
        const an = ax.shift();
        const bn = bx.shift();
        const nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if(nn) return nn;
    }

    return ax.length - bx.length;
}

const isIncludedIn = (text) => (search) => text.includes(search);
const trim = (text) => text.trim();

const createSortFunction = (validSeparators) => (text) => 
{
	const separator = validSeparators.find(isIncludedIn(text));
	const joiner = `${separator} `;

	if (!separator) throw new Error('Separator not found.');

	return text
			.split(separator)
			.map(trim)
			.filter(Boolean)
			.sort(naturalCompare)
			.join(joiner);
};

const sort = createSortFunction([',', ';', ' -']);

exports.sort = sort;
