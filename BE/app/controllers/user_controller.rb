class UserController < ApplicationController 

# def index
#     users = User.all.select{ |user| if ( user.isTherapist === true ) return  user }
#     render json: UserSerializer.new(users).to_serialized_json
# end

def new
end

def create
    
    user = User.create!(
        username: params['username'], 
        password_digest: params['password'],
    )

    payload = { user_id: user.id }
        token = JWT.encode(payload, 'secret', 'HS256')

    render json: { id: user.id, username: user.username, token: token}
    end





end