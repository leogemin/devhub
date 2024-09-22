use serde::{Deserialize, Serialize};
use serde_json::{Value, from_str, to_string_pretty};
use std::fs::{OpenOptions, File};
use std::io::{Read, Write};

// Estrutura do objeto json
#[derive(Serialize, Deserialize, Debug)]
pub struct NovoObjeto {
  pub name: String,
  pub path: String,
  pub icon: String,
}

// Função tauri para chamada do invoke
#[tauri::command]
pub fn add_object(novo_objeto: NovoObjeto) -> Result<(), String> {
  match add_object_logic(novo_objeto) {
    Ok(_) => Ok(()),
    Err(e) => Err(format!("Falha ao adicionar objeto: {}", e))
  }
}

// Função lógica
fn add_object_logic(novo_objeto: NovoObjeto) -> Result<(), Box<dyn std::error::Error>> {
      let path: &str = "D:/dev/personal/Projects/devhub/src-tauri/assets/objects.json";
      let mut file = OpenOptions::new()
            .read(true)
            .write(true)
            .open(path)?;

      let mut conteudo = String::new();
      file.read_to_string(&mut conteudo)?;

      let mut json: Value = from_str(&conteudo)?;

      if let Some(array) = json.as_array_mut() {
            array.push(serde_json::to_value(novo_objeto)?);
      } else {
            return Err("O JSON não é um array.".into());
      }

      let json_string = to_string_pretty(&json)?;
      let mut file = File::create(path)?;
      file.write_all(json_string.as_bytes())?;

      Ok(())
}
