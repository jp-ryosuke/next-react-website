import { createClient } from 'microcms-js-sdk'

//Promise のオブジェクトを返す関数
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})