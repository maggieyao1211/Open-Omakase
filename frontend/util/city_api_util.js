export const fetchCity = cityId => {
    return $.ajax({
      url: `/api/cities/${cityId}`,
    });
};