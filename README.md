# Instalacion
```
npm install
npm start
```

Para ver las acciones que se realizan en este proyecto, se deben instala [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es).

# Redux DevTools

Para ver las acciones que se realizan en este proyecto, se deben instala [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es).

- Al presionar la tecla F12, en la pestaña Redux, se puede observar las acciones que se realizan en la pagina

![Redux DevTools](https://user-images.githubusercontent.com/7957859/48663602-3aac4900-ea9b-11e8-921f-97059cbb599c.png)

# Arquitectura de desarrollo

- Se utiliza la forma de desarrollo [Duck Pattern](https://github.com/erikras/ducks-modular-redux)

Donde dentro de la carpeta "ducks", se encuentran las carpetas correspondientes a cada unos de los datos que se quieren modelar. En este caso como trabajamos con usuarios, dentro de la carpeta ducks/users se encuentra toda la logica de redux correspondiente a los usuarios. Si incluyeramos una nueva entidad, habria que agregar otra carpeta, siguiendo la arquitectura de desarrollo que tiene user, la cual es la siguiente

- users/types.ts: Es el archivo que define los tipos de acciones que se van a realizar para los usuarios

- users/index.ts: Es el archivo principal, que contiene el reducer de las acciones del los usuarios, este archivo mediante acciones modifica la store de redux

- users/sagas.ts: Aqui se encuentra la logica asincrona de nuestro reducer, al ser redux saga, se trabaja con [generator functions](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)

- users/actions.ts: Define todas las acciones que se van a utilizar en la entidad usuario

## Archivos genericos
- rootReducer.ts: Este archivo es una combinacion de todos los reducers que se van a crear en nuestra aplicacion, en este caso comoo simplemente tenemos el reducer de usuarios en users/index.ts, solo agregamos dicho reducer

- rootSaga.ts: Al igual que el root reducer, aqui se combinan todas las sagas y se ejecutan segun lo que nuestra aplicacion requira.

- store/index.ts: En este archivo se crea la store de nuestra aplicacion y se reunen todos los reducers provistos por rootReducer.ts y todas las sagas provistas por rootSaga.ts

## Para proveer a nuestra aplicacion de la store
```
<Provider store= {store}>
    <Nuestro_componente />
<Provider>
```
De esta forma toda nuestra aplicacion tiene acceso a la store, esto se puede observar en App.tsx
