import { Musics } from "@/types"
import { Box, Typography } from "@mui/material"
import Link from "next/link"

const MusicBox = ({ name, coverPhoto, artist, slug }: Musics) => {
    return (
        <Box sx={{ backgroundColor: '#353535', p: 2, borderRadius: 3 }}>
            <Link href={`/music/${slug}`} className="no-underline">
                <Box
                    component={'img'}
                    src={coverPhoto.url}
                    alt={name}
                    width={1}
                    loading="lazy"
                />
                <Typography sx={{ color: '#fff', textAlign: 'center', mb: 2 }}>
                    {name}
                </Typography>
            </Link>
            <Link href={`/artist/${artist?.slug}`} className="no-underline">
                <Typography sx={{ color: '#fff', textAlign: 'center' }}>
                    {artist?.name}
                </Typography>
            </Link>
        </Box>
    )
}

export default MusicBox