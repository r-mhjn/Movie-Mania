import moment from 'moment';

// getFormattedReleaseDate returns a release date of format 
export const getFormattedReleaseDate = (date) => {
    return moment(date).format('LL');
}

// Constants
export const PosterUrl = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/empire_strikes_back_ver12_xlg_480x.progressive.jpg?v=1603380555"