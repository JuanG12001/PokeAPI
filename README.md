# PokeAPI Project


**PokeCap** es un juego de captura de Pokémon basado en la [PokéAPI](https://pokeapi.co/). Permite a los usuarios explorar, capturar sus Pokémones favoritos. Está diseñado para ofrecer una experiencia interactiva donde los jugadores pueden elegir y guardar tres Pokémon iniciales y comenzar su propia aventura Pokémon.

## Requisitos Previos

- **Node.js** (versión 14 o superior)
- **Git** (para clonar el repositorio, opcional)

## Instalación y Configuración

### Paso 1: Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```bash
cd pokecap
git clone https://github.com/JuanG12001/pokecap.git
```

### Paso 2: Instalar Dependencias

Dentro del directorio del proyecto, instala las dependencias usando npm:

- **npm install**

### Paso 3: Configurar Variables de Entorno

Para que la aplicación funcione correctamente, necesitas configurar las variables de entorno.

1. Crea un archivo `.env` en la raíz del proyecto.
2. Copia y pega el siguiente contenido en el archivo `.env`:

    ```plaintext
    VITE_POKEAPI_URL=<URL_de_la_PokeAPI>
    VITE_POKEHERO_URL=<URL_para_Pokemon_heroe>
    VITE_NAME_FOOTER=<Nombre_del_pie_de_pagina>
    VITE_GMAIL_FOOTER=<Correo_del_pie_de_pagina>
    VITE_LINK_GITHUB=<URL_perfil_GitHub>
    VITE_LINK_LINKEDIN=<URL_perfil_LinkedIn>
    VITE_LINK_WHATSAPP=<URL_WhatsApp_contacto>
    ```

3. Completa cada variable con los valores específicos de la API pública (puedes encontrar la URL en la documentación de la PokéAPI o en su sitio web oficial).

### Nota
No incluyas información sensible en el archivo `.env`, y asegúrate de que esté incluido en el archivo `.gitignore` para evitar que se suba al repositorio.


## Ejecución

Para ejecutar el proyecto en modo de desarrollo, sigue estos pasos:

1. Asegúrate de que todas las dependencias estén instaladas y que el archivo `.env` esté configurado correctamente.
2. Ejecuta el siguiente comando en la terminal:

    ```bash
    npm run dev
    ```

Esto iniciará el servidor de desarrollo de Vite. Luego, podrás acceder a la aplicación en [http://localhost:3000](http://localhost:3000) o en el puerto indicado en la consola.

## Scripts Disponibles

La aplicación incluye los siguientes scripts que puedes ejecutar con `npm`:

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Crea una versión optimizada para producción en la carpeta `dist`.
- **`npm run preview`**: Previsualiza la aplicación en modo de producción después de construirla.

## Contribución

Para contribuir a **PokeCap**, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios:

    ```bash
    git checkout -b nombre-de-tu-rama
    ```

3. Realiza tus cambios y confirma los commits.
4. Haz push de tus cambios a tu fork:

    ```bash
    git push origin nombre-de-tu-rama
    ```

5. Abre un pull request en el repositorio original.

Asegúrate de seguir las convenciones de código y realizar pruebas antes de enviar tu pull request. ¡Gracias por ayudar a mejorar **PokeCap**!