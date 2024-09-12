#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::api::shell::open;
use tauri::Manager;

#[tauri::command]
fn open_path(app_handle: tauri::AppHandle, path: String) -> Result<(), String> {
  open(&app_handle.shell_scope(), path, None)
      .map_err(|e| format!("Failed to open: {}", e))
}

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![open_path])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}
