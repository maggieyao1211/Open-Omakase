# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all
Restaurant.destroy_all
Review.destroy_all
Restaurant.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('cities')
ActiveRecord::Base.connection.reset_pk_sequence!('restaurants')
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')

City.create!(name: 'Los Angeles', state: 'CA')
City.create!(name: 'San Francisco', state: 'CA')
City.create!(name: 'Miami', state: 'FL')
City.create!(name: 'New York City', state: 'NY')
City.create!(name: 'Honolulu', state: 'HI')

Restaurant.create!(
    name: 'Yamakase', 
    description: 'Specializing unique Japanese fusion cuisine, artfully prepared by our Executive Chef Yama. You will enjoy not just a meal but a culinary experience.', 
    website_url: nil, 
    address: '123 St, Los Angeles, CA', 
    zip_code: '90010',
    phone_number: '(123) 333-3456',
    price_level: 5,
    average_rating: 4.5,
    city_id: 1,
)

Review.create!(
    user_id: 1,
    restaurant_id: 1,
    comment: 'Best japanese omakase I ever have, though price is bit expensive, but still worth!',
    rating: 5,
)

Review.create!(
    user_id: 2,
    restaurant_id: 1,
    comment: 'Very hard to make a reservation, but food is tasty and fresh!',
    rating: 4,
)

Restaurant.create!(
    name: 'Tempura Endo',
    description: 'avor our exquisite Kyoto-style tempura
        in a most traditional setting from the ancient capital of Japan.
        The ingredients for our delectable tempura feature the choicest seasonal delicacies.
        Indulge yourself in exquisite Kyoto-style tempura at Tempura Endo.', 
    website_url: nil, 
    address: '234 St, Los Angeles, CA', 
    zip_code: '90005',
    phone_number: '(123) 333-3456',
    price_level: 4,
    average_rating: 4.75,
    city_id: 1,
)

Restaurant.create!(
    name: 'Kusakabe',
    description: nil,
    website_url: nil, 
    address: '456 St, San Francisco, CA', 
    zip_code: '94045',
    phone_number: '(123) 333-3456',
    price_level: 4,
    average_rating: 4.2,
    city_id: 2,
)

Restaurant.create!(
    name: 'Hashiri', 
    description: nil,
    website_url: nil, 
    address: '678 St, San Francisco, CA', 
    zip_code: '94025',
    phone_number: '(123) 444-3456',
    price_level: 4,
    average_rating: 4.6,
    city_id: 2,
)

Restaurant.create!(
    name: 'Maruyama', 
    description: nil,
    website_url: nil, 
    address: '279 Baldwin Ave, San Mateo, CA', 
    zip_code: '94401',
    phone_number: '(650) 315-2945',
    price_level: 3,
    average_rating: 4.5,
    city_id: 2,
)

Restaurant.create!(
    name: 'Sushi Sho', 
    description: nil,
    website_url: nil, 
    address: '10749 San Pablo, El Cerrito, CA', 
    zip_code: '94530',
    phone_number: '(510) 525-1800',
    price_level: 3,
    average_rating: 3.9,
    city_id: 2,
)
