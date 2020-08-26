class Api::ReservationsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        sleep(1)
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 401
        end
    end

    def destroy
        sleep(1);
        reservation = Reservation.find(params[:id])
        reservation.destroy if reservation != nil
        render json: {}
    end

    private
    def reservation_params
        params.require(:reservation).permit(:user_id, :restaurant_id, :reserve_date, :reserve_time, :party_size, :special_notice)
    end
end
