export const getImgSrcByRestaurantId = restaurantId => {
    switch (restaurantId) {
        case 1:
            return window.yamakase;
        case 2:
            return window.tempuraendo;
        default:
            return null;
    }
};