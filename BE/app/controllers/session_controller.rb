class SessionsController < ApplicationController
    def new
        # nothing to do here!
    end
 
    def create
        user = User.find_by(username: params[:username])
        authenticated = user.try(:authenticate, params[:password])
        return head(:forbidden) unless authenticated 
        @user = user 
        session[:user_id] = @user.id
    end

    def destroy
        session.delete :username
      end

end
