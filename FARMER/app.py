from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/produce')
def get_produce():
    # Simulate data for available produce
    produce = [
        { 'id': 1, 'name': 'Apples', 'quantity': 100 },
        { 'id': 2, 'name': 'Bananas', 'quantity': 50 },
        { 'id': 3, 'name': 'Oranges', 'quantity': 75 }
    ]
    return jsonify(produce)

if __name__ == '__main__':
    app.run(debug=True)

