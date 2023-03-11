import { useConnectionStore } from '../store/connection'
import { IdbAdapter } from '../models/indexeddb'

const tables = [
  { name: 'restQueryHistory', indexes: ['date'] },
  { name: 'restQueryTabs', indexes: [] }
]
const dbVersion = 4

const databaseName = clusterUuid => {
  return `elasticvue-${dbVersion}-${clusterUuid}`
}

let db = null
export const useIdb = () => {
  if (!db) {
    const connectionStore = useConnectionStore()
    const clusterUuid = connectionStore.activeCluster.clusterUuid
    db = new IdbAdapter({ database: databaseName(clusterUuid), version: 3, tables })
  }
  return db
}

export const useIdbStore = tableNames => {
  const handle = useIdb()
  const stores = {}

  if (!Array.isArray(tableNames)) tableNames = [tableNames]
  tableNames.forEach(tableName => {
    stores[tableName] = handle.stores[tableName]
  })

  return stores
}