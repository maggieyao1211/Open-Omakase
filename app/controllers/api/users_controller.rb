class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        sleep(1);
        @user = User.create(user_params)
        if @user.save
            sign_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
end
