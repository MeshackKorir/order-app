class UsersController < ApplicationController
  before_action :authenticate_user, only: [:show]

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: { id: user.id, username: user.username, address: user.address, phone: user.phone }, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def reset
    @username = User.find_by(username: params[:username].to_s)
    if @username.update(password: params[:password].to_s)
      render json: @username, status: :ok
    else
      render json: { error: 'Failed to update username.' }, status: :unprocessable_entity
    end
  end


  private

  def user_params
    params.permit(:username, :password, :address, :phone, :email, :password_confirmation)
  end
  # def reset_params
  #   params.permit(:username, :password)
  # end


  def authenticate_user
    unless logged_in?
      render json: { errors: "Unauthorized" }, status: :unauthorized
    end
  end

  def logged_in?
    session[:user_id].present?
  end

  def current_user
    User.find_by(id: session[:user_id])
  end
end
