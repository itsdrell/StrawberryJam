// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { FunctionDefinition } from "./FunctionDefinition";
import { CreateAllDefinitions } from './DefinedFunctionDefinitions';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) 
{
	console.log('Congratulations, your extension "StrawberryJam" is now active!');

	CreateAllDefinitions();
	
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('*', 
	{
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) 
		{
			let filename = document.fileName;
            let lineText = document.lineAt(position.line).text;
			let words: vscode.CompletionItem[] = [];
			
			let matches : string[] = FunctionDefinition.GetAllNamesThatMatch(lineText);

			for(let match of matches ) 
			{
				words.push(new vscode.CompletionItem(match));
			}

			return words;
		}
	}));

	// using wildcard to get it working for now
	context.subscriptions.push(vscode.languages.registerHoverProvider("*", 
	{	
		provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken)
		{
			let filename = document.fileName;
            let lineText = document.lineAt(position.line).text;

			let foundDefinition : FunctionDefinition = FunctionDefinition.GetFunctionDefinition(lineText);
			if (foundDefinition === null) { return new vscode.Hover("");}

			// just doing summary for now
			return new vscode.Hover(foundDefinition.m_summary);
		}
	}));

	// using wildcard to get it working for now
	context.subscriptions.push(vscode.languages.registerSignatureHelpProvider("*", 
	{	
		provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.SignatureHelp
		{
			let filename = document.fileName;
            let lineText = document.lineAt(position.line).text;
			
			let signature: vscode.SignatureHelp = new vscode.SignatureHelp();

			let foundDefinition : FunctionDefinition = FunctionDefinition.GetFunctionDefinition(lineText);
			if (foundDefinition === null) { return signature;}
			
			signature.signatures = 
			[{
				label: foundDefinition.m_signature,
				documentation: "", // goes at the bottom? maybe supposed to be a link
				parameters: 
				[
					{
						label: "minX",
						documentation: foundDefinition.GetSummaryWithParams()
					},
				]
			}];

			return signature;
		}
	},'(', ','));

	let disposable = vscode.commands.registerCommand('extension.Strawberry', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Jam! :D');
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}


// I used this to get started 
// https://css-tricks.com/what-i-learned-by-building-my-own-vs-code-extension/

// what I would like to do
// https://github.com/bschulte/LOVE-Autocomplete/tree/master/src
