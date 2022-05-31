import express from 'express'

import { router } from './ecmascipt/ecmascript'
import { router2 } from './ecmascipt/desafio/desafio'
import { router3 } from './classes/classes';
const app = express();

app.use(express.json())

app.use(router)
app.use(router2)
app.use(router3)

app.listen(3001, () => { console.log('Server ON!') })