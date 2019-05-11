const vscode = require('vscode');

function activate(context) {
	console.log('"sort-selection" is active!');
	
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

function sort(txt) {
	const tokens = txt.split(/,\s*/);
	const sortedTokens = tokens.sort(Intl.Collator().compare);
	const sortedText = sortedTokens.join(', ');
	return sortedText.slice(0, sortedText.length);
}
exports.sort = sort;
