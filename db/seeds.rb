# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all
Restaurant.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('cities')
ActiveRecord::Base.connection.reset_pk_sequence!('restaurants')

City.create!(name: 'Los Angeles', state: 'CA')
City.create!(name: 'San Fracisco', state: 'CA')
City.create!(name: 'Miami', state: 'FL')
City.create!(name: 'New York City', state: 'NY')
City.create!(name: 'Honolulu', state: 'HI')

Restaurant.create!(
    name: 'Yamakase', 
    website_url: nil, 
    address: '123 St, Los Angeles, CA', 
    zip_code: '90010',
    phone_number: '123-333-3456',
    price_level: 5,
    average_rating: 4.5,
    city_id: 1,
)
