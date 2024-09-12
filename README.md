# API de Personas - Node.js con Serverless

Esta API permite crear y recuperar información de personas utilizando el framework SAM para desplegar en AWS. Los datos que maneja están traducidos de la API Star Wars (SWAPI) al español.

## Endpoints

### 1. Crear una persona

-   **Método**: `POST`
-   **URL**: `{{url}}/api/people`
-   **Descripción**: Crea una nueva persona en la base de datos.

#### Body (Ejemplo de solicitud):

```json
{
    "nombre": "Luke Skywalker",
    "altura": "172",
    "peso": "77",
    "color_cabello": "rubio",
    "color_piel": "claro",
    "color_ojos": "azul",
    "fecha_nacimiento": "19BBY",
    "genero": "masculino",
    "planeta_natal": "Tatooine"
}
```

### 2. Obtener una persona por ID

-   **Método**: `GET`
-   **URL**: `{{url}}/api/people/{id}`
-   **Descripción**: Obtiene la información de una persona específica utilizando su ID.

#### Respuesta (Ejemplo):

```json
{
    "nombre": "Luke Skywalker",
    "altura": "172",
    "peso": "77",
    "color_cabello": "rubio",
    "color_piel": "claro",
    "color_ojos": "azul",
    "fecha_nacimiento": "19BBY",
    "genero": "masculino",
    "planeta_natal": "Tatooine"
}
```

## Fases de construcción del proyecto con AWS SAM

### 1. Instalación de AWS SAM CLI

Primero, asegúrate de tener instalado AWS SAM CLI en tu entorno local. Puedes seguir la [documentación oficial de AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) para instalarlo.

```bash
sam --version
```

### 2.Configura los permisos de AWS

Es importante configurar correctamente los permisos de AWS para que tu aplicación pueda interactuar con los servicios necesarios, como Lambda, API Gateway y bases de datos.

1. **Roles y políticas de IAM**: Asegúrate de que la función Lambda tenga un rol de ejecución con los permisos necesarios. Este rol debe incluir políticas que permitan a la función interactuar con los servicios que utilice, como DynamoDB o S3.

2. **Acceso programático**: Si vas a desplegar tu aplicación desde tu entorno local, debes configurar las credenciales de AWS en tu máquina mediante el siguiente comando:
    ```bash
    aws configure
    ```

### 3. Despligue en AWS

Ejecuta los siguientes comandos

```bash
npm run deploy
```
