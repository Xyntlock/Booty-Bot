const allJsOrTs = '[jt]s'
const filesWithTypes = (types) => `**/*.{${types.join(',')}}.${allJsOrTs}?(x)`
const testFiles = filesWithTypes(['test', 'spec'])

module.exports = {
  allJsOrTs,
  filesWithTypes,
  testFiles,
}
