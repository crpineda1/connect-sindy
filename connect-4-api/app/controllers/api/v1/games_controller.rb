class Api::V1::GamesController < ApplicationController

    def index
        games = Game.all
        render json: games, except: [:created_at, :updated_at]
        # render json: users, only: [:name, :id]
    end

    def create
        game = Game.create(game_params)
        render json: game, except: [:created_at, :updated_at]
    end

    private

    def game_params
        params.require(:game).permit(:player_1, :player_2, :winner)
    end

end
