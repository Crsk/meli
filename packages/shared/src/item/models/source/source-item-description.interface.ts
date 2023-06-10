interface Snapshot {
  url: string
  width: number
  height: number
  status: string
}

interface SourceItemDescription {
  text: string
  plainText: string
  lastUpdated: string
  dateCreated: string
  snapshot: Snapshot
}

export { SourceItemDescription }
