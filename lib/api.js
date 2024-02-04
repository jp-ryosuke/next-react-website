import { createClient } from 'microcms-js-sdk'

//Promise のオブジェクトを返す関数
export const client = createClient({
  serviceDomain: process.nextTick.SERVICE_DOMAIN,
  apiKey: process.nextTick.API_KEY,
})
