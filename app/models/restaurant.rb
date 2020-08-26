class Restaurant < ApplicationRecord
    validates :name, :address, :zip_code, :price_level, :average_rating, :city_id, presence: true

    has_many :reviews, class_name: :Review, foreign_key: :restaurant_id
    has_many :reservations, class_name: :Reservation, foreign_key: :restaurant_id
end
