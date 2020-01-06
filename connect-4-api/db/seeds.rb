# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "destroying games"
Game.destroy_all

# puts "Making new games"

# games = 
# [
#     {
#         player_1: "Jwen",
#         player_2: "Los",
#         winner: "Jwen",
#     },
#     {
#         player_1: "Jen",
#         player_2: "Carlos",
#         winner: "Carlos",
#     },
#     {
#         player_1: "James",
#         player_2: "Luis",
#         winner: "Luis",
#     },
#     {
#         player_1: "Noah",
#         player_2: "Mike",
#         winner: "Noah",
#     },
#     {
#         player_1: "Tashawn",
#         player_2: "Dana",
#         winner: "Dana",
#     },
#     {
#         player_1: "Brianna",
#         player_2: "Tashawn",
#         winner: "Brianna",
#     },
#     {
#         player_1: "Steven",
#         player_2: "Steven",
#         winner: "TIE",
#     },
#     {
#         player_1: "Tashawn",
#         player_2: "Steven",
#         winner: "TIE",
#     }

# ]

# games.each do |game| 
#     Game.create(game)
# end