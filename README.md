# hackathon-awesomefest-2021


## Team: DEVPOM


### Solución : <ins>Get On Bot</ins>


> Bot de discord el cual cumple con funcionalidades utiles para el servidor de discord de la plataforma Get On Board.

### ¿Qué hace nuestro bot?

1. Asignar Roles en base al País de Origen del usuario
2. Asignar Roles en base a las habilidades o Profesion del usuario
3. Preguntar al usuario via DM si este esta interesado en recibir ofertas de empleo directamente a su bandeja de entrada en Discord
4. Si el usuario confirma, GETONBOT enviará recomendaciones de empleo en base a sus roles previamente seleccionados. (Pais, Profesion, etc)
6. Si no acepta siempre podra usar el comando `/search` y buscar cualquier tipo de oferta en base al query que elija, y asu vez se enviaran las recomendaciones en base a su rol(es)

#### La solución fue probada en un servidor creado para el hackaton y en un PaS (Platform as Service) que es HEROKU, el cual nos sirve para mantener el bot corriendo, mediante un servidor HTTP: https://getonbot.herokuapp.com/


# ¿Cómo correrlo?

1. Descargar el codigo de este repositorio
2. Generar un archivo `.env` en la raiz del proyecto
3. Agregar los tokens y keys necesarios de Discord al archivo `.env`
> DISCORD_TOKEN (Token del bot)

> GUILD_ID (ID del servidor)

> CLIENT_ID (ID del usuario, propietario del bot)

4. Hacer deploy de los commandos corriendo el archivo `./src/deploy-commands.js` con `node ./src/deploy-commands.js` (esto para que nuestro bot pueda hacer uso de la interfaz grafica de Discord)
5. Correr el proyecto con `npm run start`
> Se inicializara el bot de Discord y a su vez inciara un servidor HTTP con express.js el cual nos servira como endpoint para mantener el bot `encendido` en todo momento
