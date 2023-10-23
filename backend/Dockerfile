FROM python:3.9

WORKDIR /app

COPY . /app

RUN pip install pipenv==2020.11.15 && pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5001

ENTRYPOINT [ "bash", "entrypoint.sh" ]