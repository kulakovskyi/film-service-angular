export interface generes{
    if: number
    name: string
}

export interface productionCompanies {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface productionCountries{
    iso_3166_1: string
    name: string
}

export interface spokenLanguage{
    english_name: string
    iso_639_1: string
    name: string
}

export interface MovieInfoInterface{
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: generes[]
    length: number
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: productionCompanies[]
    production_countries: productionCountries[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: spokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
