import {
  takeEvery, call, select, put,
} from 'redux-saga/effects';
import CONSTANTES from '../Const';
import {
  actionCargarPublicacionesStore,
  actionGetArticulo,
  // actionGetEmpresaInfo,
  actionGetCategoriasEmpresa,
  actionGetArticulosDestacados,
} from '../Actions';


// const ConsultaArticulosCategoria = categoria => fetch(`${CONSTANTES.URLAPI}/publicar/filtroespecialarticulo/?r=${CONSTANTES.EMPRESA}&q=${categoria}`,
const ConsultaArticulosCategoria = categoria => fetch(`${CONSTANTES.URLAPI}/publicar/filtroespecialarticulo/?r=${CONSTANTES.EMPRESA}`,
  {
    method: 'GET',

  }).then(response => response.json());


const ArticulosDestacados = () => fetch(`${CONSTANTES.URLAPI}/publicar/filtroespecialarticulo/?r=${CONSTANTES.EMPRESA}&portada=True`,
  {
    method: 'GET',
  }).then(response => response.json());


function* generadoraArticulosCategoria() {
  try {
    const categoria = yield select(state => state.reducerArticulos);
    const articulosCategoria = yield call(ConsultaArticulosCategoria, categoria.categoria);
    yield put(actionCargarPublicacionesStore(articulosCategoria));

    // Funcion para devolver todos los articulos que son destacados.
    const articulosDestacados = yield call(ArticulosDestacados);
    yield put(actionGetArticulosDestacados(articulosDestacados));
  } catch (error) {
    console.log(error);
  }
}


const ConsultaArticuloSlug = slug => fetch(`${CONSTANTES.URLAPI}/publicar/filtroarticulos/?slug=${slug}`,
  {
    method: 'GET',
  }).then(response => response.json());


function* generadoraArticuloSlug() {
  try {
    const slug = yield select(state => state.reducerArticulos);
    const articuloCategoria = yield call(ConsultaArticuloSlug, slug.slug);
    yield put(actionGetArticulo(articuloCategoria[0]));
    console.log(slug.slug);
    console.log(articuloCategoria);
  } catch (error) {
    console.log(error);
  }
}


// const ConsultaEmpresa = empresa => fetch(`${URL}/article/articulofiltro/`,
//   {
//     method: 'GET',
//   }).then(response => response.json());

const ConsultaCategorias = empresa => fetch(`${CONSTANTES.URLAPI}/publicar/filtrocategoria/?r=${CONSTANTES.EMPRESA}`,
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
  // yield takeEvery(CONSTANTES.GET_ARTICULO_DESTACADO, generadoraArticulosDestacados);


  yield takeEvery(CONSTANTES.GET_EMPRESA, generadoraEmpresa);
  // yield takeEvery(CONSTANTES.GET_CATEGORIAS_EMPRESA, generadoraCategorias);
}
