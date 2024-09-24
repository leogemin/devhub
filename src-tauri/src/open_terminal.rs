use std::process::Command;

#[tauri::command]
pub fn open_terminal(path: String) -> Result<(), String> {
      open_terminal_logic(path);

      Ok(())
}

fn open_terminal_logic(path: String) {
      let _cmd = Command::new("powershell")
            .args(&["-NoExit", "-Command", &format!("cd {}; cls", path)])
            .spawn()
            .expect("Não deu bom");
}