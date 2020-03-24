# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Specialty.destroy_all
Service.destroy_all
Therapist.destroy_all


sally = Therapist.create(name:'Sally Muffins', bio:"Born in a muffin shop", location:'Chicago')
deep_tissue = Service.create(name: 'deep tissue', description: 'Heavy slow pressure, might not be for beginners')
sally_dt = Specialty.create(title:"Sally's Deep tissue", therapist:sally, service:deep_tissue, info:'Sally punches higher than her weight class beware')



10.times{Therapist.create(name:Faker::Name.name, bio:Faker::TvShows::NewGirl.quote, location:Faker::TvShows::ParksAndRec.city)}


10.times{Service.create(name:Faker::Construction.trade, description: Faker::Hipster.paragraph)}

10.times{Specialty.create(title:Faker::TvShows::HeyArnold.character, therapist:Therapist.all.sample, service:Service.all.sample, info:Faker::TvShows::SouthPark.quote)}

