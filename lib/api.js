import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.nextTick.SERVICE_DOMAIN,
  apiKey: process.nextTick.API_KEY,
})
