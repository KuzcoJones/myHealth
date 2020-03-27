class ApplicationController < ActionController::API
    
    def current_user 
        if session[:user_id]
            # Come back to check on this below
            @current_user = User.find_by_id(session[:user])
        else
            @current_user = nil 
        end

        def logged_id?
            current_user != nil
        end
    end
end
