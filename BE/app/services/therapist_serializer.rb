class TherapistSerializer 
    
def initialize(therapist_object)
    @therapist = therapist_object
end
    
    
   
def to_serialized_json
    @therapist.to_json(
        :include => {
            :user => {:only => [:username]},
            :services => {:only => [:name, :description ]},
            :specialties => {:only => [:title, :info ]}
        }
    )
end




# def to_serialized_json
#     @sighting.to_json(:include => {
#       :bird => {:only => [:name, :species]},
#       :location => {:only => [:latitude, :longitude]}
#     }, :except => [:updated_at])
#   end
end