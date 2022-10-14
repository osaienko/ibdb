module Api
  module V1
    class BeersController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        beer = Beer.all
        render json: BeerSerializer.new(beer, options).serialized_json
      end

      def show
        beer = Beer.find_by(slug: params[:slug])
        render json: BeerSerializer.new(beer, options).serialized_json
      end

      def create
        beer = Beer.new(beer_params)

        if beer.save
          render json: BeerSerializer.new(beer).serialized_json
        else
          render json: { error: beer.errors.messages }, status: 422
        end

      end

      def update
        beer = Beer.find_by(slug: params[:slug])

        if beer.update(beer_params)
          render json: BeerSerializer.new(beer, options).serialized_json
        else
          render json: { error: beer.errors.messages }, status: 422
        end

      end

      def destroy
        beer = Beer.find_by(slug: params[:slug])

        if beer.destroy
          head :no_content
        else
          render json: { error: beer.errors.messages }, status: 422
        end

      end

      private

      def beer_params
        params.require(:beer).permit(:name, :image_url)
      end

      def options
        @options ||= {include: %i[reviews]}
      end
    end
  end
end