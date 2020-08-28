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
    website_url: 'https://www.yamakase.com', 
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
    description: "Kyoto-style cuisine, Koichi Endo has adopted a unique management style for his restaurant and continued to expand his business operations,"\
        "while preserving the traditional culture and customs of Kyoto as the eldest son of the long-standing Japanese style hotel."\
        "His sharp, well-honed skills as a master tempura chef have impressed customers from all over the world."\
        "As the head chef of TEMPURA ENDO – Kyoto-style – he will continue to demonstrate his exquisite art of tempura to our patrons in Beverly Hills.",
    website_url: 'http://www.beverlyhills-endo.com/', 
    address: '9777 S.Santa Monica Blvd. Beverly Hills, CA', 
    zip_code: '90210',
    phone_number: '(310) 274-2201',
    price_level: 3,
    average_rating: 3.3,
    city_id: 1,
)

Restaurant.create!(
    name: 'Kusakabe',
    description: nil,
    website_url: nil, 
    address: '456 Street, San Francisco, CA', 
    zip_code: '94045',
    phone_number: '(123) 333-3456',
    price_level: 3,
    average_rating: 2,
    city_id: 2,
)

Restaurant.create!(
    name: 'Hashiri', 
    description: nil,
    website_url: nil, 
    address: '678 Street, San Francisco, CA', 
    zip_code: '94025',
    phone_number: '(123) 444-3456',
    price_level: 4,
    average_rating: 5,
    city_id: 2,
)

