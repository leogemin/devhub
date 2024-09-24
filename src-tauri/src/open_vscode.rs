use std::process::Command;

#[tauri::command]
pub fn open_vscode(path: String) -> Result<(), String> {
      open_vscode_logic(path);

      Ok(())
}

fn open_vscode_logic(path: String) {
      let _cmd = Command::new("powershell")
            .args(&["-Command", &format!("code {}", path)])
            .spawn()
            .expect("Não deu bom");
}