export interface MovieInterface{
    id: number
    results: resultsMovie[]
}

export interface resultsMovie{
    id :string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}
