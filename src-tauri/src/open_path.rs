use tauri::api::shell::open;
use tauri::AppHandle;
use tauri::Manager;

#[tauri::command]
pub fn open_path(app_handle: AppHandle, path: String) -> Result<(), String> {
  open(&app_handle.shell_scope(), path, None)
      .map_err(|e| format!("Failed to open: {}", e))
}
