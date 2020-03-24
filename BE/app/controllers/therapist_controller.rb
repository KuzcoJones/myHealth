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
      therapist = Therapist.create(therapist_params)
      render json: therapist
  end

  def update
    therapist = Therapist.find(params['id'])
    therapist.update(therapist_params)
    render json: therapist
  end

 

  def delete
    therapist = Therapist.find(params['id'])
    therapist.destroy
  end

  private
  def therapist_params
    params.require(:therapist).permit(:name, :bio, :location)
  end

end

