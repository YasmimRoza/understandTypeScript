import express from 'express'

import { router } from './ecmascipt/ecmascript'
const app = express();

app.use(express.json())

app.use(router)

app.listen(3001, () => {console.log('Server ON!')})