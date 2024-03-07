# <span style="color:#C8102E">Salario Emocional Backend</span>

#### Backend API para seguimiento de los beneficios de Salario Emocional.

### Contenido
  - [Acerca](#acerca)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Testing](#testing)

### Acerca
El programa de salario emocional consiste en un conjunto de beneficios que pueden ser utilizados por los colaboradores de la organización, quienes pueden registrar estos beneficios a través de la aplicación de Salario Emocional. Este componente corresponde a la aplicación backend de la aplicación. La parte de la IU de la aplicación puede encontrarse a través del repositorio Github [`Salario_Emocional_Frontend`](https://github.com/lanea07/Salario_Emocional_Frontend).

### Instalación
El backend del salario emocional está basado en el framework Laravel. Todos los paquetes necesarios están listados en el archivo `composer.json`. Para instalarlos ejecute el comando

> composer install

##### * Integración con Google Drive
El proyecto hace uso del paquete `flysystem-google-drive-ext` para la gestión del sistema de almacenamiento de las políticas y las imágenes que usan los beneficios, estos se almacenan en una carpeta privada de Google Drive y para obtenerlos de allí se requiere autenticación. La documentación sobre cómo obtener las claves necesarias para hacer uso del paquete se pueden encontrar en el repositorio [flysystem-google-drive-ext](https://github.com/masbug/flysystem-google-drive-ext)

#### Comandos post-instalación
La aplicación incluye la migración de las tablas necesarias para su correcto funcionamiento en la carpeta `database/migrations`. Para ejecutar la migración de las tablas ejecute el siguiente comando:

> php artisan migrate

También se incluye un usuario inicial para el sistema el cual puede ser creado pasando el parámetro `--seed` al comando de migración, localizado en la clase `database/seeders/UsersSeeder.php`. Los datos del usuario inicial son:

> ```php
> 'name'            => 'root'
> 'email'           => 'root@localhost'
> 'password'        => 'root@localhost'
> 'dependency_id'   => 1
> 'position_id'     => 1
> ```

### Uso
El backend está protegido mediante el middleware Sanctum de Laravel, excepto la ruta de login. Todas las rutas registradas del proyecto están en la carpeta `routes`.

#### Endpoints

```php
basepath: '/api'
middleware: 'auth:sanctum'
```

> ```php
> Controlador: AuthController::class
> Rutas: [
>    '/login'........................=> post
>    '/logout'.......................=> post
>    '/validate-roles'...............=> post
>    '/validate-token'...............=> post
>    '/validate-requirePassChange'...=> post
>    '/passwordChange'...............=> post
>    'login-as'......................=> post
> ]
> ```
        
> ```php
> Controlador: BenefitController::class
> Rutas: [
>    '/benefit'......................=> get
>    '/benefit/available'............=> get
>    '/benefit/create'...............=> get
>    '/benefit/{benefit}'............=> delete
>    '/benefit/{benefit}/edit'.......=> get
>    '/benefit/{benefit}'............=> get
>    '/benefit'......................=> post
>    '/benefit/{benefit}'............=> put
>    '/benefit/{benefit}'............=> patch
>    '/benefit-settings'.............=> get
>    '/benefit-settings/{benefit}'...=> get
>    '/benefit-settings/{benefit}'...=> put
> ]
> ```

> ```php
> Controlador: BenefitDetailController::class
> Rutas: [
>    '/benefitdetail/create'.................=> get
>    '/benefitdetail/{benefitdetail}'........=> delete
>    '/benefitdetail/{benefitdetail}/edit'...=> get
>    '/benefitdetail'........................=> get
>    '/benefitdetail/{benefitdetail}'........=> get
>    '/benefitdetail'........................=> post
>    '/benefitdetail/{benefitdetail}'........=> put
>    '/benefitdetail/{benefitdetail}'........=> patch
> ]
> ```

> ```php
> Controlador: BenefitUserController::class
> Rutas: [
>    '/benefituser/indexcollaboratorsnonapproved'...=> get
>    '/benefituser/indexnonapproved'................=> get
>    '/benefituser/indexcollaborators'..............=> get
>    '/benefituser/{user}/{year}'...................=> get
>    '/benefituser'.................................=> get
>    '/benefituser/create'..........................=> get
>    '/benefituser/{benefituser}'...................=> delete
>    '/benefituser/{benefituser}/edit'..............=> get
>    '/benefituser/{benefituser}'...................=> get
>    '/benefituser'.................................=> post
>    '/benefituser/{benefituser}'...................=> put
>    '/benefituser/{benefituser}'...................=> patch
>    '/benefituser/decidebenefituser'...............=> post
>    '/exportbenefits'..............................=> post
> ]
> ```

> ```php
> Controlador: PositionController::class
> Rutas: [
>    '/position/create'............=> get
>    '/position/{position}'........=> delete
>    '/position/{position}/edit'...=> get
>    '/position'...................=> get
>    '/position/{position}'........=> get
>    '/position'...................=> post
>    '/position/{position}'........=> put
>    '/position/{position}'........=> patch
> ]
> ```

> ```php
> Controlador: RoleController::class
> Rutas: [
>    '/role/create'........=>get
>    '/role/{role}'........=>delete
>    '/role/{role}/edit'...=>get
>    '/role'...............=>get
>    '/role/{role}'........=>get
>    '/role'...............=>post
>    '/role/{role}'........=>put
>    '/role/{role}'........=>patch
> ]
> ```

> ```php
> Controlador: UserController::class
> Rutas: [
>    '/user/create'........=> get
>    '/user/{user}'........=> delete
>    '/user/{user}/edit'...=> get
>    '/user'...............=> get
>    '/user-descendants'...=> get
>    '/user/{user}'........=> get
>    '/user'...............=> post
>    '/user/{user}'........=> put
>    '/user/{user}'........=> patch
> ]
> ```

> ```php
> Controlador: DependencyController::class
> Rutas: [
>    '/dependency/dependencyAncestors/{id}'......=>get
>    '/dependency'...............................=>get
>    '/dependency/getNonTreeValidDependencies'...=>get
>    '/dependency/create'........................=>get
>    '/dependency/{dependency}'..................=>delete
>    '/dependency/{dependency}/edit'.............=>get
>    '/dependency/{dependency}'..................=>get
>    '/dependency'...............................=>post
>    '/dependency/{dependency}'..................=>put
>    '/dependency/{dependency}'..................=>patch
> ]
> ```

> ```php
> Controlador: AdminController::class
> Rutas: [
>    '/admin/getAllBenefitUser'.......=> get
>    '/admin/getAllGroupedBenefits'...=> get
> ]
> ```

> ```php
> Controlador: PreferencesController::class
> Rutas: [
>    '/user-preferences'..........=> get
>    '/user-preferences/{user}'...=> get
>    '/user-preferences/{user}'...=> put
> ]
> ```

### Testing
Los tests del backend se encuentran dentro de la carpeta `tests/`. Importante aclarar que allí se encuentra una copia de las migraciones propias de la aplicación, ya que los tests están diseñados para correr in-memory en un archivo `sqlite`, entonces no es posible correr las migraciones propias de la aplicación, además que algunos comandos específicos de las migraciones originales no son compatibles con bases de datos sqlite.