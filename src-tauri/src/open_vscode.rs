use std::process::Command;

#[tauri::command]
pub fn open_vscode(path: String) -> Result<(), String> {
      let _cmd = Command::new("powershell")
            .args(&["-Command", &format!("code {}", path)])
            .spawn()
            .expect("Falhou ao abrir o vscode");

      Ok(())
}