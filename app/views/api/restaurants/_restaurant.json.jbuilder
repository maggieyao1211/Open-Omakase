json.extract! restaurant, :id, :name, :description, :website_url, :address, :zip_code, :phone_number, :price_level, :average_rating, :city_id

json.reviews do
    restaurant.reviews.each do |review|
        json.set! review.id do 
            json.id review.id
            json.user_id review.user_id
            json.comment review.comment
            json.rating review.rating
            json.user_first_name review.user.first_name
            json.user_last_name review.user.last_name
            json.user_review_count review.user.reviews.count
        end
    end
end