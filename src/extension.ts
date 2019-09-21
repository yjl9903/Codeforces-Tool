import * as vscode from 'vscode';
import CodeforcesTool from './codeforces';

export function activate(context: vscode.ExtensionContext) {

	console.log('Enjoy Codeforces :)');

	const config = vscode.workspace.getConfiguration('Codeforces');
	const cf = new CodeforcesTool(config.username, config.password);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			'cf.setup',
			async () => {
				const text = await vscode.window.showInputBox({
					prompt: 'Codeforces Round ID'
				});
				if (text !== undefined && text !== '') {
					cf.contestID = text;
				}
			}
		)
	);
	
	context.subscriptions.push(
		vscode.commands.registerCommand(
			'cf.setusername', 
			async () => {
				const text = await vscode.window.showInputBox({
					prompt: 'Codeforces 账户名称'
				});
				if (text !== undefined && text !== '') {
					cf.username = text;
				}
			}
		)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			'cf.setpassword', 
			async () => {
				const text = await vscode.window.showInputBox({
					prompt: 'Codeforces 账户密码',
					password: true
				});
				if (text !== undefined && text !== '') {
					cf.password = text;
				}
			}
		)
	);

}

export function deactivate() {  }