#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod add_object; 
mod open_path;  
mod open_terminal;
mod open_vscode;

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![
        add_object::add_object, 
        open_path::open_path,
        open_terminal::open_terminal,
        open_vscode::open_vscode
      ])
      .run(tauri::generate_context!())
      .expect("error while running tauri application")
}