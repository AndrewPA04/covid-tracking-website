import flask
from flask import Flask,render_template,jsonify,Response
import requests
import bs4

app = Flask(__name__)

@app.route('https://covid-tracker-website.herokuapp.com/')
def indexPage():

    return render_template("index.html") 

@app.route('https://covid-tracker-website.herokuapp.com/api/recordstats',methods=['GET'])
def sendJSON():
    response = requests.get("https://www.worldometers.info/coronavirus/")
    content = response.content
    soup = bs4.BeautifulSoup(content,'html.parser')
    currentCases = soup.find_all(class_="number-table-main")
    closedCases = soup.find_all(class_="number-table")
    activeCases = currentCases[0].text.strip()
    recoveredCases = closedCases[2].text.strip()
    deaths = closedCases[3].text.strip()
    return jsonify(
        deathsJSON = deaths,
        casesJSON = activeCases,
        recoveriesJSON = recoveredCases,
    )

if __name__ == "__main__":
    app.run(debug=True)

