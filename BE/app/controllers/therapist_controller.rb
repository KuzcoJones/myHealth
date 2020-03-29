class TherapistController < ApplicationController
  def index
    therapists = Therapist.all
    render json: TherapistSerializer.new(therapists).to_serialized_json
  end

  def show
    therapist = Therapist.find(params["id"])
    render json: therapist
  end

  def create
    
    # token = request.headers[:Authorization].split(' ')[1]
    # decoded_token = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})

    # user_id = decoded_token[0]['user_id']

    
      user = User.find_by(username: params['username'])
      therapist = Therapist.create(user: user, name: params['name'], bio: params['bio'], location: params['location'])
      render json: therapist
  end

  def update
      token = request.headers[:Authorization].split(' ')[1]

      decoded_token = JWT.decode(token, 'secret', true, { algorithm: 'HS256'})

      user_id = decoded_token[0]['user_id']

      user = User.find(user_id)

      therapist = Therapist.find_by(user: user)

      therapist.update(therapist_params)
      render json: therapist
  end

 

  def delete
    therapist = Therapist.find(params['id'])
    therapist.destroy
  end

  private
  def therapist_params
    params.require(:therapist).permit(:name, :bio, :location, :user)
  end

end

