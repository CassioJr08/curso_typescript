// 9 - template literals type
type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'

type a1 = 'testando'
type a2 = 'Union'

type a3 = `${a1}` | `${a2}`