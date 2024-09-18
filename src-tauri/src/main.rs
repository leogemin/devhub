#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod add_object; 
mod open_path;  

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![
        add_object::add_object, 
        open_path::open_path
      ])
      .run(tauri::generate_context!())
      .expect("error while running tauri application")
}