stage="$1"

if [ -z "$stage" ]; then
    echo "The stage argument must be provided. ex: ./start.sh dev (or prod)"
    exit 1
fi

if [ "$stage" != "dev" ] && [ "$stage" != "prod" ]; then
    echo "Invalid stage. Stage must be 'dev' or 'prod'."
    exit 1
fi

env_path=".$stage.env"

if [ ! -f "$env_path" ]; then
    echo "File $env_path does not exist. Please create one based on .env.example"
    exit 1
fi

docker-compose --env-file .$stage.env up --build