import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import CONSTANTES from './Const';
import funcionPrimaria from './Sagas/Sagas';


const reducerArticulos = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTES.GET_ARTICULOS_CATEGORIA:
      return { ...state, categoria: action.categoria };
    case CONSTANTES.AGREGAR_ARTICULOS_STORE:
      return { ...state, articulos: action.articulos };
    case CONSTANTES.GET_ARTICULO_SLUG:
      return { ...state, slug: action.slug };
    case CONSTANTES.GET_ARTICULO:
      return { ...state, articulo: action.articulo };
    case CONSTANTES.GET_ARTICULO_DESTACADO:
      return { ...state, articulosDestacados: action.articulos };
    default:
      return state;
  }
};


const reducerEmpresa = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTES.GET_EMPRESA:
      return { ...state, empresa: action.varEmpresa };
    case CONSTANTES.GET_EMPRESA_INFO:
      return { ...state, empresa: action.empresa };
    case CONSTANTES.GET_CATEGORIAS_EMPRESA:
      return { ...state, categorias_empresa: action.categorias };
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerArticulos,
  reducerEmpresa,
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);


export default store;
