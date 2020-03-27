class SessionsController < ApplicationController

    def new
    end
 
    def create
        
        user = User.find_by(username: params[:username])

        payload = { user_id: user.id }
        token = JWT.encode(payload, 'secret', 'HS256')


        if user && user.authenticate(params[:password])
            render json: { id: user.id, username: user.username, token: token}

            else 
                render json: {error: 'Invalid Credtials'}, status: 401
            end
        end
    
    def show 
        token = request.headers[:Authorization].split(' ')[1]
        puts token 
        puts '============================'
        decoded_token = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})

        user_id = decoded_token[0]['user_id']

        user = User.find(user_id)

        if user 
            render json: { id: user.id, username: user.username, token: token}
        else
            render json: {error: 'Invalid Token'}, status: 401
        end
    end

    def destroy
        session.delete 
    end

end
