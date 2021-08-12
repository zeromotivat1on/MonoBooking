// Window modification functions

function validateNewWindowLocationHrefPath(path : string) : boolean {
  return path[0] === '/'
}

// Function sets new window location href and checks, if a first char of path is equal to '/',
// and, if not, adds '/' at the start of the path
export function newWindowLocationHref(path : string) : void {
  validateNewWindowLocationHrefPath(path) ?
    window.location.href = path :
    window.location.href = `/${path}`
}