Restaurant.create!(
    name: 'Maruyama', 
    description: nil,
    website_url: nil, 
    address: '279 Baldwin Avenue, San Mateo, CA', 
    zip_code: '94401',
    phone_number: '(650) 315-2945',
    price_level: 3,
    average_rating: 3.9,
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

# start

Restaurant.create!(
    name: 'Kinjo', 
    description: "Offering two  Kaiseki  and Sushi focused  omakase  menus which incorporates traditional edomae and kaiseki  culinary techniques"\
        "into a delicate style menu and is reflected as seasons change. "\
        "Focusing on enticing our senses by elevating each ingredient to its highest potential while preserving its natural integrity."\
        "With sustainability in mind, fish are sourced locally and globally.",
    website_url: 'http://www.kinjosf.com/', 
    address: '2206 Polk Street, San Francisco,', 
    zip_code: '94109',
    phone_number: '(415) 921-2222',
    price_level: 4,
    average_rating: 4.8,
    city_id: 2,
)

Restaurant.create!(
    name: 'Sushi Ginza Onodera', 
    description: 'Serving quality Edomae style traditional sushi with fish imported from Toyosu Fish Market and Niigata prefecture rice tinted in red vinegars.',
    website_url: 'https://www.sushiginzaonoderala.com/', 
    address: '609 La Cienega Blvd, West Hollywood, CA', 
    zip_code: '90060',
    phone_number: '(323) 433-4817',
    price_level: 5,
    average_rating: 5,
    city_id: 1,
)

Restaurant.create!(
    name: 'Sushi Zo', 
    description: "The balance between neta (the seafood topping) and shari (sushi rice) is the most important aspect of sushi. "\
        "Ittai-kan is when the neta and shari unite in perfect harmony."\
        "Our restaurants feature omakase, a Japanese-style chef's choice meal, which allows us to present our customers with selections that represent the seasons. "\
        "Sushi Zo selects only the highest quality and freshest natural ingredients, from our trusted local and worldwide sources. "\
        "Our rice is meticulously cooked, seasoned with a unique blend of vinegars and served at body temperature, to create the perfect partner to the neta.",
    website_url: 'http://sushizo.us/', 
    address: '9824 National Blvd., #C, Los Angeles, CA', 
    zip_code: '90034',
    phone_number: '(424) 201-5576',
    price_level: 4,
    average_rating: 4,
    city_id: 1,
)

Restaurant.create!(
    name: 'Q Restuarant', 
    description: "Our omakase menus showcase Chef Hiro’s interpretation of artisan Edo-style sushi. Offerings vary seasonally and feature that day’s highest quality selections. Chef Hiro begins with tsumami (small appetizers),"\
        "before serving multiple sashimi and nigiri sushi courses. Chef Hiro considers his rice as important as the fish, and it reflects decades of cultivating a precise balance of red vinegar (brewed from aged sake cakes) and sea salt. "\
        "Chef Hiro employs varied techniques to coax optimal flavor profiles from the fish, including aging (a process called nekaseru), curing, and adjusting temperatures just before serving. This exacting attention extends to the sauces, "\
        "salts and garnishes applied to evince the essence of each particular fish."\
        "In every dish, Chef Hiro seeks to harmonize size, appearance, temperature, texture, and taste. With Chef Hiro modulating these subtle variables, you need only put your trust in his hands and savor each bite at its moment of perfection.",
    website_url: 'http://www.qsushila.com/', 
    address: '521 W. 7th Street, Los Angeles, CA', 
    zip_code: '90014',
    phone_number: '(213) 225-6285',
    price_level: 4,
    average_rating: 4.5,
    city_id: 1,
)

Restaurant.create!(
    name: 'NAOE', 
    description: "its not fresh...  its Alive.",
    website_url: 'https://naoemiami.com/', 
    address: '661 Brickell Key Drive, Miami, FL', 
    zip_code: '33131',
    phone_number: '(305) 947-6263 ',
    price_level: 4,
    average_rating: 4.2,
    city_id: 3,
)

Restaurant.create!(
    name: 'Hiden', 
    description: "HIDEN (HI-DEN) is inspired by the legends and tales of small secret omakase restaurants in Japan. "\
        "Combining authentic Japanese fine dining experience with a fresh and new food & service concept, our food is presented through a seasonal tasting menu featuring the best domestic ingredients and fresh ingredients flown in from Japan.",
    website_url: 'http://hidenmiami.com/', 
    address: '313 NW 25th Street, Miami, FL', 
    zip_code: '33127',
    phone_number: nil,
    price_level: 5,
    average_rating: 4.6,
    city_id: 3,
)

Restaurant.create!(
    name: 'Azabu Miami Beach', 
    description: "The name Azabu comes from a district in Tokyo, Japan, which began as a hub for merchants and local businesses. Now the city is home to embassies from many countries, giving the area an air of diversity, while preserving the history of local commerce with a modern, nostalgic touch."\
        "The Michelin-starred concept, Azabu Miami Beach, houses various experiences under one roof; tied together with the spirit of Omatenashi, the essence of Japanese hospitality."\
        "The first concept is a full service dining room with a stunning open kitchen. Beyond lies The Den, an exclusive hidden sushi counter helmed by Tokyo-trained chefs.",
    website_url: 'https://azabuglobal.com/', 
    address: 'Stanton Hotel,161 Ocean Drive, Miami Beach, FL', 
    zip_code: '33139',
    phone_number: '(786) 276-0520',
    price_level: 3,
    average_rating: 3.6,
    city_id: 3,
)

Restaurant.create!(
    name: 'Sushi by Bou', 
    description: "Sushi by Bou is changing the sushi scene across America. With an ever-growing list of locations, Sushi by Bou brings a high end Omakase experience to the people in an intimate and speakeasy environment. "\
        "Our timed Omakase (30 minute and 60 minute options) is served at either a 4 seat or 8 seat counter and features the freshest of fish, "\
        "both locally sourced, as well as brought in from all over the world. Our seasoned Sushi Chefs serve you directly, guiding you through the meal, and providing a truly exclusive experience. "\
        "The high-end cuisine is greatly complimented by our craft selection of handmade cocktails, imported sake, and rare Japanese Whiskeys.",
    website_url: 'https://www.sushibybou.com/', 
    address: '1116 Ocean Dr 2nd floor, Miami Beach, FL', 
    zip_code: '33139',
    phone_number: '(305) 922-9195',
    price_level: 4,
    average_rating: 1.5,
    city_id: 3,
)

Restaurant.create!(
    name: 'Wabi Sabi By Shuji', 
    description: "Wabi Sabi is named after the Japanese philosophy centered on accepting the imperfection in beauty."\
        "Chef Shuji Hiyakawa, who grew up inside his father’s Udon noodle shop in Japan,"\
        "is now introducing to Miami the most authentic, yet simple Japanese sushi bowls."\
        "At Wabi Sabi Chef Shuji is compressing his three decades’ worth of experience in Japanese fine dining into"\
        "five signature dishes focused on quality and flawless execution."\
        "Diners will be able to customize their experience, with the option to select various bases and sauces.",
    website_url: 'https://www.wabisabibyshuji.com/', 
    address: '851 NE 79th Street, Miami, FL', 
    zip_code: '33138',
    phone_number: '(305)890-7228',
    price_level: 3,
    average_rating: 4.7,
    city_id: 3,
)
 
Restaurant.create!(
    name: 'Uchu', 
    description: "Uchū Sushi Bar brings an utterly transportive traditional Japanese dining experience via our 10-seat sushi counter located in the heart of the Lower East Side. "\
        "Upon crossing the threshold, guests leave behind the bustling city and are welcomed to a serene oasis to be served an incomparable tasting menu prepared by legendary Chef Eiji Ichimura, featuring the finest ingredients and highest quality fish. "\
        "The minimalist décor of Uchū Sushi Bar harkens back to classic Japanese design, allowing our tasting menu to be the focus of the guest experience. "\
        "The subtle tones and fresh floral accouterments ensconce you within our tranquil environment, preparing guests for the premier dining experience that awaits.",
    website_url: 'http://uchu.nyc/', 
    address: '217 Eldridge Street, New York, NY', 
    zip_code: '10002',
    phone_number: '(212) 203-7634',
    price_level: 5,
    average_rating: 4.9,
    city_id: 4,
)

Restaurant.create!(
    name: 'Satsuki', 
    description: "High-end omakase sushi dinners are prepared in this discreet, light-wood space with a 10-seat bar. The unique nature of this marvel begins with its layout. Descend to the lower level and first encounter the opulent Three Pillars bar."\
        "Then comes the elegant Suzuki dining room, and finally, reach your goal at Satsuki. This omakase-only counter seats no more than ten guests in an utterly tranquil shrine dedicated to upscale Japanese cuisine.",
    website_url: 'https://www.satsuki.nyc/', 
    address: '114W 47th street, New York, NY', 
    zip_code: '10036',
    phone_number: '(212)-278-0047',
    price_level: 4,
    average_rating: 3.7,
    city_id: 4,
)

Restaurant.create!(
    name: 'Masa', 
    description: "Chef Masa apprenticed under the direction of sushi master, Suhiyama Toshiaki, at Tokyo’s famed Ginza Sushi-ko where he learned to appreciate an intimate relationship with food and dining to create a full sensory experience. "\
        "After moving up the ranks under the tutelage of his revered master, Chef Masa followed a boyhood ambition to travel to the U.S. to open his own restaurant — and play lots of golf."\
        "In Los Angeles, he opened Ginza Sushi Ko in 1987, an homage to his former teacher, where he taught himself to combine classic and modern techniques to serve dishes inspired by tradition, yet inflected with his creative spirit."\
        "A move to New York on the advice of friend Chef Thomas Keller came ten years later, and Masa opened its doors in 2004."\
        "A solid hinoki wood sushi counter is the focal point of the otherwise simple décor at Masa, allowing the ingredients and dishes to shine. The courses build on seasonal properties utilized only in their freshest, most quintessential, state."\
        "Each course is served on plateware designed by Chef Masa himself, through his ceramics vertical Masa Designs, chosen to complement the dish's ideal visual and gastronomic appeal. Masa has held Three Michelin stars since 2009.",
    website_url: 'http://www.masanyc.com/', 
    address: '10 Columbus Circle; 4th Floor, New York, NY', 
    zip_code: '10019',
    phone_number: '(212)-823-9807',
    price_level: 5,
    average_rating: 4.8,
    city_id: 4,
)

Restaurant.create!(
    name: 'Sushi nakazawa', 
    description: "Sushi Nakazawa serves the omakase of Chef Daisuke Nakazawa. Within the twenty-course meal lies Chef Nakazawa's passion for sushi.",
    website_url: 'https://www.sushinakazawa.com/', 
    address: '23 commerce street, New York, NY', 
    zip_code: '10014',
    phone_number: '(212) 924-2212',
    price_level: 4,
    average_rating: 3.9,
    city_id: 4,
)

Restaurant.create!(
    name: 'Odo', 
    description: "Odo is a kaiseki speakeasy opened by Chef Hiroki Odo in New York's Flatiron District. The 14-seat Chef's Counter restaurant serves a nine-course seasonally.",
    website_url: 'https://www.odo.nyc/', 
    address: '17W 20th Street, New York, NY', 
    zip_code: '10011',
    phone_number: nil,
    price_level: 4,
    average_rating: 2.9,
    city_id: 4,
)

Restaurant.create!(
    name: 'Sushi Maru', 
    description: 'Maru Sushi is an Omakase sushi restaurant that is rooted in the traditional Edomae style of sushi.  Omakase generally translates to "I leave it up to you" or "I trust you, Chef".'\
        'Edomae sushi traces back to the 1800s in Edo, present-day Tokyo, Japan, where sushi started being prepared directly in front of the customers.'\
        'Chef Takeshi Kawasaki continues to honor these traditions and carefully crafts his menu to feature the varying flavors of each season.',
    website_url: 'https://www.marusushihawaii.com/', 
    address: '1731 Kalakaua Avenue, Honolulu, HI', 
    zip_code: '96826',
    phone_number: '(808) 951-4445',
    price_level: 3,
    average_rating: 4.3,
    city_id: 5,
)

Restaurant.create!(
    name: 'Sushi Ginza Onodera(HL)', 
    description: "Sushi Onodera is well-known sushi restauant in Tokyo. I was so excited to taste how they are going to perform in Hawaii. The Edomae sushi style involves using the aging process to preserve the fish, develop umami flavors and create a more tender texture.",
    website_url: 'https://sushiginzaonoderahawaii.com/', 
    address: '808 Kapahulu Avenue, Honolulu, HI ', 
    zip_code: '96816',
    phone_number: '(808) 735-2375',
    price_level: 5,
    average_rating: 4.7,
    city_id: 5,
)