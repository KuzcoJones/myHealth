# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Service.destroy_all
Therapist.destroy_all
User.destroy_all
Specialty.destroy_all





sally = User.create!(username: 'Sallyshells', password: 'sellshells', isTherapist: true)

sallyS = Therapist.create!(name:'Sally Muffins', bio:"Born in a muffin shop", location:'Chicago', user:sally)


deep_tissue = Service.create!(name: 'deep tissue', description: 'Heavy slow pressure, might not be for beginners')

sally_dt = Specialty.create!(title:"Sally's Deep tissue", therapist:sallyS, service:deep_tissue, info:'Sally punches higher than her weight class beware')





