class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        sleep(1);
        user_params = params[:user]
        @user = User.find_by_credentials(
            user_params[:email],
            user_params[:password]
        )
        if !@user.nil?
            sign_in!(@user)
            render 'api/users/show'
        else
            render json: ["This email doesn't exist or password is wrong, please try again."], status: 401
        end
    end

    def destroy
        sleep(1);
        sign_out!
        render json: {}
    end
end
