class Reservation < ApplicationRecord
    validates :user_id, :restaurant_id, :reserve_date, :reserve_time, :party_size, presence: true

    belongs_to :user, class_name: :User, foreign_key: :user_id
    belongs_to :restaurant, class_name: :Restaurant, foreign_key: :restaurant_id
end
