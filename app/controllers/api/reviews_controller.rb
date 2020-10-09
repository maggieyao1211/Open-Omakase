class Api::ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update 
        @review = Review.find(params[:id])
        if @review.update(review_params)
          render :show
        else
          render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy if review != nil
        render json: {}
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :restaurant_id, :comment, :rating)
    end
end
