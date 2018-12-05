import {
  takeEvery, call, select, put,
} from 'redux-saga/effects';
import CONSTANTES from '../Const';
import {
  actionCargarPublicacionesStore, actionGetArticulo, actionGetEmpresaInfo, actionGetCategoriasEmpresa,
} from '../Actions';


const URL = 'https://apiplanb.xyz';
const ConsultaArticulosCategoria = categoria => fetch(`${URL}/publicar/filtroespecialarticulo/?q=${categoria}`,
// const ConsultaArticulosCategoria = categoria => fetch(`${URL}/article/articulofiltro/`,
  {
    method: 'GET',

  }).then(response => response.json());


function* generadoraArticulosCategoria() {
  try {
    const categoria = yield select(state => state.reducerArticulos);
    const articulosCategoria = yield call(ConsultaArticulosCategoria, categoria.categoria);
    yield put(actionCargarPublicacionesStore(articulosCategoria.results));
    console.log(categoria);
    console.log(articulosCategoria.results);
  } catch (error) {
    console.log(error);
  }
}


const ConsultaArticuloSlug = slug => fetch(`${URL}/publicar/filtroarticulos/?slug=${slug}`,
  {
    method: 'GET',
  }).then(response => response.json());


function* generadoraArticuloSlug() {
  try {
    const slug = yield select(state => state.reducerArticulos);
    const articuloCategoria = yield call(ConsultaArticuloSlug, slug.slug);
    yield put(actionGetArticulo(articuloCategoria.results[0]));
    console.log(slug.slug);
  } catch (error) {
    console.log(error);
  }
}


const descargarArticulos = () => fetch(`${URL}/publicar/filtroespecialarticulo/`,
  {
    method: 'GET',
  }).then(response => response.json());

function* generadoraArticulos() {
  try {
    const articulos = yield call(descargarArticulos);
    yield put(actionGetArticulo(articulos));
  } catch (error) {
    console.log(error);
  }
}


// const ConsultaEmpresa = empresa => fetch(`${URL}/article/articulofiltro/`,
//   {
//     method: 'GET',
//   }).then(response => response.json());

const ConsultaCategorias = empresa => fetch(`${URL}/publicar/filtrocategoria/`,
  {
    method: 'GET',
  }).then(response => response.json());

function* generadoraEmpresa() {
  try {
    const empresa = yield select(state => state.reducerEmpresa);
    // const empresaDetail = yield call(ConsultaEmpresa, empresa);
    // yield put(actionGetEmpresaInfo(empresaDetail));
    const empresaCategorias = yield call(ConsultaCategorias, empresa);
    // console.log(empresaCategorias);
    yield put(actionGetCategoriasEmpresa(empresaCategorias));
  } catch (error) {
    console.log(error);
  }
}


export default function* funcionPrimaria() {
  yield takeEvery(CONSTANTES.GET_ARTICULOS_CATEGORIA, generadoraArticulosCategoria);
  yield takeEvery(CONSTANTES.GET_ARTICULO_SLUG, generadoraArticuloSlug);
  yield takeEvery(CONSTANTES.GET_ARTICULOS, generadoraArticulos);


  yield takeEvery(CONSTANTES.GET_EMPRESA, generadoraEmpresa);
  // yield takeEvery(CONSTANTES.GET_CATEGORIAS_EMPRESA, generadoraCategorias);
}
