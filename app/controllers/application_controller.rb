class ApplicationController < ActionController::Base
    helper_method :current_user, :signed_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
        @current_user
    end

    def signed_in?
        current_user != nil
    end

    def sign_in!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def sign_out!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
