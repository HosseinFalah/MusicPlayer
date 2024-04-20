import { gql } from "@apollo/client";

const GET_ARTIST = gql`
    query {
        artists {
            image {
                url
            }
            name
            slug
            id
        }
    }
`

const GET_LIMIT_MUSICS = gql`
    query {
        musics(first: 6) {
            id
            name
            slug
            coverPhoto {
                url
            }
            artist {
                name
                slug
            }
        }
    }
`

const GET_ARTIST_DATA = gql`
    query getArtistData($slug: String!) {
        artist(where: { slug: $slug }) {
            name
            image {
                url
            }
            musics {
                id
                name
                slug
                coverPhoto {
                    url
                }
            }
            description {
                html
            }
        }
    }
`

const GET_ALL_MUSICS = gql`
    query {
        musics(first: 50) {
            id
            name
            slug
            coverPhoto {
                url
            }
            file {
                url
            }
            artist {
                slug
                name
            }
        }
    }
`;

const GET_PLAY_MUSIC = gql`
    query getPlayMusic($slug: String!) {
        music(where: { slug: $slug }) {
            id
            name
            artist {
                name
            }
            file {
                url
            }
            coverPhoto {
                url
            }
        }
    }
`

export {
    GET_ARTIST,
    GET_LIMIT_MUSICS,
    GET_ARTIST_DATA,
    GET_ALL_MUSICS,
    GET_PLAY_MUSIC
}