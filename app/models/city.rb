class City < ApplicationRecord
    validates :name, :state, presence: true
end
