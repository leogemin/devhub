#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::api::shell::open;
use tauri::Manager;
use serde::{Deserialize, Serialize};
use serde_json::{Value, from_str, to_string_pretty};
use std::fs::{OpenOptions, File};
use std::io::{Read, Write};


/*** Funções para adição de nova pasta/app ***/

// Estrutura do objeto json
#[derive(Serialize, Deserialize, Debug)]
struct NovoObjeto {
  name: String,
  path: String,
  icon: String
}

// Função tauri para chamada do invoke
#[tauri::command]
fn add_object(novo_objeto: NovoObjeto) -> Result<(), String> {
  match add_object_logic(novo_objeto) {
    Ok(_) => Ok(()),
    Err(e) => Err(format!("Falha ao adicionar objeto: {}", e))
  }
}

// Função lógica
fn add_object_logic(novo_objeto: NovoObjeto) -> Result<(), Box<dyn std::error::Error>> {
  let mut file = OpenOptions::new()
      .read(true)
      .write(true)
      .open("C:/Users/leona/Desktop/dev/personal/Projects/apphub/src-tauri/assets/objects.json")?;

  let mut conteudo = String::new();
  file.read_to_string(&mut conteudo)?;

  let mut json: Value = from_str(&conteudo)?;

  if let Some(array) = json.as_array_mut() {
      array.push(serde_json::to_value(novo_objeto)?);
  } else {
      return Err("O JSON não é um array.".into());
  }

  let json_string = to_string_pretty(&json)?;
  let mut file = File::create("C:/Users/leona/Desktop/dev/personal/Projects/apphub/src-tauri/assets/objects.json")?;
  file.write_all(json_string.as_bytes())?;

  Ok(())
}
/***    -----------------------------    ***/

// Função abrir app/pasta (usada no onDoubleClick do componente Block)
#[tauri::command]
fn open_path(app_handle: tauri::AppHandle, path: String) -> Result<(), String> {
  open(&app_handle.shell_scope(), path, None)
      .map_err(|e| format!("Failed to open: {}", e))
}


// Main
fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![add_object, open_path])
      .run(tauri::generate_context!())
      .expect("error while running tauri application")
}
