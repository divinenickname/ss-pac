from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/localproxy.pac')
def serve_pac():
    return send_from_directory('./files', 'localproxy.pac', as_attachment=True)

def buildPac():
    return

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
