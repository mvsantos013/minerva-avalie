#!/bin/bash

if [ "$STAGE" == "dev" ]; then
    echo "Launching backend development server..."
    uvicorn main:app --port 5001 --host 0.0.0.0 --reload
else
    uvicorn main:app --port 5001 --host 0.0.0.0
fi