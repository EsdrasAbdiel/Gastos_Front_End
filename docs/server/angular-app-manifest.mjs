
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Gastos_Front_End',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Gastos_Front_End/consulta"
  },
  {
    "renderMode": 2,
    "route": "/Gastos_Front_End/detalhes"
  },
  {
    "renderMode": 2,
    "route": "/Gastos_Front_End/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23593, hash: '56097d3d60311349dc0802e2e38ad8471f17f466d463960f36e7a218a889b5b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17158, hash: '9a28ce98768793f785ebb36efecf7ae2fda570f8189ef46e142dd43847f919d0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'consulta/index.html': {size: 67734, hash: 'b01a2dba2048a869f3436c17cfd21cd194c84e142dc9df21a3b7b6a39b6b0616', text: () => import('./assets-chunks/consulta_index_html.mjs').then(m => m.default)},
    'detalhes/index.html': {size: 67734, hash: 'b01a2dba2048a869f3436c17cfd21cd194c84e142dc9df21a3b7b6a39b6b0616', text: () => import('./assets-chunks/detalhes_index_html.mjs').then(m => m.default)},
    'styles-IJH5SG4K.css': {size: 6988, hash: '64KU5szoRh0', text: () => import('./assets-chunks/styles-IJH5SG4K_css.mjs').then(m => m.default)}
  },
};
