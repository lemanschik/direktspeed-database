// # CouchDB 1

assert(child_process.execSync("./bin.js http://127.0.0.1:3000"), "success")
assert(child_process.execSync("curl http://127.0.0.1:3000/_config/cors/credentials"),'"true"')
assert(child_process.execSync("curl http://127.0.0.1:3000/_config/cors/origins"), '"*"')

// # CouchDB 2

assert(child_process.execSync("./bin.js http://127.0.0.1:3001"), "success")
assert(child_process.execSync("curl http://127.0.0.1:3001/_node/node1@127.0.0.1/_config/cors/credentials"), '"true"')
assert(child_process.execSync("curl http://127.0.0.1:3001/_node/node1@127.0.0.1/_config/cors/origins"), '"*"')