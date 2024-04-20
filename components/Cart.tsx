import Link from "next/link"
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { Artist } from "@/types"

const Cart = ({ id, image, name, slug }: Artist) => {
    return (
        <Card sx={{ backgroundColor: '#3f3f3f', color: '#fff' }}>
            <CardMedia
                sx={{ height: 200 }}
                image={image.url}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="#fff">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Stack direction={'row'} gap={'1rem'}>
                    <Button variant="outlined" color="warning">اشتراک گذای</Button>
                    <Link href={`/artist/${slug}`}>
                        <Button variant="contained" color="secondary">بیشتر</Button>
                    </Link>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default Cart