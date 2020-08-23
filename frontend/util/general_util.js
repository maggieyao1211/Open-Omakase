const restaurantIdToImgSrcMap = {
    1: window.yamakase,
    2: window.tempuraendo,
    3: window.kusakabe,
    4: window.hashiri,
    5: window.maruyama,
    6: window.sushisho,
};

export const getImgSrcByRestaurantId = restaurantId => restaurantIdToImgSrcMap[restaurantId];