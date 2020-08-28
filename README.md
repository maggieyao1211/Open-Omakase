# README

[..OpenOmakase Link..](https://open-omakase.herokuapp.com)

OpenOmakase is a full-stack project inspired by Opentable. It's a platform that people can search and make reservation for japanese omakase-type restaurants over many large US cities like LA, SF, NYC, e.t.c. 

# Technology

* Ruby on rails
* React & Redux
* HTML & CSS

# Features
* Maintain user authenticiation security from frontend to backend
* Display all restaurants in an organized layout by starring this week, city and take out category
* Users can search restaurants by city, rating and price level
* Users can view restaurants detail information and choose a date and time slot to make reservations
* Users can give star rating and review comment for a restaurant which will be displayed on restaurant detail page
* Users can see all their reservations on their profile page

# Challenges
1. Search/Filters
* Use componentDidUpdate to check if state has changed from prevState, if changed, re-call fetchRestaurants action with filters to refetch restaurants list from backend then re-render on frontend
```javascript
componentDidUpdate(_prevProps, prevState, _snapshot) {
  const { prices, rating } = this.state; 
  if (prices != prevState.prices || rating != prevState.rating) {
      this.props.fetchRestaurants({
        city_id: this.props.cityId,
        prices,
        rating,
      });
  }
}
```

```
def index
  @restaurants = Restaurant.all
  filters = params[:filters]
  if filters != nil
    @restaurants = @restaurants.where(city_id: filters[:city_id]) if filters[:city_id]
    @restaurants = @restaurants.where(price_level: filters[:prices]) if filters[:prices] && filters[:prices].length() > 0
    @restaurants = @restaurants.where('average_rating >= ?', filters[:rating].to_i) if filters[:rating] != nil && filters[:rating] != ''
  end
  render :index
end
```

2. Restaurant with reviews & User with reservations
* Add restaurant.reviews into restaurant's show.json.jbuilder so don't need to build review's own reducers and actions on redux store. Same for user with reservations, add user.reservations into user/s show.json.jbuilder so don't need to build reservation's own reducers and actions on redux store
```
json.extract! restaurant, :id, :name, :description, :website_url, :address, :zip_code, :phone_number, :price_level, :average_rating, :city_id

json.reviews do
    restaurant.reviews.each do |review|
        json.set! review.id do 
            json.id review.id
            json.comment review.comment
            json.rating review.rating
            json.user_first_name review.user.first_name
            json.user_last_name review.user.last_name
            json.user_review_count review.user.reviews.count
        end
    end
end
```

```
json.extract! user, :id, :email, :first_name, :last_name

json.reservations do
    user.reservations.each do |reservation|
        json.set! reservation.id do 
            json.id reservation.id
            json.restaurant_id reservation.restaurant_id
            json.restaurant_name reservation.restaurant.name
            json.reserve_date reservation.reserve_date
            json.reserve_time reservation.reserve_time
            json.party_size reservation.party_size
            json.special_notice reservation.special_notice
        end
    end
end
```

# Possible future features
* Edit reservation datetime and special notice
* Edit star rating and review comment
* Tags for restaurants and search by tags
