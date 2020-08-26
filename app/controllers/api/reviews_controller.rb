class Api::ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        sleep(1)
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :restaurant_id, :comment, :rating)
    end
end