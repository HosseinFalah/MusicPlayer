export type Artist = {
    id: string;
    image: {
        url: string;
    };
    name: string;
    slug: string;
}

export type Musics = {
    id: string;
    name: string;
    slug: string;
    coverPhoto: {
        url: string;
    }
    artist: {
        name: string;
        slug: string;
    }
}

export type Music = {
    id: string;
    name: string;
    slug: string;
    coverPhoto: {
        url: string;
    }
    file: {
        url: string;
    }
    artist: {
        slug: string;
        name: string;
    }
}