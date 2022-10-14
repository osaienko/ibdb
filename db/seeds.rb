# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# not dealing with the s3 for now
IMG_SRC = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Diebels_in_Altbierglas.jpg"

beers = Beer.create([
                            {
                              name: Faker::Beer.name,
                              image_url: IMG_SRC
                            },
                            {
                              name: Faker::Beer.name,
                              image_url: IMG_SRC
                            }
                          ])

reviews = Review.create([
                          {
                            reviewer: Faker::Books::Dune.character,
                            description: Faker::Beer.style,
                            score: Faker::Number.between(from: 1, to: 5),
                            color: Faker::Number.between(from: 1, to: 5),
                            aroma: Faker::Number.between(from: 1, to: 5),
                            flavor: Faker::Number.between(from: 1, to: 5),
                            body: Faker::Number.between(from: 1, to: 5),
                            beer: beers.first
                          },
                          {
                            reviewer: Faker::Books::Dune.character,
                            description: Faker::Beer.style,
                            score: Faker::Number.between(from: 1, to: 5),
                            color: Faker::Number.between(from: 1, to: 5),
                            aroma: Faker::Number.between(from: 1, to: 5),
                            flavor: Faker::Number.between(from: 1, to: 5),
                            body: Faker::Number.between(from: 1, to: 5),
                            beer: beers.first
                          }
                        ])