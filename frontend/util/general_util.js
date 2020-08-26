const restaurantIdToImgSrcMap = {
    1: window.yamakase,
    2: window.tempuraendo,
    3: window.kusakabe,
    4: window.hashiri,
    5: window.maruyama,
    6: window.sushisho,
};

export const getImgSrcByRestaurantId = restaurantId => restaurantIdToImgSrcMap[restaurantId];

const cityIdToImgSrcMap = {
    1: window.la,
    2: window.sf,
    3: window.mia,
    4: window.nyc,
    5: window.hnl,
};

export const getImgSrcByCityId = cityId => cityIdToImgSrcMap[cityId];

export const allTimes = [
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
];

export const getNearbyTimeslots = (selectedTime) => {
    const selectedIndex = allTimes.indexOf(selectedTime);
    let nearbyTimes = [];
    if (selectedIndex === 0) {
        nearbyTimes = nearbyTimes.concat([selectedTime, allTimes[selectedIndex + 1], allTimes[selectedIndex + 2]]);
    } else if (selectedIndex === allTimes.length - 1) {
        nearbyTimes = nearbyTimes.concat([allTimes[selectedIndex - 2], allTimes[selectedIndex - 1], selectedTime]);
    } else {
        nearbyTimes = nearbyTimes.concat([allTimes[selectedIndex - 1], selectedTime, allTimes[selectedIndex + 1]]);
    }
    return nearbyTimes;
};

export const getDateStrFormat = (date) => {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - (offset * 60 * 1000));
    return localDate.toISOString().split('T')[0];
};