import CONSTANTES from './Const';

export const actionPruebaUno = () => ({
  type: CONSTANTES.PRUEBA_UNO,
});

export const actionPruebaDos = () => ({
  type: CONSTANTES.PRUEBA_DOS,
});

export const actionGetArticulos = () => ({
  type: CONSTANTES.GET_ARTICULOS,
});

export const actionGetArticulosDestacados = articulos => ({
  type: CONSTANTES.GET_ARTICULO_DESTACADO,
  articulos,
});


export const actionGetArticulosCategoria = categoria => ({
  type: CONSTANTES.GET_ARTICULOS_CATEGORIA,
  categoria,
});

export const actionCargarPublicacionesStore = articulos => ({
  type: CONSTANTES.AGREGAR_ARTICULOS_STORE,
  articulos,
});


export const actionGetArticuloSlug = slug => ({
  type: CONSTANTES.GET_ARTICULO_SLUG,
  slug,
});


export const actionGetArticulo = articulo => ({
  type: CONSTANTES.GET_ARTICULO,
  articulo,
});


export const actionGetEmpresa = varEmpresa => ({
  type: CONSTANTES.GET_EMPRESA,
  varEmpresa,

});

export const actionGetEmpresaInfo = empresa => ({
  type: CONSTANTES.GET_EMPRESA_INFO,
  empresa,
});


export const actionGetCategoriasEmpresa = categorias => ({
  type: CONSTANTES.GET_CATEGORIAS_EMPRESA,
  categorias,
});
