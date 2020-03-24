class SpecialtyController < ApplicationController

  def index
    specialty = Specialty.all 
    render json: specialty
  end

  def show
    specialty = Specialty.find(params:['id'])
  end

  def create
    specialty = Specialty.create(specialty_params)
    render json: specialty
  end

  def update
    specialty = specialty.find(params['id'])
    specialty.update(specialty_params)
    render json: specialty
  end

  def delete
    specialty = Specialty.find(params['id'])
    specialty.destroy
  end

  private 
  def specialty_params
    params.require(:specialty).permit(:title, :info)
  end

end
