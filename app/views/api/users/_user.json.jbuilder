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
