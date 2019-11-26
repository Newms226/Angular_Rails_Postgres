class ApiController < ApplicationController
  def status
    render json: {data: 'json'}
  end
end
