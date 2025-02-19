# Template
## Node version manager (nvm)
Sirve para gestioner multiples versiones de node
* Windows
descargar nvm (nvm-setup.exe): https://github.com/coreybutler/nvm-windows/releases

* Uvuntu
```console
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
```

## Instalar node
Version node (18.13.0 o superior) (20.11.1 recomendada)

```console
nvm install 20.11.1
```
### Cambiar de version

```console
nvm use 18.14.0
```

### Ver versiones instaladas
```
nvm list
```

## Instalar yarn
```console
npm install -g yarn
```

## Instalar angular
```console
npm install -l @angular/cli
```

## Instalar dependencias
'''console
yarn install
'''

## levantar el proyecto
'''console
yarn start
'''

### Agregar dependencia
ejemplo:
'''console
yarn add <dependensia>
'''

## Agregar una pagina
```console
ng g c pages/<nombre de la pagina>
```

## Agregar un servicio
```console
ng g s services/<nombre del servicio>
```