class Api::RestaurantsController < ApplicationController
    def index
        filters = params[:filters]
        if !filters || !filters[:city_id]
            @restaurants = Restaurant.all
        else
            @restaurants = Restaurant.all.where(city_id: filters[:city_id])
        end
        render :index
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end
end
