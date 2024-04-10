import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

export function Artist({ artist }) {

    return (
        <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img src={artist.images[0].url} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {artist.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {artist.genres.toString()}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                Followers: {artist.followers.total}
            </CardFooter>
        </Card>
    );
}