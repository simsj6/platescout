const SEARCH_PATH = "/api/yelp/businesses/search";

async function searchBusinesses(term, location, sortBy) {
    // create URL search parameters using term, location, sort_b, and limit
    const params = new URLSearchParams({
        term,
        location,
        sort_by: sortBy,
        limit: "20",
    });

    // send a fetch request to the Yelp backend search endpoint
    const res = await fetch(`${SEARCH_PATH}?${params}`);
    // check if the response failed and throw an error if needed
    if (!res.ok) {
        throw new Error(`Yelp request failed (${res.status})`);
    }

    // convert response to json
    const data = await res.json();

    // return businesses array mapped into the format used by the Business component
    const businesses = data.businesses.map((item) => ({
        imageSrc: item.image_url,
        name: item.name,
        address: item.location.address1,
        city: item.location.city,
        state: item.location.state,
        category: item.categories[0].alias,
        rating: item.rating,
        reviewCount: item.review_count
    }));
    return businesses;
}

export default searchBusinesses;