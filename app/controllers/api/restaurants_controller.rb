class Api::RestaurantsController < ApplicationController
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

    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end
end
