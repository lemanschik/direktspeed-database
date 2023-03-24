export const addCors = async (baseUrl, auth) =>
  fetch(Object.assign(new URL(`${baseUrl}/_membership`))).then(
    // see https://github.com/klaemo/docker-couchdb/issues/42#issuecomment-169610897
    async (membershipResp) => {
      [
        { path: `/_config/httpd/enable_cors`, body: '"true"' },
        { path: '/_config/cors/origins', body: '"*"' },
        { path: '/_config/cors/credentials', body: '"true"' },
        { path: '/_config/cors/methods', body: '"GET, PUT, POST, HEAD, DELETE"'},
        { path: '/_config/cors/headers', 
          body: '"accept, authorization, content-type, origin, referer, x-csrf-token"' },
      ].forEach(async ({ path, body }) => {
        
        const mapPathUrl = ({ path, body }) => fetch({ 
          method:'PUT',headers:{'Authorization':`Basic ${btoa(auth)}`},
          url: `${baseUrl}${path}`, body}).then(async (resp) => 
            resp.status !== 200 && Promise.reject(new Error('status ' + resp.status + ' ' + await resp.text()))
          );
        
        if (membershipResp.status !== 200) {
          await Promise.all((await membershipResp.json()).cluster_nodes.map(async (node) => 
          await mapPathUrl({ path: `/_node/${node}${path}`}, body)))
        } else {
          mapPathUrl({ path, body })
        }
      })
  })
