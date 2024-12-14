interface Params{
    id: string;
}

// params: get dynamic URL as an id
// Manually specify type of params.id
export default function EventDetailPage({params} : {params: Params}){
    const eventId = params.id;
    return(
        <>
            <h1>Event Detail Page</h1>
            <p>Event ID: {eventId}</p>
        </>
    )
}