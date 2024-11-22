async function deepCopy(inputObject) {
  return new Promise((resolve, reject) => {
    if (typeof inputObject !== 'object') {
      reject(new Error('inputObject invalid'))
    } else {
      function deepCopy(obj) {
        if (obj === null) return null
        if (Array.isArray(obj)) {
          return obj.map(item => deepCopy(item))
        } else if (typeof obj === 'object') {
          const copy = {}
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              copy[key] = deepCopy(obj[key])
            }
          }
          return copy
        } else {
          return obj
        }
      }
      const copiedObj = deepCopy(inputObject)
      resolve(copiedObj)
    }
  })
}
