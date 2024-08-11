// ** In the name of Allah ♥️

const PodcastDetails = ({params} : {params: {podcastId: string}}) => {
    return (
            <p className="text-white-1">Podcast Details for {params.podcastId}</p>
    )
};

export default PodcastDetails;