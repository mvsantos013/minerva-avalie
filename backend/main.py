from fastapi import FastAPI
from supertokens_python import init, InputAppInfo, SupertokensConfig
from supertokens_python.recipe import emailpassword, session
from supertokens_python.framework.fastapi import get_middleware
from supertokens_python import get_all_cors_headers
from starlette.middleware.cors import CORSMiddleware

init(
    app_info=InputAppInfo(
        app_name="minerva-avalie",
        api_domain="http://localhost:5001",
        website_domain="http://localhost:5173",
        api_base_path="/auth",
        website_base_path="/auth"
    ),
    supertokens_config=SupertokensConfig(connection_uri="http://auth-service:3567"),
    framework='fastapi',
    recipe_list=[
        session.init(),
        emailpassword.init()
    ],
    mode='asgi'
)

app = FastAPI()
app.add_middleware(get_middleware())
app.add_middleware(
    CORSMiddleware,
    allow_origins=[ "http://localhost:5173" ],
    allow_credentials=True,
    allow_methods=["GET", "PUT", "POST", "DELETE", "OPTIONS", "PATCH"],
    allow_headers=["Content-Type"] + get_all_cors_headers(),
)

@app.get("/")
def read_root():
    return {"Hello": "World5s"}